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
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.5), "X")
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.5), "Y")
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.5), "Z");
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
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.5), "X");
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

//The generator function takes a reference to the block for processing. It renders the inputs (the VALUE input, above) into code strings, and then concatenates those into a larger expression.
Blockly.JavaScript['box'] = function (block) {

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Box');

    var code = '';
    var name = this.id;

    console.log(name);

    code += "if (scene.getObjectByName('" + name + "')){}"
        + "else"
        + "{var geometry = new THREE.BoxGeometry(1,1,1);"
        // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
        + "var material = new THREE.MeshNormalMaterial();"
        + "var cube = new THREE.Mesh(geometry, material);"
        + "cube.name = '" + name + "';"
        + "scene.add(cube);"
        + "cube.rotation.set(0.5,1,0);}";

    return code;
};

Blockly.JavaScript['ball'] = function (block) {

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Ball');

    var code = '';
    var name = this.id;

    code += "if (scene.getObjectByName('" + name + "')){}"
        + "else"
        + "{var geometry = new THREE.DodecahedronBufferGeometry(1,2);"
        // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
        + "var material = new THREE.MeshNormalMaterial();"
        + "var ball = new THREE.Mesh(geometry, material);"
        + "ball.name = '" + name + "';"
        + "scene.add(ball);"
        + "ball.rotation.set(0.5,0.5,0);}";

    return code;
};

Blockly.JavaScript['rotate'] = function (block) {


    var code = '';
    var blok;

    // console.log(this.nextConnection);

    //rotuj objekt ktoreho blok ta obklopuje
    if (this.getSurroundParent() != null) {
        if (!arrRotate.includes(this.getSurroundParent().id))
            arrRotate.push(this.getSurroundParent().id);
    } else if (this.getChildren()[0]) {
        //rotuj objekty pod tebou
        blok = this;
        while (blok.nextConnection.targetConnection) {
            // console.log(blok.nextConnection.targetConnection.sourceBlock_);
            if (scene.getObjectByName(blok.nextConnection.targetConnection.sourceBlock_.id)) {
                if (!arrRotate.includes(blok.nextConnection.targetConnection.sourceBlock_.id))
                    arrRotate.push(blok.nextConnection.targetConnection.sourceBlock_.id);
            }
            blok = blok.nextConnection.targetConnection.sourceBlock_;
        }
    }

    //rotuj vsekty objekty ak nemas potomka ani surroundparenta
    if (this.getChildren()[0] || this.getSurroundParent() || this.getParent()) { }
    else {
        for (i = 0; i < scene.children.length; i++) {
            if (!arrRotate.includes(scene.children[i].name))
                arrRotate.push(scene.children[i].name);
        }
    }



    return code;
};

Blockly.JavaScript['cone'] = function (block) {

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Cone');


    var code = '';
    var name = this.id;

    code += "if (scene.getObjectByName('" + name + "')){}"
        + "else"
        + "{var geometry = new THREE.ConeGeometry(1,2);"
        // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
        + "var material = new THREE.MeshNormalMaterial();"
        + "var cone = new THREE.Mesh(geometry, material);"
        + "cone.name = '" + name + "';"
        + "scene.add(cone);"
        + "cone.rotation.set(0.5,0.5,0);}";


    return code;
};

Blockly.JavaScript['circle'] = function (block) {

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Circle');

    var code = '';
    var name = this.id;

    code += "if (scene.getObjectByName('" + name + "')){}"
        + "else"
        + "{var geometry = new THREE.CircleGeometry(1,30);"
        // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
        + "var material = new THREE.MeshNormalMaterial();"
        + "var circle = new THREE.Mesh(geometry, material);"
        + "circle.name = '" + name + "';"
        + "scene.add(circle);}";
    // + "circle.rotation.set(0.5,0.5,0);}";

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

Blockly.Blocks['pohyb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Pohyb")
            .appendField(new Blockly.FieldAngle(0), "X")
            .appendField(new Blockly.FieldAngle(0), "Y")
            .appendField(new Blockly.FieldAngle(0), "Z");
        Blockly.FieldAngle.CLOCKWISE = true;
        Blockly.FieldAngle.OFFSET = 90;
        Blockly.FieldAngle.WRAP = 180;
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("x,y,z");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['pohyb'] = function (block) {
    var angle_x = block.getFieldValue('X') / 100;
    var angle_y = block.getFieldValue('Y') / 100;
    var angle_z = block.getFieldValue('Z') / 100;

    var blok;

    if (this.getSurroundParent() != null) {
        object = scene.getObjectByName(this.getSurroundParent().id);
        object.position.set(angle_x, angle_y, angle_z);
    }
    else if (this.getChildren()[0]) {
        blok = this;
        while (blok.nextConnection.targetConnection) {
            if (scene.getObjectByName(blok.nextConnection.targetConnection.sourceBlock_.id)) {
                object = scene.getObjectByName(blok.nextConnection.targetConnection.sourceBlock_.id);
                object.position.set(angle_x, angle_y, angle_z);
            }
            blok = blok.nextConnection.targetConnection.sourceBlock_;
        }
    }
    if (this.getChildren()[0] || this.getSurroundParent() || this.getParent()) { }
    else {
        for (i = 0; i < scene.children.length; i++) {
            object = scene.getObjectByName(scene.children[i].name);
            object.position.set(angle_x, angle_y, angle_z);
        }
    }

    var code = '';
    return code;
};

Blockly.JavaScript['move'] = function (block) {

    var number_x = block.getFieldValue('X');
    var number_y = block.getFieldValue('Y');
    var number_z = block.getFieldValue('Z');

    // TODO: Assemble JavaScript into code variable.

    var blok;

    if (this.getSurroundParent() != null) {
        object = scene.getObjectByName(this.getSurroundParent().id);
        object.position.set(number_x, number_y, number_z);
    }
    else if (this.getChildren()[0]) {
        blok = this;
        while (blok.nextConnection.targetConnection) {
            if (scene.getObjectByName(blok.nextConnection.targetConnection.sourceBlock_.id)) {
                object = scene.getObjectByName(blok.nextConnection.targetConnection.sourceBlock_.id);
                object.position.set(number_x, number_y, number_z);
            }
            blok = blok.nextConnection.targetConnection.sourceBlock_;
        }
    }
    if (this.getChildren()[0] || this.getSurroundParent() || this.getParent()) { }
    else {
        for (i = 0; i < scene.children.length; i++) {
            object = scene.getObjectByName(scene.children[i].name);
            object.position.set(number_x, number_y, number_z);
        }
    }

    var code = '';
    return code;
};

Blockly.JavaScript['scale'] = function (block) {

    var number_x = block.getFieldValue('X');

    // TODO: Assemble JavaScript into code variable.

    var code = '';
    return code;
};