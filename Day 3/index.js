var name = "James";
var numberone = 1;
var verify = true;
var numbetwo = 2;

const student = {name : "James" , Age : "30"};

function displayobject()
{
document.getElementById("varobject").innerHTML = student.name + " " + student.Age;

}
function addition()
{

var sum = numberone+ numbetwo;
var mul = numberone * numbetwo;
document.getElementById("newone").innerHTML = "Aurther";
document.getElementById("sum").innerHTML = sum;
document.getElementById("mul").innerHTML = mul;
console.log(sum);
console.log(mul);
}

var picknum = document.getElementById("readnum").nodeValue;

function checkeven()
{
    if (picknum % 2 == 0 )
    {
        console.log("even");

    }
    else{
        console.log("odd");
    }
}