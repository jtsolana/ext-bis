<?php session_start(); ?>
<?php
	//calls the connection file with db
	include("../connection.php");

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];
	
	$queryString = "SELECT * FROM citizen_information LIMIT $start,  $limit";

	//sql query
	$query = mysql_query($queryString) or die(mysql_error());

	//makes a loop and creates an array with query fields
	$registrations = array();
	while($registration = mysql_fetch_assoc($query)) {
	    $registrations[] = $registration;
	}

	//Consultation total rows in the table
	$queryTotal = mysql_query('SELECT count(*) as num FROM citizen_information') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encodes for JSON format
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"registration" => $registrations
	));
	
?>