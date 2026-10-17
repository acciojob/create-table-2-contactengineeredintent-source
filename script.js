let box = document.querySelector(".box");
let createTableBtn = document.querySelector("#createTable");

let rows = 0;
let columns = 0;

createTableBtn.addEventListener("click", () => {
  rows = prompt("Input number of rows");
  columns = prompt("Input number of columns");
  if(rows < 0 || columns < 0){
    return alert("wrong input");
  }
  if((rows >= 'a' && rows <= 'z') || (rows >= 'A' && rows <= 'Z ')){
    return;
  }
  createTable(rows, columns);
  createTableBtn.remove();
});

function createTable(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      if (i == 0) {
        let tableHeader = document.createElement("th");
        tableHeader.textContent = `Row-${i} Column-${j}`;
        row.appendChild(tableHeader);
      } else {
        let tableElement = document.createElement("td");
        tableElement.textContent = `Row-${i} Column-${j}`;
        row.appendChild(tableElement);
      }
    }
    document.querySelector("#myTable").appendChild(row);
  }
}

