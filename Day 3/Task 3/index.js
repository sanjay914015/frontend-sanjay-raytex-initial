
function fibonacci() {
    var picknum = document.getElementById("readnum").value;
    var m= 1;
    var n=0;
    console.log(m);

    for(var i =0 ; i <picknum ; i++)
    {
        var sum = m + n;
        console.log(m);
        var n = m;
        var m = sum;
    
    }

}