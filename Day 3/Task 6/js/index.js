function contact_us()
{
    var cs_username = document.getElementById("csusername").value;
    var cs_email = document.getElementById("csemail").value;
    var cs_contact = document.getElementById("cscontact").value;
    var cs_comment = document.getElementById("cscomment").value;


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
        console.log("Authentication True");
    }
    else
    {
        document.getElementById("show").innerHTML = "Authentication Fail";
      
    }
}