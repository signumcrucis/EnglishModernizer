let table = require("./dictionary.json");

var translate = (text) =>
{

    for(let i = 0; i < table.length; i++)
    {
        let entry = table[i];
        let pattern = "(\\W)"+entry[0]+"(\\W)";
        let replacement = "$1"+entry[1]+"$2";
        text = text.replace(new RegExp(pattern, "g") , replacement );
    }

    
    return text;
}

module.exports = translate;