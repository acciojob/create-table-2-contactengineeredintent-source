let box = document.querySelector(".box");
let createTableBtn = document.querySelector("#createTable");

let rows = 0;
let columns = 0;

createTableBtn.addEventListener("click", () => {
  rows = prompt("Input number of rows");
  columns = prompt("Input number of columns");
  if (rows < 0 || columns < 0 || rows == 0 || columns == 0) {
    return alert("wrong input");
  } else if (
    (rows != null &&
      rows.length > 0 &&
      [...rows].every((ch) => ch >= "0" && ch <= "9")) ||
    (columns != null &&
      columns.length > 0 &&
      [...columns].every((ch) => ch >= "0" && ch <= "9"))
  ) {
    createTable(rows, columns);
    createTableBtn.remove();
  } else {
    return alert("wrong input");
  }
});

function createTable(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      let tableElement = document.createElement("td");
      tableElement.textContent = `Row-${i} Column-${j}`;
      row.appendChild(tableElement);
    }
    document.querySelector("#myTable").appendChild(row);
  }
}

