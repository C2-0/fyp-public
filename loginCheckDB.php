<?php

include "connectdb.php";
    
    $uname = $_POST['uname'];
    $pass = $_POST['password'];
    
        $sql = "SELECT * FROM user WHERE userID = '$uname'";
        $result = mysqli_query($conn, $sql);
        $hashedPwd = mysqli_fetch_assoc($result);
        //print_r($hashedPwd['userPwd']);
        
        if (mysqli_num_rows($result) > 0){
            if($verify = password_verify($pass, $hashedPwd['userPwd'])){
                //print_r($hashedPwd['userPwd']);
                //echo "Pwd is correct";
                header("Location: loading.html");
		//echo "<script>window.top.location.href = \"loading.html\";</script>";

            } else {
                //echo "Pwd is wrong";
                header("Location: loginFailure.html");
		        //echo "<script>window.top.location.href = \"loginFailure.html\";</script>";

            }
            } else {
                header("Location: loginFailure.html");
                //echo "Wrong";
		        //echo "<script>window.top.location.href = \"loginFailure.html\";</script>";

            }
?>  
