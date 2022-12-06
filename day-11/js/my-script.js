
var btnElement = document.getElementById('btn');
btnElement.onclick = function ()
{
    var firstNameValue = document.getElementById('firstName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var fullName = firstNameValue+' '+lastNameValue;
    document.getElementById('fullName').value = fullName;
};


var additionBtn = document.getElementById('addition');
additionBtn.onclick = function()
{
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue+secondNumberValue;
    document.getElementById('result').value = result;


};

var subtractionBtn = document.getElementById('subtraction');
subtractionBtn.onclick = function()
{
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue-secondNumberValue;
    document.getElementById('result').value = result;
};

var multiplicationBtn = document.getElementById('multiplication');
multiplicationBtn.onclick = function()
{
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue*secondNumberValue;
    document.getElementById('result').value = result;
};

var divisionBtn = document.getElementById('division');
divisionBtn.onclick = function()
{
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue/secondNumberValue;
    document.getElementById('result').value = result;
};
var remainderBtn = document.getElementById('remainder');
remainderBtn.onclick = function()
{
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue%secondNumberValue;
    document.getElementById('result').value = result;
};










{/* 
// var paragragphElement = document.getElementsByTagName('p');

// // document.write(paragragphElement[0].innerHTML);

// for(var key=0; key<paragragphElement.length; key++)
// {
//     document.write(paragragphElement[key].innerHTML+'<br/>');
// } */}



// var x;
// x=10;
// document.write(x);

// var data=new Array();
// var data1=Array();
// var data2=Array();

// var data=[];
// data[0]=10;
// data[1]=20;
// data[2]=30;


// data['name']='Mosiur';
// data['city']='Mirpur-10';
// data['country']='Bangladesh';

// // document.write(data['name']);
// for(var key in data)
// {
//     document.write(data[key]+'<br/>');
// }

// var data=['Mosiur','Dhaka','Bangladesh'];

// document.write(data[0]);

// var data = ['Mosiur','Dhaka','Banglaesh'];
// document.write(data.length-1);

// function demo(firstName,lastName)
// {
//     var firstName = 'Rubel';
//     var lastName = 'Khan';
//     var fullName = firstName+' '+lastName;
//     document.write(fullName);
// }

// function demo(firstName,lastName)
// {
//     var fullName = firstName+' '+lastName;
//     document.write(fullName);
// }



// document.write('<br/>============<br/>');
// demo('Imran','Hossain');
// document.write('<br/>============<br/>');
// demo('Maruf','Hossain');
// document.write('<br/>============<br/>');
// demo('Mehedi','Hasan');





