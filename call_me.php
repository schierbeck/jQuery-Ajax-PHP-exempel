<?php
// Vi hämtar upp datan vi skickade från javascripten men $_POST['review']
// Nycklarna i objekten blir också under arrayer till $_POST['review'], exempelvis $_POST['review']['name']
$name = $_POST['review']['name'];
$food = $_POST['review']['food'];
$like = $_POST['review']['like'];

// Det vi nedan skriver (echoar) ut, är vad som kommer tillbaka till javascript filen som variabeln data

echo ' > ' . $name . ' ';
// Om $_POST['review']['like'] var 1
if( $like == 1 ) {
	echo 'gillar ';
// Om $_POST['review']['like'] var 0
} else {
	echo 'ogillar ';
}
echo $food . '.';

?>