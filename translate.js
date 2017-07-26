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

/**
 * @type {String[][]}
 */
let dictionary = require("./dictionary.json");

/**
 * 
 * @param {string} text text content to convert
 */
function translate(text)
{
    text = text.toString();
    for(let i = 0; i < dictionary.length; i++)
    {
        let entry = dictionary[i];
        let pattern = "(\\W)"+entry[0]+"(\\W)";
        let replacement = "$1"+entry[1]+"$2";
        text = text.replace(new RegExp(pattern, "g") , replacement );
    }
    return text;
};

module.exports = translate;