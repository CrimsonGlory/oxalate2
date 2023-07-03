$(document).ready( function () {
  $('#oxalate_content').DataTable({
	  ajax: {url: '/original_data', dataSrc: ''},
		'columns': [
		  {'width': '55%', 'className': 'dt-left', 'type': 'html'},
		  {'searchable': false, 'width': '15%', 'className': 'dt-left', 'orderable': false},
			{'searchable': false, 'width': '10%', 'className': 'dt-left', 'data': {'_': 4, 'sort': 4, 'display': 2}, 'type': 'num'},
			{'searchable': false, 'width': '20%', 'className': 'dt-left', 'orderable': false}
		],
	  //'scrollY': '500px',
	 	//'scrollCollapse': true,
	  'paging': true,
		'pageLength': 10,
		'lengthChange': false,
		'info': false
	});
});
