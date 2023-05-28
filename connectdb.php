<?php

$host = 'localhost';
$db = 'TechMicroBit';
$user = 'root';
$pass = '';
$conn = mysqli_connect($host, $user, $pass, $db);

if(!$conn){
    echo "Connection failed!";
}
?>