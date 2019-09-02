<?PHP 
$to = "zli@babson.edu"; 
$subject = "Results from your Survey form";
$headers = "From: ";
$forward = 0;
$location = "";

$date = date ("l, F jS, Y"); 
$time = date ("h:i A"); 



$msg = "Below is the result of your survey form. It was submitted on $date at $time.\n\n"; 

if ($_SERVER['REQUEST_METHOD'] == "POST") {
	foreach ($_POST as $key => $value) { 
		$msg .= ucfirst ($key) ." : ". $value . "\n"; 
	}
}
else {
	foreach ($_GET as $key => $value) { 
		$msg .= ucfirst ($key) ." : ". $value . "\n"; 
	}
}

$sentmail = @mail($to, $subject, $msg, $headers); 
if($sentmail){
echo "Email Has Been Sent .";
}
else {
echo "Cannot Send Email ";
exit();
}

if ($forward == 1) { 
    header ("Location:$location"); 
} 
else { 
    echo "Thank you for your submission. We will get back to you as soon as possible."; 
} 

?>