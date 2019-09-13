
function calculartransaccion() {

  let cell1, cell2, cell3, cell4, cell5, cell6, table, row, transaccion;
  let valortransaccion, asignado, caja, disponible

  valortransaccion = Number(document.getElementById("transaccion").value);

  table = document.getElementById("myTable");
  row = table.insertRow(2);

  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell3 = row.insertCell(2);
  cell4 = row.insertCell(3);
  cell5 = row.insertCell(4);
  cell6 = row.insertCell(5);

  cell1.innerHTML = "2";
  cell2.innerHTML = "00002";
  cell3.innerHTML = "2731";
  cell4.innerHTML = "2019-09-12 8:14:00";
  cell5.innerHTML = "Retiro";
  cell6.innerHTML = valortransaccion;

  asignado = Number(document.getElementById("cupo-asignado").value);
  caja = Number(document.getElementById("caja").value);
  disponible = Number(document.getElementById("disponible").value);

  asignado = asignado - valortransaccion;
  caja = caja + valortransaccion;
  disponible = asignado - caja;


  document.getElementById("cupo-asignado").value = asignado;
  document.getElementById("caja").value = caja;
  document.getElementById("disponible").value = disponible;

}

