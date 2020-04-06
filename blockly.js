localStorage.clear();

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    {
        toolbox: document.getElementById('toolbox'),
        horizontalLayout: true,
        toolboxPosition: 'end',
        move: {
            scrollbars: false,
            drag: true,
            wheel: false
        }
    });

//-----------------------------------------------------------------------------------------------------//
//initialize scene, create camera and canvas
var scene;
var objects;
var camera;
var renderer;
var stopRendering;
var cube;
var arrRotate = [];
var controls;

var requestId;

var volume;
var jumpObject = new Object;
var blokyNaScene = [];


var element = document.getElementById("scene");


function init() {

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#fff");
    renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
    element.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    // controls = new THREE.OrbitControls(camera,renderer.domElement);

    // controls = new THREE.OrbitControls( camera, render.domElement );


    camera.position.z = 5;
    //looks in the center of the scene since that where we always sstart when creating a scene
    camera.lookAt(scene.position);

    // document.body.appendChild(renderer.domElement);
    // controls = new THREE.OrbitControls(camera, renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
        camera.aspect = window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();
    });

    // always render the scene
    render();
}


init();

function rotate(object) {

    object.rotation.x += 0.02;
    object.rotation.y += 0.02;

}


var i;

function render() {

    if (arrRotate.length > 0) {
        for (i = 0; i < arrRotate.length; i++) {
            rotate(scene.getObjectByName(arrRotate[i]));
        }
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);

}

//------------------------------------------------------------------------------------------------------------------------------//


var onresize = function (e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);



function runCode(event) {

    //pre kazdy objekt pozriet ci existuje block ak nie prec
    //vsetky objekty
    var objektyNaScene = scene.children;
    //vsetky bloky

    //vymaz objekty naviac
    // objektyNaScene.every(e => {
    //     // console.log(e.name);
    //     if (!blokyNaScene.includes(e.name)) {
    //         scene.remove(scene.getObjectByName(e.name));
    //     }
    // })

    for (i = 0; i < objektyNaScene.length; i++) {
        if (!blokyNaScene.includes(objektyNaScene[i].name)) {
            scene.remove(scene.getObjectByName(objektyNaScene[i].name));
        }
    }

    if(workspace.getAllBlocks().length == 0){
        blokyNaScene = []
    }else{
        for (i = 0; i < workspace.getAllBlocks().length; i++) {
            blokyNaScene[i] = workspace.getAllBlocks()[i].id;
            console.log(workspace.getAllBlocks())
        }
    }

    if (event.type == Blockly.Events.BLOCK_DELETE) {

        arr = [];
        arr = event.ids;

        arr.every(e => {
            if (arrRotate.includes(e)) {
                arrRotate = arrRotate.filter(x => x != e);
            }
        })

        arr.every(x => scene.remove(scene.getObjectByName(x)))

        

    };

    console.log(blokyNaScene);

    //zastav 2x pustene zvuky
    Object.keys(jumpObject).forEach(key => {
        jumpObject[key].volume(0.5);
        jumpObject[key].rate(1);
        if (!blokyNaScene.includes(key)) {
            jumpObject[key].pause();
            // delete jumpObject[key];
            console.log(jumpObject);
        }
    });

    if (event.type) {
        if ((event.type == "move" && event.oldParentId)) {
            // console.log(event.oldParentId);
        } else {
            window.LoopTrap = 1000;
            Blockly.JavaScript.INFINITE_LOOP_TRAP =
                'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
            arrRotate = [];

            for (i = 0; i < scene.children.length; i++) {
                var obj = scene.getObjectByName(scene.children[i].name);
                obj.position.set(0, 0, 0);
            }

            var code = Blockly.JavaScript.workspaceToCode(workspace);
            Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
            try {
                // console.log("code: "+code)
                eval(code);
            } catch (e) {
                alert(e);
            }
        }
    }


}
workspace.addChangeListener(runCode);





