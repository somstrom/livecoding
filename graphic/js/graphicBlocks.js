
var movecode = '';

//Box block
Blockly.Blocks['box'] = {
    init: function () {
        this.appendStatementInput("Box")
            .setCheck(null)
            .appendField("Box");
        this.setInputsInline(true);
        this.setPreviousStatement(true, 'Cone');
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//Cone block
Blockly.Blocks['cone'] = {
    init: function () {
        this.appendStatementInput("Cone")
            .setCheck(null)
            .appendField("Cone");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//Line block
Blockly.Blocks['line'] = {
    init: function () {
        this.appendStatementInput("Line")
            .setCheck(null)
            .appendField("Line");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//circle block
Blockly.Blocks['circle'] = {
    init: function () {
        this.appendStatementInput("Circle")
            .setCheck(null)
            .appendField("Circle");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//ball block
Blockly.Blocks['ball'] = {
    init: function () {
        this.appendStatementInput("Ball")
            .setCheck(null)
            .appendField("Ball");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['rotate'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Rotate");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(100);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move")
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.1), "X")
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.1), "Y")
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.1), "Z");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(220);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['randomMove'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(220);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['randomScale'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Scale")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(220);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['scale'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Scale")
            .appendField(new Blockly.FieldNumber(1, 0.1, 5, 0.1), "X");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//colour block
Blockly.Blocks['colour'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Colour")
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['repeat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabelSerializable("repeat"), "repeat")
            .appendField(new Blockly.FieldNumber(1, 1, 100, 1), "number")
            .appendField(new Blockly.FieldLabelSerializable("times"), "times");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['repeat'] = function (block) {
    var number = block.getFieldValue('number');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

    var code = movecode;

    return code;
};

//The generator function takes a reference to the block for processing. It renders the inputs (the VALUE input, above) into code strings, and then concatenates those into a larger expression.
Blockly.JavaScript['box'] = function (block) {

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Box');

    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';


    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat") {
            repeat_number *= parent.inputList[0].fieldRow[1].value_;
            repeat_name += parent.id;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

        parent = this.getSurroundParent();

        while (parent.type == "repeat") {

            for (var i = scene.children.length - 1; i >= 0; i--) {
                // console.log(parseInt(scene.children[i].name.slice(20)))

                if (scene.children[i].name.includes(name) && parseInt(scene.children[i].name.slice(20)) > repeat_number - 1 && scene.children[i].name.slice(20) != NaN) {
                    scene.remove(scene.getObjectByName(scene.children[i].name))
                }
            }
            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

    } else {
        for (var i = scene.children.length - 1; i >= 0; i--) {
            if (scene.children[i].name.includes(name) && scene.children[i].name.length > 20) {
                scene.remove(scene.getObjectByName(scene.children[i].name))
            }
        }
    }

    if (scene.getObjectByName(name)) { }
    else {
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshNormalMaterial();
        var cube = new THREE.Mesh(geometry, material);
        cube.name = name;
        scene.add(cube);
        cube.rotation.set(1, 1, 1);
        console.log(name + i)
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) { }
        else {
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshNormalMaterial();
            var cube = new THREE.Mesh(geometry, material);
            cube.name = name + i;
            scene.add(cube);
            cube.rotation.set(i + 1, i + 1, i + 1);
        }
    }

    // code += "if (scene.getObjectByName('" + name + "')){}"
    //     + "else"
    //     + "{var geometry = new THREE.BoxGeometry(1,1,1);"
    //     // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
    //     + "var material = new THREE.MeshNormalMaterial();"
    //     + "var cube = new THREE.Mesh(geometry, material);"
    //     + "cube.name = '" + name + "';"
    //     + "scene.add(cube);"
    //     + "cube.rotation.set(0.5,1,0);}";

    return code;
};

// Blockly.JavaScript['box'] = function (block) {

//     var statements_box = Blockly.JavaScript.statementToCode(block, 'Box');

//     var code = '';
//     var name = this.id;

//     code += "if (scene.getObjectByName('" + name + "')){}"
//         + "else"
//         + "{var geometry = new THREE.BoxGeometry(1,1,1);"
//         // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
//         + "var material = new THREE.MeshNormalMaterial();"
//         + "var cube = new THREE.Mesh(geometry, material);"
//         + "cube.name = '" + name + "';"
//         + "scene.add(cube);"
//         + "cube.rotation.set(0.5,1,0);}";

//     return code;
// };


Blockly.JavaScript['ball'] = function (block) {

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Ball');

    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';

    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat") {
            repeat_number *= parent.inputList[0].fieldRow[1].value_;
            repeat_name += parent.id;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

        parent = this.getSurroundParent();

        while (parent.type == "repeat") {

            for (var i = scene.children.length - 1; i >= 0; i--) {
                // console.log(parseInt(scene.children[i].name.slice(20)))

                if (scene.children[i].name.includes(name) && parseInt(scene.children[i].name.slice(20)) > repeat_number - 1 && scene.children[i].name.slice(20) != NaN) {
                    scene.remove(scene.getObjectByName(scene.children[i].name))
                }
            }
            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

    } else {
        for (var i = scene.children.length - 1; i >= 0; i--) {
            if (scene.children[i].name.includes(name) && scene.children[i].name.length > 20) {
                scene.remove(scene.getObjectByName(scene.children[i].name))
            }
        }
    }

    if (scene.getObjectByName(name)) { }
    else {
        var geometry = new THREE.DodecahedronBufferGeometry(1, 2);
        var material = new THREE.MeshNormalMaterial();
        var ball = new THREE.Mesh(geometry, material);
        ball.name = name;
        scene.add(ball);
        ball.rotation.set(i + 1, i + 1, i + 1);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) { }
        else {
            var geometry = new THREE.DodecahedronBufferGeometry(1, 2);
            var material = new THREE.MeshNormalMaterial();
            var ball = new THREE.Mesh(geometry, material);
            ball.name = name + i;
            scene.add(ball);
            ball.rotation.set(i + 1, i + 1, i + 1);
        }
    }

    // code += "if (scene.getObjectByName('" + name + "')){}"
    //     + "else"
    //     + "{var geometry = new THREE.BoxGeometry(1,1,1);"
    //     // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
    //     + "var material = new THREE.MeshNormalMaterial();"
    //     + "var cube = new THREE.Mesh(geometry, material);"
    //     + "cube.name = '" + name + "';"
    //     + "scene.add(cube);"
    //     + "cube.rotation.set(0.5,1,0);}";

    return code;

    // code += "if (scene.getObjectByName('" + name + "')){}"
    //     + "else"
    //     + "{var geometry = new THREE.DodecahedronBufferGeometry(1,2);"
    //     // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
    //     + "var material = new THREE.MeshNormalMaterial();"
    //     + "var ball = new THREE.Mesh(geometry, material);"
    //     + "ball.name = '" + name + "';"
    //     + "scene.add(ball);"
    //     + "ball.rotation.set(0.5,0.5,0);}";

    // return code;
};

Blockly.JavaScript['rotate'] = function (block) {

    var number;
    var code = '';
    var blok;

    // console.log(this.nextConnection);

    //rotuj objekt ktoreho blok ta obklopuje
    if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {
        if (!arrRotate.includes(this.getSurroundParent().id))
            arrRotate.push(this.getSurroundParent().id);
    }
    if (this.getChildren()[0]) {
        blok = this.nextConnection.targetConnection.sourceBlock_;

        recursion(this.id, null, null, null, number, "rotate");
    }

    //rotuj vsekty objekty ak nemas potomka ani surroundparenta
    // if (this.getChildren()[0] || this.getSurroundParent() || this.getParent()) { }
    // else {
    //     for (i = 0; i < scene.children.length; i++) {
    //         if (!arrRotate.includes(scene.children[i].name))
    //             arrRotate.push(scene.children[i].name);
    //     }
    // }



    return code;
};

Blockly.JavaScript['cone'] = function (block) {

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Cone');


    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';

    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat") {
            repeat_number *= parent.inputList[0].fieldRow[1].value_;
            repeat_name += parent.id;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

        parent = this.getSurroundParent();

        while (parent.type == "repeat") {

            for (var i = scene.children.length - 1; i >= 0; i--) {
                // console.log(parseInt(scene.children[i].name.slice(20)))

                if (scene.children[i].name.includes(name) && parseInt(scene.children[i].name.slice(20)) > repeat_number - 1 && scene.children[i].name.slice(20) != NaN) {
                    scene.remove(scene.getObjectByName(scene.children[i].name))
                }
            }
            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

    } else {
        for (var i = scene.children.length - 1; i >= 0; i--) {
            if (scene.children[i].name.includes(name) && scene.children[i].name.length > 20) {
                scene.remove(scene.getObjectByName(scene.children[i].name))
            }
        }
    }

    if (scene.getObjectByName(name)) { }
    else {
        var geometry = new THREE.ConeGeometry(1, 2);
        var material = new THREE.MeshNormalMaterial();
        var cone = new THREE.Mesh(geometry, material);
        cone.name = name;
        scene.add(cone);
        cone.rotation.set(i + 1, i + 1, i + 1);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) { }
        else {
            var geometry = new THREE.ConeGeometry(1, 2);
            var material = new THREE.MeshNormalMaterial();
            var cone = new THREE.Mesh(geometry, material);
            cone.name = name + i;
            scene.add(cone);
            cone.rotation.set(i + 1, i + 1, i + 1);
        }
    }

    // code += "if (scene.getObjectByName('" + name + "')){}"
    //     + "else"
    //     + "{var geometry = new THREE.ConeGeometry(1,2);"
    //     // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
    //     + "var material = new THREE.MeshNormalMaterial();"
    //     + "var cone = new THREE.Mesh(geometry, material);"
    //     + "cone.name = '" + name + "';"
    //     + "scene.add(cone);"
    //     + "cone.rotation.set(0.5,0.5,0);}";


    return code;

};

Blockly.JavaScript['circle'] = function (block) {

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Circle');

    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';

    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat") {
            repeat_number *= parent.inputList[0].fieldRow[1].value_;
            repeat_name += parent.id;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

        parent = this.getSurroundParent();

        while (parent.type == "repeat") {

            for (var i = scene.children.length - 1; i >= 0; i--) {
                // console.log(parseInt(scene.children[i].name.slice(20)))

                if (scene.children[i].name.includes(name) && parseInt(scene.children[i].name.slice(20)) > repeat_number - 1 && scene.children[i].name.slice(20) != NaN) {
                    scene.remove(scene.getObjectByName(scene.children[i].name))
                }
            }
            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

    } else {
        for (var i = scene.children.length - 1; i >= 0; i--) {
            if (scene.children[i].name.includes(name) && scene.children[i].name.length > 20) {
                scene.remove(scene.getObjectByName(scene.children[i].name))
            }
        }
    }

    if (scene.getObjectByName(name)) { }
    else {
        var geometry = new THREE.CircleGeometry(1, 30);
        var material = new THREE.MeshNormalMaterial();
        var circle = new THREE.Mesh(geometry, material);
        circle.name = name;
        scene.add(circle);
        circle.rotation.set(i + 1, i + 1, i + 1);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) { }
        else {
            var geometry = new THREE.CircleGeometry(1, 30);
            var material = new THREE.MeshNormalMaterial();
            var circle = new THREE.Mesh(geometry, material);
            circle.name = name + i;
            scene.add(circle);
            circle.rotation.set(i + 1, i + 1, i + 1);
        }
    }

    // code += "if (scene.getObjectByName('" + name + "')){}"
    //     + "else"
    //     + "{var geometry = new THREE.CircleGeometry(1,30);"
    //     // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
    //     + "var material = new THREE.MeshNormalMaterial();"
    //     + "var circle = new THREE.Mesh(geometry, material);"
    //     + "circle.name = '" + name + "';"
    //     + "scene.add(circle);}";
    // // + "circle.rotation.set(0.5,0.5,0);}";

    return code;
};

Blockly.JavaScript['colour'] = function (block) {

    // var colour_name = block.getFieldValue('COLOUR');
    // var color = '0x'+colour_name.slice(1,7);

    // console.log(this);

    // var code = '';
    // code += "var obj = scene.getObjectByName('cube');"
    //     +"console.log('parent block: '+this.parentBlock_);"
    //     +"if(this.parentBlock_){"
    //     +"obj.material.color.setHex("+color+");}"
    //     +"else obj.material.color.setHex( 0x333333 );";
    // return code;
};

Blockly.JavaScript['move'] = function (block) {

    var number_x = block.getFieldValue('X');
    var number_y = block.getFieldValue('Y');
    var number_z = block.getFieldValue('Z');
    var xx = number_x;
    var yy = number_y;
    var zz = number_z;
    var nx = 0;

    var number = 1;
    var code = '';
    // movecode = '';
    var type = "move";

    if (this.getSurroundParent()) {
        var parent = this.getSurroundParent();
        while (parent.type == "repeat") {
            number *= parent.inputList[0].fieldRow[1].value_;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            }
            else {
                break;
            }
        }
    }

    var blok;

    scene.children.forEach(y => {
        if (y.name.includes(block.id)) {
            nx += 1;
        }
    });

    if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {
        scene.children.forEach((x) => {
            if (x.name.includes(this.getSurroundParent().id)) {
                // if (x.name.slice(20) % (nx / number) == 0 && x.name.slice(20) != '' && number != 1) {
                //     xx += number_x;
                //     zz += number_z;
                //     yy += number_y;
                // }
                // movecode += "scene.getObjectByName('"+x.name+"').position.set("+xx+","+yy+","+zz+");";
                // scene.getObjectByName(x.name).poswaition.set(number_x, number_y, number_z);
                movecode += "scene.getObjectByName('"+x.name+"').position.set("+number_x+","+number_y+","+number_z+");";
            }
        })
    }
    if (this.getChildren()[0]) {

        blok = this.nextConnection.targetConnection.sourceBlock_;

        movecode += "recursion('" + this.id + "'," + number_x + "," + number_y + "," + number_z + "," + number + ",'move');";
        code += "recursion('" + this.id + "'," + number_x + "," + number_y + "," + number_z + "," + number + ",'move');";

        // console.log("recursion('"+this.id+"',"+number_x+","+number_y+","+number_z+","+number+",'move');");

        // recursion(this.id, number_x, number_y, number_z, number, "move");
    }

    return code;
};



function recursion(blok, number_x, number_y, number_z, number, type) {

    // console.log(type);

    var block = workspace.getBlockById(blok);
    // if (block) {
    //     if (block.nextConnection.targetConnection) {
    //         block = block.nextConnection.targetConnection.sourceBlock_;
    //     }
    // }

    var ny = 0;
    var nx = 0;
    var x_num = number_x;
    var y_num = number_y;
    var z_num = number_z;
    var actionType = type

    // console.log("RECURSION")

    // console.log(number_x)

    while (block) {
        scene.children.forEach(y => {
            if (y.name.includes(block.id)) {
                nx += 1;
            }
        });

        scene.children.forEach((x) => {
            if (x.name.includes(block.id)) {
                if (type == "move") {
                    if (x.name.slice(20) % (nx / number) == 0 && x.name.slice(20) != '' && number != 1) {
                        x_num += number_x;
                        z_num += number_z;
                        y_num += number_y;
                    }
                    console.log(x.name + ", "+nx);
                    scene.getObjectByName(x.name).position.set(x_num, y_num, z_num);
                }
                if (type == "randomMove") {
                    arrMove.push([x.name, number]);
                }
                if (type == "scale") {
                    scene.getObjectByName(x.name).scale.set(number_x, number_x, number_x);
                }
                if (type == "randomScale") {
                    arrScale.push(x.name);
                }
                if (type == "rotate") {
                    arrRotate.push(x.name);
                }
            }
        })

        

        // console.log(blok)
        if (block.type == "repeat") {
            // console.log(blok.childBlocks_)
            block.childBlocks_.forEach(x => {
                if (x.parentBlock_.type == "repeat") {
                    // console.log(x)
                    recursion(x.id, number_x, number_y, number_z, number, actionType);
                }
            })
        }

        if (block.nextConnection.targetConnection) {
            block = block.nextConnection.targetConnection.sourceBlock_;
            x_num = number_x;
            y_num = number_y;
            z_num = number_z;
            nx = 0;
        } else {
            break;
        }
    }
}

Blockly.JavaScript['randomMove'] = function (block) {

    var number = 1;

    if (this.getSurroundParent()) {
        var parent = this.getSurroundParent();
        // console.log(this.getSurroundParent())
        while (parent.type == "repeat") {
            number *= parent.inputList[0].fieldRow[1].value_;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            }
            else {
                break;
            }
        }
    }

    var blok;

    if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {
        arrMove.push([this.getSurroundParent().id, number]);
    }
    if (this.getChildren()[0]) {
        blok = this.nextConnection.targetConnection.sourceBlock_;

        recursion(this.id, null, null, null, number, "randomMove");
    }

    var code = '';
    return code;
};

Blockly.JavaScript['scale'] = function (block) {

    var number_x = block.getFieldValue('X');

    var number = 1;

    if (this.getSurroundParent()) {
        var parent = this.getSurroundParent();
        while (parent.type == "repeat") {
            number *= parent.inputList[0].fieldRow[1].value_;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            }
            else {
                break;
            }
        }
    }

    var blok;

    if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {
        scene.children.forEach((x) => {
            if (x.name.includes(this.getSurroundParent().id)) {
                // scene.getObjectByName(x.name).scale.set(number_x, number_x, number_x, number);
                movecode += "scene.getObjectByName('"+x.name+"').scale.set("+number_x+", "+number_x+", "+number_x+", "+number+");";
            }
        })
    }
    if (this.getChildren()[0]) {
        blok = this.nextConnection.targetConnection.sourceBlock_;

        movecode += "recursion('" + this.id + "'," + number_x + "," + number_x + "," + number_x + "," + number + ",'scale');";

        // recursion(this.id, number_x, number_x, number_x, number, "scale");
    }

    var code = '';
    return code;
};

Blockly.JavaScript['randomScale'] = function (block) {

    var number;

    if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {
        arrScale.push(this.getSurroundParent().id);
    }
    if (this.getChildren()[0]) {
        blok = this.nextConnection.targetConnection.sourceBlock_;

        recursion(this.id, null, null, null, number, "randomScale");
    }

    var code = '';
    return code;
};


//animation
Blockly.Blocks['paintOver'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("paint over");
        this.setInputsInline(true);
        this.setColour(100);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['paintOver'] = function (block) {
    var code = ''
    // renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: true } );
    renderer.autoClearColor = false;
    console.log("false")
    return code;
}