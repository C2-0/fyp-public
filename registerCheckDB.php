<?php
session_start();
include "connectdb.php";
    
    $uname = $_POST['registerusername'];
    $pass = $_POST['rpassword'];
    $pass2 = $_POST['rrpassword'];
    $hashedPwd = password_hash($pass, PASSWORD_DEFAULT);

    if($pass != $pass2){
        header("Location: RegisterRepeatPwd.html");
	    //echo "<script>windows.top.location.href=\"loading.html\";</script>; 
        $conn->close();
    } else {
        $sql = "SELECT userID FROM user WHERE userID='$uname'";
        $result = mysqli_query($conn, $sql);
        
        if (mysqli_num_rows($result) == 0){
            $sql2 = "INSERT INTO user (userID, userPwd) VALUES (?, ?)";
            $stmt = $conn->prepare($sql2);
            $stmt->bind_param("ss", $uname, $hashedPwd);
            $stmt->execute();
            $stmt->close();
            header("Location: RegisterSuccess.html");
	        //echo "<script>windows.top.location.href=\"RegisterFailure.html\";</script>;
            } else {
            header("Location: RegisterFailure.html");
	        //echo "<script>windows.top.location.href=\"RegisterFailure.html\";</script>; 
            $conn->close();
            }
    }  
        $stmt->close();
        $conn->close();
?>