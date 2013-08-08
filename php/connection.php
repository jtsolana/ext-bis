<?php
	$con = mysql_connect("localhost", "hexa", "hexa") or die("Database connection error: " . mysql_error());
	mysql_select_db("app-bis",$con) or die("Datatabase not found: " . mysql_error());
?>