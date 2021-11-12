function validateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.getElementById("email").focus();
        return false;
    }
}


function validateEmail(inputEmail)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputEmail.value.match(mailformat))
        {
            return true;
        }
        else
        {
            alert("You have entered an invalid email address!");
            return false;
        }
}

function phonenumber(inputNum)
{
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputNum.value.match(phoneno))
    {
        return true;
    }
    else
    {
        alert("Please input valid phone number");
        return false;
    }
}

function validatePassword(inputPass) 
{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(inputPass.value.match(re))
    {
        return True;
    }
    else
    {
        alert("Password should contain minimum 8 characters, atleast one lowercase, one upperase, one number and a symbol")
        return false;
    }
}


