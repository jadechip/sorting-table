
// $(function() {
//   $('#dataTable thead').first('th').on('click', function() {
//     var rows = $('#dataTable tbody  tr').get();
//     console.log(rows)
//   }); 

// });


// function sortTable(f,n){
//   var rows = $('#dataTable tbody  tr').get();

//   rows.sort(function(a, b) {

//   var A = $(a).children('td').eq(n).text().toUpperCase();
//   var B = $(b).children('td').eq(n).text().toUpperCase();

//   if(A < B) {
//     return -1*f;
//   }
//   if(A > B) {
//     return 1*f;
//   }
//   return 0;
//   });

//   $.each(rows, function(index, row) {
//     $('#mytable').children('tbody').append(row);
//   });
// }
// var f_sl = 1;
// var f_nm = 1;
// $("#sl").click(function(){
//     f_sl *= -1;
//     var n = $(this).prevAll().length;
//     sortTable(f_sl,n);
// });
// $("#nm").click(function(){
//     f_nm *= -1;
//     var n = $(this).prevAll().length;
//     sortTable(f_nm,n);
// });