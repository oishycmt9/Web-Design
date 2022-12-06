function checkFirstName(){
    var firstNameLength = $('#firstName').val().length;
    if (firstNameLength >= 6 && firstNameLength <= 15)
    {
        $('#fistNameError').text(' ');
    }else {
        $('#fistNameError').text('First name should be between 6 to 15 character');
    }
}

$('#firstName').click(function (){
    checkFirstName()
});

$('#firstName').blur(function (){
    checkFirstName()
});

$('#firstName').keyup(function (){
    checkFirstName()
});

function checkLastName(){
    var lastNameLength = $('#lastName').val().length;
    if (lastNameLength >= 6 && lastNameLength <= 15)
    {
        $('#lastNameError').text(' ');
    }else {
        $('#lastNameError').text('Last name should be between 6 to 15 character');
    }
}

$('#lastName').click(function (){
    checkLastName()
});

$('#lastName').blur(function (){
    checkLastName()
});

$('#lastName').keyup(function (){
    checkLastName()
});

function checkEmailAddress(){
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3 }$/i);
    if (pattern.test($('#emailAddress').val()))
    {
        $('#emailAddressError').text(' ');
    }else{
        $('#emailAddressError').text('Email Address is invalid');
    }
}

    $('#emailAddress').blur(function (){
        checkEmailAddress()
    });

    $('#emailAddress').keyup(function (){
        checkEmailAddress()
    });

    function checkPassword(){
        var passwordLength = $('#password').val().length;
        if (passwordLength >= 8 && passwordLength <= 15)
        {
            $('#passwordError').text(' ');
        }else {
            $('#passwordError').text('Password Length at least 8 character');
        }
    }
$('#password').blur(function (){
    checkPassword()
});

$('#password').keyup(function (){
    checkPassword()
});

    function checkConfirmPassword(){
        var passwordLength = $('#password').val().length;
        if (passwordLength >= 8 && passwordLength <= 15)
        {
            $('#passwordError').text(' ');
        }else {
            $('#passwordError').text('Password Length at least 8 character');
        }
    }




$('#registrationForm').submit(function ()
{
    return true;
});
