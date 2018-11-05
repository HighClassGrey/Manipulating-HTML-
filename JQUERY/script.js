
// //#1a.  create button and add to page
$('<div><button>' + 'Hello' + '</button></div>').appendTo('body').click(function () {
    alert('Have a Great Day')
});

//#2b.  display an alert with the message that is typed in the text box
$('#button2').click(function () {
    let message = $('#textInput').val();
    alert(message);
});

//#3 add color to div
$('#newDiv').css({
    'display': 'inline-block',
    'background-color': 'red',
    'height': '100px',
    'width': '100px',
});
// #3b make the div change to a different background color when your mouse hovers over it. 
// The div should return to its original color when the mouse exits the div.
$('#newDiv').mouseover(function () {
    $('#newDiv').css('background-color', 'green');
})
$('#newDiv').mouseout(function () {
    $('#newDiv').css('background-color', 'red');
})

// #4 Put some text in a paragraph. 
// #4b Make it where when you click on the paragraph,
//  make it switch to a random color each click (you don't have to show the code for just red once you get random working).
$('<div><p>' + 'This is a paragraph ' + '</p></div>').appendTo('body').click(function () {
    $(this).css({
        'color': randomColor()
    })

    //  created function to randomly generate color.
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = `rgb(${r},${g},${b})`;
        return color;
    }
})
// #5 Add a button and an empty div.
//#5b When the button is clicked, add a span that contains your name to the empty div
$('<div><button>' + 'MyName' + '</button></div>').appendTo('body').click(function () {
    $('<span>' + 'Tameka' + '</span>').appendTo('body');
})
// #6b create an array containing the names of your friends  When the button is clicked, add each friend's name as an li to the ul on the page
let friends = ['Marrea', 'Tavanya', 'Sonja', 'Debra', 'Mark', 'Thomas', 'Tamara', 'Austin', 'Asher', 'Tameka'];
$('#btnFriends').click(function () {
    for (let i = 0; i < friends.length; i++) 
    $('#ulFriends').append('<li>' + friends[i] + '</li >');
})
