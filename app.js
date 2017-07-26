/*

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/



let args = process.argv.slice(2);

let fs = require('fs');

let translate = require('./translate.js');

/**
 * Main function
 * @param {string[]} args 
 */
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


/**
 * Convert function, opens files, calls the translator, saves the new file. 
 * @param {string} fileIn path of in file
 * @param {string} fileOut path of out file
 */
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

//Start program
main(args);
