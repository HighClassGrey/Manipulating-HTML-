//#1a.  create button and add to page
let button = document.createElement("button");
let buttonText = document.createTextNode("Hello");
button.appendChild(buttonText);
document.body.appendChild(button);

let containerDiv = document.createElement('div');
document.body.appendChild(containerDiv);

//#1b.  button1-buttton with nice alert
button.addEventListener('click', function () {
    alert('Have a great day!');
});

//#2b.  display an alert with the message that is typed in the text box
var button2 = document.getElementById('button2');
button2.addEventListener("click", function () {
    var text = document.getElementById('textInput').value;
    alert(text);
})

//#3 add color to div
var newDiv = document.getElementById('newDiv');
newDiv.style.backgroundColor = 'purple';
newDiv.style.height = "100px"

// #3b make the div change to a different background color when your mouse hovers over it. 
// The div should return to its original color when the mouse exits the div.
newDiv.addEventListener("mouseenter", function () {
    newDiv.style.backgroundColor = "red";
    newDiv.addEventListener("mouseout", function () {
        newDiv.style.backgroundColor = 'purple';
    });
})
// #4 Put some text in a paragraph. 
var para = document.createElement("P");
var paraText = document.createTextNode("This is a paragraph");
para.appendChild(paraText);
document.body.appendChild(para);

// #4b Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).
para.addEventListener('click', function () {
    let colors = ['purple', 'red', 'blue', 'green'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    para.style.color = randomColor;
});
// // #5 Add a button and an empty div.

let button3 = document.createElement("button");
let buttonText3 = document.createTextNode("Button3");
button3.appendChild(buttonText3);
document.body.appendChild(button3);
let div3 = document.createElement("div");
document.body.appendChild(div3);


//#5b When the button is clicked, add a span that contains your name to the empty div.
button3.addEventListener('click', function () {
    let name = document.createElement("SPAN");
    let sName = document.createTextNode('Tameka');
    document.body.appendChild(name);
    name.appendChild(sName);
   
});

// #6b create an array containing the names of your friends  When the button is clicked, add each friend's name as an li to the ul on the page
let friends = ['Marrea', 'Tavanya', 'Sonja', 'Debra', 'Mark', 'Thomas', 'Tamara', 'Austin', 'Asher', 'Tameka'];

let button4 = document.getElementById('btnFriends');
let ul = document.getElementById('ulFriends');

button4.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        let name = document.createTextNode(friends[i]);
        li.appendChild(name);
        ul.appendChild(li);
    }
});


