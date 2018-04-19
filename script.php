<?php
$connect = mysqli_connect("localhost","admin","","signup");
$data = json_decode(file_get_contents("php://input"));
if(count($data>0))
{
	$name = mysqli_real_escape_string($connect, $data->name);
	$email = mysqli_real_escape_string($connect, $data->email);
	$query = "INSERT INTO signup(name, email) VALUES ('$name', '$email')";
	if(mysqli_query($connect, $query))
	{
		echo "data inserted";
	}
	else
	{
		echo "error";
	}
}
?>
