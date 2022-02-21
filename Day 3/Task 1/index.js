
function checkprime() {
    var picknum = document.getElementById("readnum").value;
    var flag = 0;
    var m = picknum / 2;
    for (var i = 2; i <= m; i++) {
        if (picknum % i == 0) {
            console.log("Number is not prime");
            var flag = 1;
            break;
        }
    }

    if (flag == 0) {
        console.log("Number is prime");
    }

}