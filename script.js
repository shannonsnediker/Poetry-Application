
// Nice use of an object with arrays here, thats a good way to organize your words
let words = {
    primary: ['flame', 'beg', 'borrow', 'break', 'steal', 'rob', 'abandon', 'absolute', 'admiration', 'adventure', 'advice', 'afternoon', 'again', 'against', 'aged', 'alarm', 'alcohol', 'brandy', 'wine', 'fine', 'aged', 'whiskey', 'spirit', 'morning', 'evening', 'night', 'alive', 'rich', 'dead', 'alone', 'full', 'surrounded', 'song', 'sing', 'poetry', 'ballad', 'amazed', 'ambitious', 'ancient', 'new', 'modernity', 'anger', 'sadness', 'joy', 'heart', 'peace of mind', 'peaceful', 'sky', 'star', 'starry', 'beautiful', 'desolate', 'devastation', 'home', 'house', 'building', 'April', 'July', 'September', 'October', 'December', 'architect', 'mind', 'art', 'artful', 'artistry', 'atmosphere', 'attraction', 'beauty', 'handsome', 'autumn', 'spring', 'summer', 'winter', 
    ],
    secondary: ['accept', 'above', 'acknowledge', 'across', 'act', 'action', 'admit', 'affect', 'along', 'announce', 'another', 'anymore', 'together', 'apart', 'a part of', 'approval', 'approximately', 'arise', 'arrant', 'arrive', 'ask', 'attack', 'attract', 'avoid'
    ],
    tertiary: ['anyone', 'anything', 'I', 'me', 'we', 'you', 'us', 'a', 'the', 'it', 'it is', 'not', 'they', 'them'
    ]
} //an object set to an array of three categories of words to be used in the poem game


let displayWord = [] // an empty array for randomly selected strings from words variables to be pushed t
let z; // created an empty global variable so the data in selectPoemWords() can be used in other functions




function selectPoemWords(array) { //created a function with one argument that randomly selects a word from an arary and removes that selected word using the splice funciton. This funciton contains one parameter so that each object property can be passed through.
    
    let r = Math.random(); // set a variable r equal to the desired method
    let c = r * array.length; // set a new variable c equal to r times the array length to return a randomized element of the array
    let d = Math.floor(c); // set a new variable equal to the rounded number of c
    
    z = array[d]; //set the global variable z equal to the results of the randomized array element

    console.log(z)

    array.splice(d, 1); // removed the randomly selected word from the array using the splice method

    return z; // returns the result of this function to the global variable
}

for (let i = 0; i < 30; i++) { //created a for loop to iterate through the desired array and select 30 words from the object.primary property
    if (words.primary.length > 0) {
        displayWord.push(selectPoemWords(words.primary));
    } // passes the words.primary as an argument of the selectPoemWords function to randomly select the 30 words and then push those words to the displayWord array
}

for (let i = 0; i < 20; i++) { //created a for loop to iterate through the desired array and select 20 words from the object.secondary property
    if (words.secondary.length > 0) {
        displayWord.push(selectPoemWords(words.secondary));
    } // passes the words.secondary as an argument of the selectPoemWords function to randomly select the 20 words and then push those words to the displayWord array
}

for (let i = 0; i < 10; i++) { //created a for loop to iterate through the desired array and select 10 words from the object.tertiary property
    if (words.tertiary.length > 0) {
        displayWord.push(selectPoemWords(words.tertiary));
    } // passes the words.tertiary as an argument of the selectPoemWords function to randomly select the 10 words and then push those words to the displayWord array
}

function outputDisplayWord() { // created a function to wrap each random word that was pushed to the displayWord array in a div, outputted to the dom, and then add an event listener so that each word is clickable.

    displayWord.forEach(arrayItem => {
        let node = document.createElement("div"); // created a node variable equal to a div element

        node.classList.add("targetWord") //added a class to each div

        let textNode = document.createTextNode(arrayItem); //created a text node with a parameter that will allow each array item of displayWord to be passed as an argument
        
        node.appendChild(textNode); // appends the div element created as a child to the textNode parent

        document.getElementById("displayWordsOnScreen").appendChild(node); //appends the node of the textNode to the div with the id displayWordsOnScreen

        node.addEventListener("click", function() { // adds a click event listener to each displayWord array element that then activates the addToPoem function passing that same array element as an argument
            addToPoem(arrayItem)
        })
    });

    
}

outputDisplayWord(); //calls the function

// good 

let poem = []; // an empty array for the clicked poem words to be displayed in

function addToPoem (clickedWord) { 
    poem.push(clickedWord); 
    updatePoemDisplay();
}

function updatePoemDisplay() {} // I think this was a mistake

function updatePoemDisplay() {
    let poemDiv = document.getElementById("poem"); // set a new variable equal to the "poem" div
    poemDiv.innerHTML = ""; // cleared the "poem" div first so that the display reflects the current content

    poem.forEach(arrayItem => {
        let li = document.createElement("li"); // created an <li> element for each word so that each word could easily be targeted for removal
        li.appendChild(document.createTextNode(arrayItem)); //created the textNode for the li
        poemDiv.appendChild(li); // appended the <li> to the "poem" div
    });
}

// good use of scope for the poem variable


function deleteLastWord() { // function to delete the last word in the array
    if (poem.length > 0) {
        poem.pop(); // removed the last word from the poem array
        updatePoemDisplay(); // updated the poem display
    }
}

/

document.getElementById("deleteButton").addEventListener("click", deleteLastWord); // added an event listener to the delete button so that it calls the deleteLastWord() function on click

// great example of functional programmin , simple and easy to read with good comments.
