// Add a new row to the data table
function addRow() {
  const row = document.createElement('tr');
  row.innerHTML = `<td><input type="number" /></td><td><input type="number" /></td>`;
  document.querySelector("#dataTable tbody").appendChild(row);
}

// Read data from the table and plot
function plotManualData() {
  const rows = document.querySelectorAll("#dataTable tbody tr");
  const x = [], y = [];

  rows.forEach(row => {
    const inputs = row.querySelectorAll("input");
    const xVal = parseFloat(inputs[0].value);
    const yVal = parseFloat(inputs[1].value);
    if (!isNaN(xVal) && !isNaN(yVal)) {
      x.push(xVal);
      y.push(yVal);
    }
  });

  const regressionType = document.getElementById("regression").value;
  plotData(x, y, regressionType);
}
