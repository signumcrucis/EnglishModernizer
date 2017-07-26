let args = process.argv.slice(2);
let fs = require('fs');
let translate = require('./translate.js')


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