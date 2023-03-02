function changeImage(image) {
    document.getElementById("img-large").src = "images/123" + image + ".png";
}
function addRow() { var table = document.getElementById("myTable"); var row = table.insertRow(-1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1); cell1.innerHTML = ""; cell2.innerHTML = ""; }

// JavaScript code to add a column to the existing HTML table:

function addColumn() { var table = document.getElementById("myTable"); for (var i = 0, row; row = table.rows[i]; i++) { var cell = row.insertCell(-1); cell.innerHTML = ""; } }

// JavaScript code to delete a row (or column) from the existing HTML table:

function deleteRow(rowIndex) { var table = document.getElementById("myTable"); table.deleteRow(rowIndex); }

// JavaScript code to delete all rows from the existing HTML table:

function deleteTable() { var table = document.getElementById("myTable"); var rowCount = table.rows.length;

for (var i = 0; i < rowCount; i++) { table.deleteRow(0); } }