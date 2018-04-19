<?php
session_start();
//header('location:login.php');
$con = mysqli_connect('localhost', 'root', '');
mysqli_select_db($con, 'example');
$name = $_POST['name'];
$email = $_POST['email'];
$q = "select * from signup where name = '$name' && email = '$email'";
$result = mysqli_query($con, $q);
$num = mysqli_num_rows($result);
if ($num == 1) {
	echo "duplicate data";
	header('location:index.php');
}
else{
	$qy = " insert into signup(name , email) values ('$name' , '$email' ) ";
	mysqli_query($con, $qy);
	header('location:index.html#!/main1');
}
?>
