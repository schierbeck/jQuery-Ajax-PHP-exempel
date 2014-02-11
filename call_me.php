<?php

$name = $_POST['review']['name'];
$food = $_POST['review']['food'];
$like = $_POST['review']['like'];

echo ' > ' . $name . ' ';

if( $like == 1 ) {
	echo 'gillar ';
} else {
	echo 'ogillar ';
}
echo $food . '.';

?>