$(function() {

  var endpoint = "https://gist.githubusercontent.com/percyhanna/d6d920040517aefed3db/raw/c2901e595a0afb8adf5d76e9c33fb00b783cd366/sample-data.json",
         table = $('#dataTable');
          flag = true;
  
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: endpoint,
    success: function(response) {
      $.each(response, function(i, item) {
        var columns = '',
            headers = '';
        for (var key in item) {
          // Only for the first item
          if(i == 0) {
            headers += "<th>" + key + "</th>";
          }
          columns += '<td>' + item[key] + '</td>';
        }
        // Execute only once
        if(flag) {
          table.children('thead').append('<tr>' + headers + '</tr>');
          flag = false;
        }
        table.children('tbody').append('<tr>' + columns + '</tr>');
      });
    },
    complete: function() {
      $("#dataTable").tablesorter();
      table.hide().fadeIn('slow');
    }
  });
});