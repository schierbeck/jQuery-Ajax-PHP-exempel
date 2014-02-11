$(document).ready(function(){

	function get_values() {
		// Skapar ett objekt med tre nycklar som refererar till värden från två input fält och en select
		var my_object = {
			name: $('#name').val(),
			food: $('#food').val(),
			like: $('#like').val()
		}
		// returnerar objektet
		return my_object;
	}

	// Vis klick på länk
	$('a').click(function(e) {
		// Denna rad avbryter att länken ska fungera som vanligt, dvs gå till en annan sida eller ladda om samma sida
		e.preventDefault();

		// Vi skickar en post variabel som php kan snappa upp med $_POST['review']
		// Med variabeln data får vi ut informationen som skickas tillbaka från call_me.php
		$.post('call_me.php', { review: get_values(),  }, function(data) {
			// Skriv ut i divven
			$('div').prepend(data + '<br>');

		});
	});

}); // end of jQuery