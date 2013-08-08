<?php session_start(); ?>
<?php include("connection.php"); ?>
<?php
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$get_user = mysql_query("Select * from users where username = '{$username}' AND password = '{$password}'") or die("Database query failed: " . mysql_error());
	
	if(mysql_num_rows($get_user) > 0) {
		$result["success"] = true;
		$res = mysql_fetch_row($get_user);
		$_SESSION['userid'] = $res[0]; 
	} else {
		$result["success"] = false;
		$result["errors"]["reason"] = "Login failed. Try again.";
	}

	echo json_encode($result);

?>