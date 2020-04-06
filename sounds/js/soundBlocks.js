Blockly.Blocks['jump'] = {
    init: function () {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("Jump");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['80svibe'] = {
    init: function () {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("80svibe");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['collision'] = {
    init: function () {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("collision");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['test'] = {
    init: function () {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("test");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['test'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code;

    code = '';

    if (jumpObject[this.id] == undefined) {
        localStorage[this.id] = 1;
        jumpObject[this.id] = new Howl({
            src: 'https://rpg.hamsterrepublic.com/wiki-images/2/21/Collision8-Bit.ogg',
            html5: true,
            loop: true,
            volume: 0.5,
        })
        jumpObject[this.id].play();
    }

    return code;
};

Blockly.JavaScript['jump'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code;

    code = '';

    if (jumpObject[this.id] == undefined) {
        localStorage[this.id] = 1;
        jumpObject[this.id] = new Howl({
            src: 'http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg',
            html5: true,
            loop: true,
            volume: 0.5,
            onend: () => {
                    jumpObject[this.id].pause();
                    timer = setTimeout(() => {
                        if (blokyNaScene.includes(this.id)) {
                            jumpObject[this.id].play();
                        }
                    }, localStorage[this.id] * 1000);
                }
            }
        )
        jumpObject[this.id].play();
    }

    return code;
};

Blockly.JavaScript['80svibe'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code;

    code = '';

    if (jumpObject[this.id] == undefined) {
        localStorage[this.id] = 1;
        jumpObject[this.id] = new Howl({
            src: 'https://howlerjs.com/assets/howler.js/examples/player/audio/80s_vibe.webm',
            html5: true,
            loop: true,
            volume: 0.5,
            onend: () => {
                    jumpObject[this.id].pause();
                    timer = setTimeout(() => {
                        if (blokyNaScene.includes(this.id)) {
                            jumpObject[this.id].play();
                        }
                    }, localStorage[this.id] * 1000);
                }
            }
        )
        jumpObject[this.id].play();
    }

    return code;
};

Blockly.JavaScript['collision'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code;

    code = '';

    if (jumpObject[this.id] == undefined) {
        localStorage[this.id] = 1;
        jumpObject[this.id] = new Howl({
            src: 'https://rpg.hamsterrepublic.com/wiki-images/2/21/Collision8-Bit.ogg',
            html5: true,
            loop: true,
            volume: 0.5,
            onend: () => {
                    jumpObject[this.id].pause();
                    timer = setTimeout(() => {
                        if (blokyNaScene.includes(this.id)) {
                            jumpObject[this.id].play();
                        }
                    }, localStorage[this.id] * 1000);
                }
            }
        )
        jumpObject[this.id].play();
    }

    return code;
};


Blockly.Blocks['volume'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("volume")
            .appendField(new Blockly.FieldNumber(1, 0, 1, 0.1), "volume");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['rate'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("rate")
            .appendField(new Blockly.FieldNumber(0.5, 0, 4, 0.1), "rate");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['delay'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("delay")
            .appendField(new Blockly.FieldNumber(1, 0, 10, 0.1), "delay");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['volume'] = function (block) {
    var volume = block.getFieldValue('volume');

    //prednastav default volume
    Object.keys(jumpObject).forEach(key => {
        // jumpObject[key].volume(0.5);
    });

    var code = '';
    var blok;

    if (this.getChildren()[0] || this.getSurroundParent() || this.getParent()) {
    }
    else {
        //vsetci volume globalne
        Object.keys(jumpObject).forEach(key => {
            jumpObject[key].volume(volume);
        });
        return code;
    }

    if (this.getSurroundParent() != null) {
        //surrounded blok
        if (jumpObject[this.getSurroundParent().id]) {
            jumpObject[this.getSurroundParent().id].volume(volume);
        }
    }

    else if (this.getChildren()[0]) {
        blok = this;
        //iba nasledujuce bloky
        while (blok.nextConnection.targetConnection) {
            if (jumpObject[blok.nextConnection.targetConnection.sourceBlock_.id]) {
                jumpObject[blok.nextConnection.targetConnection.sourceBlock_.id].volume(volume);
            }
            blok = blok.nextConnection.targetConnection.sourceBlock_;
        }
    }



    return code;
};

Blockly.JavaScript['rate'] = function (block) {
    var rate = block.getFieldValue('rate');

    //prednastav default volume
    Object.keys(jumpObject).forEach(key => {
        jumpObject[key].rate(1);
    });

    var blok;

    if (this.getSurroundParent() != null) {
        //surrounded blok
        if (jumpObject[this.getSurroundParent().id]) {
            jumpObject[this.getSurroundParent().id].rate(rate);
        }
    }

    else if (this.getChildren()[0]) {
        blok = this;
        //iba nasledujuce bloky
        while (blok.nextConnection.targetConnection) {
            if (jumpObject[blok.nextConnection.targetConnection.sourceBlock_.id]) {
                jumpObject[blok.nextConnection.targetConnection.sourceBlock_.id].rate(rate);
            }
            blok = blok.nextConnection.targetConnection.sourceBlock_;
        }
    }
    if (this.getChildren()[0] || this.getSurroundParent() || this.getParent()) { }
    else {
        //vsetci globalne
        Object.keys(jumpObject).forEach(key => {
            jumpObject[key].rate(rate);
        });
    }

    var code = '';
    return code;
};

// Blockly.JavaScript['fade'] = function (block) {
//     var rate = block.getFieldValue('fade');

//     //prednastav default volume
//     Object.keys(jumpObject).forEach(key => {
//         jumpObject[key].fade(0,1,fade);
//     });

//     var blok;

//     if (this.getSurroundParent() != null) {
//         //surrounded blok
//         jumpObject[this.getSurroundParent().id].fade(0,1,fade);
//     }

//     else if (this.getChildren()[0]) {
//         blok = this;
//         //iba nasledujuce bloky
//         while (blok.nextConnection.targetConnection) {
//             jumpObject[blok.nextConnection.targetConnection.sourceBlock_.id].fade(0,1,fade);
//             blok = blok.nextConnection.targetConnection.sourceBlock_;
//         }
//     }
//     if (this.getChildren()[0] || this.getSurroundParent() || this.getParent()) { }
//     else {
//         //vsetci globalne
//         Object.keys(jumpObject).forEach(key => {
//             jumpObject[key].fade(0,1,fade);
//         });
//     }

//     var code = '';
//     return code;
// };


Blockly.JavaScript['delay'] = function (block) {
    var delay = block.getFieldValue('delay');


    //prednastav default delay
    Object.keys(jumpObject).forEach(key => {
        localStorage[key] = 1;
    });

    var blok;

    if (this.getSurroundParent() != null) {
        //surrounded blok
        localStorage[this.getSurroundParent().id] = delay;
    }

    else if (this.getChildren()[0]) {
        blok = this;
        //iba nasledujuce bloky
        while (blok.nextConnection.targetConnection) {
            localStorage[blok.nextConnection.targetConnection.sourceBlock_.id] = delay;
            blok = blok.nextConnection.targetConnection.sourceBlock_;
        }
    }
    if (this.getChildren()[0] || this.getSurroundParent() || this.getParent()) { }
    else {
        //vsetci globalne
        Object.keys(jumpObject).forEach(key => {
            localStorage[key] = delay;
        });
    }

    var code = '';
    return code;
};