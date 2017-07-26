let args = process.argv.slice(2);
let fs = require('fs');

let table = [
    ["(?:thou|thee)", "you"],
    ["thy", "your"],
    ["thine", "yours"],
    ["(?:Thou|Thee)", "You"],
    ["Thy", "Your"],
    ["Thine", "Yours"],
    ["art", "are"],
    ["Art", "Are"],
    ["hast", "have"],
    ["Hast", "Have"],
    ["dost", "do"],
    ["wilt", "will"],


    ["strikest", "strike"],
    ["breakest", "break"],
    ["enlargest", "enlarge"],
    ["enablest", "enable"],
    ["hatest", "hate"],
    ["rememberest", "remembere"],
    ["visitest", "visite"],
    ["upholdest", "upholde"],
    ["liftest", "lifte"],
    ["seest", "see"],
    ["beholdest", "beholde"],
    ["mayest", "maye"],
    ["hearest", "heare"],
    ["restorest", "restore"],
    ["savest", "save"],
    ["answerest", "answer"],
    ["dwellest", "dwell"],
    ["hidest", "hide"],
    ["shelterest", "shelter"],
    ["forgavest", "forgav"],
    ["knowest", "know"],
    ["nearest", "near"],
    ["correctest", "correct"],
    ["puttest", "putt"],
    ["delightest", "delight"],
    ["sleepest", "sleep"],
    ["richest", "rich"],
    ["prosperest", "prosper"],
    ["lovest", "love"],
    ["protectest", "protecte"],
    ["upholdest", "uphold"],
    ["stirrest", "stirr"],
    ["makest", "make"],
    ["givest", "give"],
    ["providest", "provide"],
    ["inflictest", "inflict"],
    ["hurlest", "hurl"],
    ["holdest", "hold"],
    ["guidest", "guid"],
    ["receivest", "receive"],
    ["destroyest", "destroy"],
    ["gavest", "gave"],
    ["enlightenest", "enlighten"],
    ["guidest", "guide"],
    ["workest", "work"],
    ["rememberest", "remember"],
    ["rulest", "rule"],
    ["trainest", "train"],
    ["teachest", "teach"],
    ["remainest", "remaine"],
    ["waterest", "watere"],
    ["decreest", "decree"],
    ["openest", "open"],
    ["turnest", "turn"],
    ["takest", "take"],
    ["sendest", "send"],
    ["renewest", "renew"],
    ["hearest", "hear"],
    ["overshadowest", "overshadow"],
    ["thinkest", "think"],
    ["fillest", "fill"],
];

function main(args) 
{
    if(args.length == 1)
    {
        convert(args[0], args[0]+".out");
    }
    else if(args.length == 2)
    {
        convert(args[0], args[1]);
    }
    else
    {
        console.log("No args!");
    }
}
main(args);

function convert(fileIn, fileOut)
{
    fs.readFile(fileIn, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        data = translate(data);
        fs.writeFile(fileOut, data, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log(fileIn + " > " + fileOut + " ...Finished.");
        });
    });
    
}

function translate(text)
{

    for(let i = 0; i < table.length; i++)
    {
        let entry = table[i];
        let pattern = "(\\W)"+entry[0]+"(\\W)";
        let replacement = "$1"+entry[1]+"$2";
        //let pattern = entry[0];
        //let replacement = entry[1];
        text = text.replace(new RegExp(pattern, "g") , replacement );
    }

    
    return text;
}

