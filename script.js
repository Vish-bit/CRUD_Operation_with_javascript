function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
}
function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Mobile"] = document.getElementById("Mobile").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["Gender"] = document.getElementById("Gender").value;
    formData["Address"] = document.getElementById("Address").value;
    return formData;
}
function insertNewRecord(data){
    var table = document.getElementById("employeelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Mobile;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Age;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Gender;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Address;
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Mobile").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Gender").value = "";
    document.getElementById("Address").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Mobile").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Address").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Email;
    selectedRow.cells[2].innerHTML = formData.Mobile;
    selectedRow.cells[3].innerHTML = formData.Age;
    selectedRow.cells[4].innerHTML = formData.Gender;
    selectedRow.cells[5].innerHTML = formData.Address;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
