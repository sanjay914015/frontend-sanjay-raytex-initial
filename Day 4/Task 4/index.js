function pt() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;


    var a=0;
    var tabl = document.getElementById("table");
    var row = table.insertRow(1);
    a= "<tr>"+"<td>"+name+"</td>"+"<td>"+email+"</td>"+"<td>"+contact+"</td>"+"</tr>";
    row.innerHTML=a;


}
