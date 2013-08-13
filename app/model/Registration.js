Ext.define('ext-bis.model.Registration', {
    extend: 'Ext.data.Model',
    fields: [
		'id', 'date_of_registration', 'citizen_no', 'first_name', 'middle_name',
		'last_name', 'birth_date', 'age', 'place_of_birth', 'address',
		'zone_no', 'gender', 'civil_status', 'house_hold_no', 'marriage_certificate_no', 
		'spouse_fname', 'spouse_mname', 'spouse_lname', 'no_of_children', 'deleted', 
		'record_status', 'remarks'
	] 
}); 