
// //#1a.  create button and add to page
// $('<div><button>' + 'Hello' + '</button></div>').appendTo('body').click(function () {
//     alert('Have a Great Day')
// });

//#2b.  display an alert with the message that is typed in the text box
$('#button2').click(function () {
   let message = $('#textInput').val();
   alert(message);
});

