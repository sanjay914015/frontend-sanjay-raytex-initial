function output()
{
    var username = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var comment = document.getElementById("comm").value;


    console.log(username);
    console.log(email);
    console.log(contact);
    console.log(comment);

}


const auth = {user : "Sanjay" , pass : "Sanjay"};
function authentication() {
    var usern = document.getElementById("username").value;
    var passw = document.getElementById("password").value;

    if( auth.user == usern && auth.pass == passw)
    {
        window.location.href = "C:\frontend\week 1\frontend-sanjay-raytex-initial\Day 3\Task 6\html\index.html" ;

    }
    else
    {
        document.getElementById("show").innerHTML = "Authentication Fail";
      
    }
}