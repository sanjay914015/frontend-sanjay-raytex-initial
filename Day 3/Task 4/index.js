

const auth = {user : "Sanjay" , pass : "Sanjay"};


function authentication() {
    var usern = document.getElementById("username").value;
    var passw = document.getElementById("password").value;

    if( auth.user == usern && auth.pass == passw)
    {
        document.getElementById("show").innerHTML = "Authentication True";
    }





}