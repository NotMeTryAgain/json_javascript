function runJS() {
  function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }

  function customSortAge(a, b) {
    return new Date(a.birthDate).getTime() - new Date(b.birthDate).getTime();
  }

  var ageSortPatients = data.sort(customSortAge);
  var table = document.getElementById("displayPatientsAge");

  for(var i = 0; i < ageSortPatients.length; i++) {
    var row = table.insertRow(i);
    var cell = row.insertCell(0);
    cell.innerHTML = (ageSortPatients[i].firstName + ' ' +
      ageSortPatients[i].lastName + ' - ' +
      'age: ' +
      getAge(ageSortPatients[i].birthDate)
    );
  }

  var tableBP = document.getElementById("displayPatientsBP");

  for(var j = 0; j < data.length; j++) {
    var rowBP = tableBP.insertRow(j);
    var cellBP = rowBP.insertCell(0);
    if (data[j].systolic > 140 || data[j].diastolic > 90) {
      cellBP.innerHTML = (data[j].firstName + ' ' +
        data[j].lastName + ' - ' +
        'systolic: ' +
        data[j].systolic + ', ' +
        'diastolic: ' +
        data[j].diastolic
      );
    }
  }
}

window.onload = runJS;
