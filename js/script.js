$(document).ready(function(){

	function get_values() {
		var my_object = {
			name: $('#name').val(),
			food: $('#food').val(),
			like: $('#like').val()
		}
		return my_object;
	}

	$('a').click(function(e) {
		e.preventDefault();

		$.post('call_me.php', { review: get_values(),  }, function(data) {
			console.log(data);
			$('div').prepend(data + '<br>');

		});
	});

}); // end of jQuery