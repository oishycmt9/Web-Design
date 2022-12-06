$('#addition').click(function()
{
    var firstNameValue =Number( $('#firstName').val());
    var lastNameValue = Number($('#lastName').val());
    var fullName = firstNameValue+lastNameValue;
    $('#fullName').val(fullName);
});

$('#subtraction').click(function()
{
    var firstNameValue =Number( $('#firstName').val());
    var lastNameValue = Number($('#lastName').val());
    var fullName = firstNameValue-lastNameValue;
    $('#fullName').val(fullName);
});

$('#multiplication').click(function()
{
    var firstNameValue =Number( $('#firstName').val());
    var lastNameValue = Number($('#lastName').val());
    var fullName = firstNameValue*lastNameValue;
    $('#fullName').val(fullName);
});

$('#division').click(function()
{
    var firstNameValue =Number( $('#firstName').val());
    var lastNameValue = Number($('#lastName').val());
    var fullName = firstNameValue/lastNameValue;
    $('#fullName').val(fullName);
});

$('#remainder').click(function()
{
    var firstNameValue =Number( $('#firstName').val());
    var lastNameValue = Number($('#lastName').val());
    var fullName = firstNameValue%lastNameValue;
    $('#fullName').val(fullName);
});


// alert($('#h1').html('Hello World'));

// // var redBtnElement = document.getElementById('redBtn');
// // redBtnElement.onclick = function()
// // {
// //     var divOneElement = document.getElementById('divOne');
// //     divOneElement.style.backgroundColor = 'red';
// // };
// //                             // green
// // var greenBtnElement = document.getElementById('greenBtn');
// // greenBtnElement.onclick = function()
// // {
// //     var divOneElement = document.getElementById('divOne');
// //     divOneElement.style.backgroundColor = 'green';
// // };

// // var blueBtnElement = document.getElementById('blueBtn');
// // blueBtnElement.onclick = function()
// // {
// //     var divOneElement = document.getElementById('divOne');
// //     divOneElement.style.backgroundColor = 'blue';
// // };

// // var defaultBtnElement = document.getElementById('defaultBtn');
// // defaultBtnElement.onclick = function()
// // {
// //     var divOneElement = document.getElementById('divOne');
// //     divOneElement.style.backgroundColor = 'black';
// // };

// var redBtnElement = document.getElementById('redBtn');
// redBtnElement.onmouseover = function()
// {
//     var divOneElement = document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'red';
//     divOneElement.className = 'class-one';
// };

// var greenBtnElement = document.getElementById('greenBtn');
// greenBtnElement.onmouseover = function()
// {
//     var divOneElement = document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'red';
//     divOneElement.className = 'class-two';

// };

// var blueBtnElement = document.getElementById('blueBtn');
// blueBtnElement.onmouseover = function()
// {
//     var divOneElement = document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'blue';
//     divOneElement.className = 'class-three';
// };

// var defaultBtnElement = document.getElementById('defaultBtn');
// defaultBtnElement.onmouseover = function()
// {
//     var divOneElement = document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'black';
//     divOneElement.className = 'my-style';
// };

// var btnElement = document.getElementById('btn');
// btnElement.onclick = function()
// {
//     var startingNumberValue = document.getElementById('startingNumber').value; 
//     var endingNumberValue = document.getElementById('endingNumber').value; 

//     var res= ' ';

//     for (var x=startingNumberValue; x<=endingNumberValue; x++)
//     {
//         // document.write(x+' ');
//         res+=x;
//     }
//     document.getElementById('result').value = res;
// };