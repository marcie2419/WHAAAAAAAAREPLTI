import * as Blockly from "blockly/core";

const blockName = "get_about_then";

const blockData = {
    "message0": "Get User:%1 Reddit data then%2",
    "args0": [
        {
          "type": "input_value",
          "name": "USER",
          "check": [ "Number", "String" ]
        },
				{
          "type": "input_statement",
          "name": "THEN"
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
		"inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
		const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `https.get('https://www.reddit.com/user/' + ${user} + '/about.json', async resp => {
      let data2 = "";
       resp.on("data", async chunk => {
       data2 += chunk;
      }); resp.on("end", async () => {
        let info = JSON.parse(data2)
        ${statementThen}                           
                              });
                        
                          })
        
`;
    return code;
};
