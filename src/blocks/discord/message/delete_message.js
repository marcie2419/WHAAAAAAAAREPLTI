import * as Blockly from "blockly/core";
import { registerRestriction } from "../../../restrictions";

const blockName = "s4d_delete";

const blockData = {
    "message0": "%{BKY_DELETE_MESSAGE}",
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
    const code = `s4d.message.delete();\n`;
    return code;
};

registerRestriction(blockName, {
    type: "toplevelparent",
    message: "RES_MUST_BE_IN_ON_MESSAGE",
    types: [
        "s4d_on_message"
    ]
});
