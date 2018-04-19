<?php
session_start();
//header('location:login.php');
$con = mysqli_connect('localhost', 'root', '');
if ($con){
    echo "connection successful";
}
else{
	echo "no connection";
}
mysqli_select_db($con, 'example');
$email = $_POST['email'];
$q = "select * from signup where email = '$email'";
$result = mysqli_query($con, $q);
$num = mysqli_num_rows($result);
if ($num == 1) {
	header('location:index.html#!/home');
}
else{
	header('location:index.html');
}
?>
