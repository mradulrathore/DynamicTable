var flag=0;
var p;

function OpenAddform(){
  document.getElementById('Main-Form').style.display = "block";
}

function arrangeSno(tableId){
  var tblObj = document.getElementById(tableId);
  var no_of_rows = tblObj.rows.length;
  for(var i=0; i<no_of_rows-1; i++)
      tblObj.rows[i+1].cells[0].innerHTML = i+1;
}

function update(o){
  window.flag=1;
  document.getElementById('Main-Form').style.display = "block";
  window.p=o.parentNode.parentNode;
  var cells=p.getElementsByTagName("td");
  document.getElementById("name").value=cells[1].innerText;
}

function deleteRow(o){
  var p=o.parentNode.parentNode;
  p.parentNode.removeChild(p);
  arrangeSno('dataTable');
}

function checkEmptyInput(){
  var isEmpty = false;
  n = document.getElementById("name").value;
  if(n === ""){
      alert("Name Connot Be Empty");
      isEmpty = true;
  }
  return isEmpty;
}

function addRow(tableID) {

  var table = document.getElementById(tableID);
	var rowCount = table.rows.length;

  if(window.flag!=0){
    window.flag=0;
    if(!checkEmptyInput()){
      var cells=window.p.getElementsByTagName("td");
      cells[1].innerText=document.getElementById("name").value;
    }
  }

  else if(!checkEmptyInput()){

      var row = table.insertRow(rowCount);

			var cell1 = row.insertCell(0);
			cell1.innerHTML = rowCount ;

			var cell2 = row.insertCell(1);
			cell2.innerHTML=document.getElementById("name").value;

      var cell3=row.insertCell(2);
      var button1=document.createElement('input');
      button1.setAttribute('type', 'button');
      button1.setAttribute('value', '');
      button1.setAttribute('class', 'button1');
      button1.onclick=function(){
        update(this);
      };
      cell3.append(button1);

      var cell4=row.insertCell(3);
      var button2=document.createElement('input');
      button2.setAttribute('type', 'button');
      button2.setAttribute('value', '');
      button2.setAttribute('class', 'button2');
      button2.onclick=function(){
        deleteRow(this);
      };
      cell4.append(button2);
  }
      cancel();
}

function cancel(){
  document.getElementById("Main-Form").reset();
  document.getElementById("Main-Form").style.display="none";
}
