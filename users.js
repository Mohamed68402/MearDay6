function getUsers() {
  var xhr = new XMLHttpRequest();
  var url = 'https://jsonplaceholder.typicode.com/users';
  var tbody = document.getElementsByTagName('tbody')[0];
  xhr.open('GET', url);
  xhr.send();

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var rows = '';
          for (var i = 0; i < response.length; i++) {
              rows += '<tr>';
              rows += '<td>' + response[i].id + '</td>';
              rows += '<td>' + response[i].name + '</td>';
              rows += '<td>' + response[i].email + '</td>';
              rows += '<td>' + response[i].phone + '</td>';
              rows += '<td>' + response[i].website + '</td>';
              rows += '</tr>';
          }
          tbody.innerHTML = rows;
      }
  };
}
