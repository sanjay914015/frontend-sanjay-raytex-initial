
function validation() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var contact = document.getElementById("contact").value;
    var user = document.getElementById("user").value;
    var zip = document.getElementById("Zip").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;



    if( fname.length >= 10)
    {
        document.getElementById("show").innerHTML = "Invalid Validation";


    }
    else if(lname.length >=10)
    {
        document.getElementById("show").innerHTML = "Invalid Validation";

    }
    else if(contact.length != 10)
    {
        document.getElementById("show").innerHTML = "Invalid Validation";
        alert("Contact Number should has 10 number!");

       
    }
    else if(! user.includes("@"))
    {
        document.getElementById("show").innerHTML = "Invalid Validation";
        alert("Username should includes @ !");

    }
    else if(! email.includes("@"))
    {
        document.getElementById("show").innerHTML = "Invalid Validation";
        alert("Username should includes @ !");

    }
    else if(zip.length != 6)
    {
        document.getElementById("show").innerHTML = "Invalid Validation";
        alert("Zip code should have 4 numbers!");

    }
    else if(! (pass.includes("@") && pass.includes(fname) ))
    {
        document.getElementById("show").innerHTML = "Invalid Validation";
        alert("Please Enter Valid Password!");

    }
    else
    {
        document.getElementById("show").innerHTML = "Validation True";
        alert("Successfully Log IN!");

       
    }

}