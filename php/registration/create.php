<?php session_start(); ?>
<?php
	//calls the connection file with db
	include("../connection.php");

	$info = $_POST['registration'];
	$data = json_decode(stripslashes($info));
	$application_no =  $data->application_no;
	$date_of_registration =  $data->date_of_registration;
	$first_name =  $data->first_name;
	$middle_name =  $data->middle_name;
	$last_name =  $data->last_name;
	$sex =  $data->sex;
	$birth_date =  $data->birth_date;
	$age =  $data->age;
	$place_of_birth =  $data->place_of_birth;
	$address =  $data->address;
	$zone_no =  $data->zone_no;
	$house_no =  $data->house_no;
	$civil_status =  $data->civil_status;
	$spouse_name =  $data->spouse_name;
	$last_update =  $data->last_update;
	$status =  $data->status;
	$remarks =  $data->remarks;


	//sql query
	$query = sprintf("INSERT INTO registration(application_no, date_of_registration, first_name, middle_name, last_name, sex, birth_date, age, place_of_birth, address, zone_no, house_no, civil_status, spouse_name, last_update, status, remarks) 
		VALUES ('%d', '%s', '%s', '%s', '%s', '%d', '%s', '%d', '%s', '%s', '%d', '%d', '%s', '%s', '%s', '%s', '%s')",
		mysql_real_escape_string($application_no),
		mysql_real_escape_string($date_of_registration),
		mysql_real_escape_string($first_name),
		mysql_real_escape_string($middle_name),
		mysql_real_escape_string($last_name),
		mysql_real_escape_string($sex),
		mysql_real_escape_string($birth_date),
		mysql_real_escape_string($age),
		mysql_real_escape_string($place_of_birth),
		mysql_real_escape_string($address),
		mysql_real_escape_string($zone_no),
		mysql_real_escape_string($house_no),
		mysql_real_escape_string($civil_status),
		mysql_real_escape_string($spouse_name),
		mysql_real_escape_string($last_update),
		mysql_real_escape_string($status),
		mysql_real_escape_string($remarks));

	$rs = mysql_query($query) or die("Insert failed: " . mysql_error());

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"registration" => array(
			"registration_id" => mysql_insert_id(),
			"application_no" => $application_no,
			"date_of_registration" => $date_of_registration,
			"first_name" => $first_name,
			"middle_name" => $middle_name,
			"last_name" => $last_name,
			"sex" => $sex,
			"birth_date" => $birth_date,
			"age" => $age,
			"place_of_birth" => $place_of_birth,
			"address" => $address,
			"zone_no" => $zone_no,
			"house_no" => $house_no,
			"civil_status" => $civil_status,
			"spouse_name" => $spouse_name,
			"last_update" => $last_update,
			"status" => $status,
			"remarks" => $remarks
		)
	));

?>


