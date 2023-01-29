// CRUD OPERATIONS( USING PHONEBOOK)
//global variables
var row = null;


function csubmit(event) {
    event.preventDefault();

    var dataEntered = retrievedData();
    if (dataEntered == false) {
        alert(' false information !');
    }
    else {
        var readData = readDatafromlocstorage(dataEntered);
        if (row == null) {
            insert(readData);
            alert('Inserting a records !');


        }
        else {
            update();
            alert(' Data is updated!');
        }
    }
    document.getElementById('form').reset(); 


}
// Create
// Retrieving data from form 
function retrievedData() {
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var relation = document.getElementById('relation').value;
    var arr = [name, number, relation];
    if (arr.include = ('')) {
        alert(' **Please insert data');
        return false;
    }
    if ((name.length <= 2) || (name.length > 20)) {
        alert(" ** username must be between the range of 2 and 20");
        return false;
    }
    if (!isNaN(name)) {
        alert(" ** Only char are allowed");
        return false;
    }

    if (number.length === 0) {
        alert(" ** Please fill the Mobileno field")
        return false;
    }
    if (isNaN(number)) {
        alert(" ** User must write digits only");
        return false;
    }
    if (number.length != 10) {
        alert(" ** User must be 10 digits");
        return false;
    }
    if (!isNaN(relation)) {
        alert(" ** Only char are allowed");
        return false;
    }
    else {
        return arr;
    }
}
//Data in local storage
function readDatafromlocstorage(dataEntered) {
    // storing data in local storage
    var n = localStorage.setItem("Name", dataEntered[0]);
    var num = localStorage.setItem("Number", dataEntered[1]);
    var rel = localStorage.setItem("Relation", dataEntered[2]);
    // getting data  from localstorage
    var n1 = localStorage.getItem("Name", n);
    var num1 = localStorage.getItem("Number", num);
    var rel1 = localStorage.getItem("Relation", rel);
    var arr1 = [n1, num1, rel1];
    return arr1;

}
//Insert data
function insert(readData) {
    var table = document.getElementById("table");
    var i = table.rows.length;
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    // row.insertCell(4).innerHTML = "JJJ"
    cell1.innerHTML = readData[0];
    cell2.innerHTML = readData[1];
    cell3.innerHTML = readData[2];
    cell4.innerHTML = `<button onclick="edit(this)"><a href="script.js:void(0)" style="text-decoration: none;">Edit</a></button> &nbsp
    <button onclick="remove(this)"><a href="script.js:void(0)" style="text-decoration: none ;">Delete</a></button>`;
}
// Edit data
function edit(td) {
    var ans1 = confirm("Want to edit this record?");
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("number").value = row.cells[1].innerHTML;
    document.getElementById("relation").value = row.cells[2].innerHTML;

}
// UPDATE
function update() {
    //    var row = td.parentElement.parentElement;
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("number").value;
    row.cells[2].innerHTML = document.getElementById("relation").value;
    row = null;
}
// DELETE
function remove(td) {
    var ans = confirm(" Are you sure you want to delete this record");
    if (ans == true) {
        row = td.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex);
    }
}

