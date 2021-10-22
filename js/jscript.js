
//add a function for the to do list
function addTask() {
    //pass the body of the table to a variable
    var table = document.getElementById("tbody");
    //pass the textfield to a variable
    var field = document.getElementById("tfield");
    //check that the input is not empty/too short
    if (field.value.length < 3) {
        //if empty/too short, call for an alert
        //and highlight the textfield with red
        alert("Add a proper task!");
        field.style.borderColor = "red";
    } else {
        //fix possible textfield highlight
        field.style.borderColor = "black";
        //add a row to the end of the table
        var row = table.insertRow(-1);
        //add the first cell
        var cell = row.insertCell(0);
        //add the function to remove the strikethrough
        cell.onclick = function uncheck() {
            row.style = "text-decoration: none"
        }
       //add the text from the textfield into the first cell
        cell.innerHTML = field.value;
    }
    //clear the textfield
    field.value = "";
    //create another cell and pass it into a variable
    var cell2 = row.insertCell(1);
    //create an input element and pass it into a variable
    var valinta = document.createElement("input");
    //add an onclick event to the input element which strikes through text on the row
    valinta.onclick = function check() {
        row.style = "text-decoration: line-through";
    }
    //define the input as a checkbox with name and id
    valinta.type = "checkbox";
    valinta.name = "cbox";
    valinta.id = "cb";

    //append the cell to the end of the row
    cell2.appendChild(valinta);
}
//remove checkmarked tasks from the list
function removeTask() {
    //pass the first tbody element of the table into a variable
    var table = document.getElementById("ToDoListTable").tBodies[0];
    //pass the amount of rows into a variable
    var rowCount = table.rows.length;
    //go through all the rows of the table with a for loop
    for (var i = 0; i < rowCount; i++) {
        //pass row i into a variable
        var row = table.rows[i];
        //pass the checkbox into a variable
        var cb = row.cells[1].getElementsByTagName("input")[0];
        //check whether the checkbox is checked; if it is, remove the row
        if ("checkbox" == cb.type && true == cb.checked) {
            table.deleteRow(i);
            //decrease the index by one, so the loop won't break when new rows are added
            i--;
        }
    }
}