
function addTask() { //add a function for the to do list    
    var table = document.getElementById("tbody"); //pass the body of the table to a variable    
    var field = document.getElementById("tfield"); //pass the textfield to a variable    
    if (field.value.length < 3) { //check that the input is not empty/too short             
        alert("Add a proper task!"); //if empty/too short, call for an alert
        field.style.borderColor = "red"; //and highlight the textfield with red
    } else {        
        field.style.borderColor = "black"; //fix possible textfield highlight        
        var row = table.insertRow(-1); //add a row to the end of the table        
        var cell = row.insertCell(0); //add the first cell       
        cell.onclick = function uncheck() { //add the function to remove the strikethrough
            row.style = "text-decoration: none"
        }      
        cell.innerHTML = field.value; //add the text from the textfield into the first cell
    }  
    field.value = ""; //clear the textfield
    
    var cell2 = row.insertCell(1); //create another cell and pass it into a variable    
    var valinta = document.createElement("input"); //create an input element and pass it into a variable   
    valinta.onclick = function check() { //add an onclick event to the input element which strikes through text on the row
        row.style = "text-decoration: line-through";
    }    
    valinta.type = "checkbox"; //define the input as a checkbox with name and id
    valinta.name = "cbox";
    valinta.id = "cb";    
    cell2.appendChild(valinta); //append the cell to the end of the row
}

function removeTask() { //remove checkmarked tasks from the list    
    var table = document.getElementById("ToDoListTable").tBodies[0]; //pass the first tbody element of the table into a variable    
    var rowCount = table.rows.length; //pass the amount of rows into a variable    
    for (var i = 0; i < rowCount; i++) { //go through all the rows of the table with a for loop        
        var row = table.rows[i]; //pass row i into a variable        
        var cb = row.cells[1].getElementsByTagName("input")[0]; //pass the checkbox into a variable        
        if ("checkbox" == cb.type && true == cb.checked) { //check whether the checkbox is checked; if it is, remove the row
            table.deleteRow(i);            
            i--; //decrease the index by one, so the loop won't break when new rows are added
        }
    }
}