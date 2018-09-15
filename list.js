/* JS File for To Do List
Author: Richa Sharma,
Creation Date: 19 July 2018
*/
// Create a "close" button and append it to each list item

// var list = document.getElementById('demo');
// console.log(list);


function changeText() {
	var list = document.getElementById('demo'); //Anu added this line. Check why
												//it works now.
    var inputText = document.getElementById('listItem').value;
    console.log(inputText);
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(inputText));
    console.log(entry);	
    list.appendChild(entry);
}

