$('#img1').click(function (){
   var img1SrcValue = $(this).attr('src'); //take
   // alert(img1SrcValue);
   $('#mainImage').attr('src', img1SrcValue); //given
});

$('#img2').click(function (){
   var img2SrcValue = $(this).attr('src');
   $('#mainImage').attr('src', img2SrcValue);
});

$('#img3').click(function (){
   var img3SrcValue = $(this).attr('src');
   $('#mainImage').attr('src', img3SrcValue);
});

$('#img4').click(function (){
   var img4SrcValue = $(this).attr('src');
   $('#mainImage').attr('src', img4SrcValue);
});









// function createHeadingParagraphElement()
// {
//     var newHeadingElement = document.createElement('h1');
//     var newParagraphElement = document.createElement('p');
//
//     newHeadingElement.innerHTML = "This is a heading.";
//     newParagraphElement.innerHTML = "This is a Paragraph.";
//
//     document.getElementById('div').appendChild(newHeadingElement);
//     document.getElementById('div').appendChild(newParagraphElement);
// }
//
// document.getElementById('btn').onclick = function ()
// {
//     createHeadingParagraphElement();
// }



// $('#firstName').keyup(function ()
// {
//     var firstNameValue = $('#firstName').val();
//     $('#res1').text(firstNameValue);
// });
//
// $('#lastName').keyup(function ()
// {
//     var lastNameValue = $('#lastName').val();
//     $('#res2').text(lastNameValue);
// });
//
// $('#fullName').blur(function ()
// {
//     var firstNameValue = $('#firstName').val();
//     var lastNameValue = $('#lastName').val();
//     $('#res3').text(firstNameValue+' '+lastNameValue);
// });
//
