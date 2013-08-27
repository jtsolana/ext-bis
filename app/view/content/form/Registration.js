Ext.define('ext-bis.view.content.form.Registration', {
    extend: 'Ext.form.Panel',
    xtype: 'form-registration',
	border: false,
	bodyPadding: 5,
	requires: ['Ext.window.MessageBox'],
	fieldDefaults: { labelAlign: 'right', labelWidth: 90, msgTarget: 'qtip'},
	
    initComponent: function () {

        function changeUpperCase(field, newValue, oldValue){
                 field.setValue(newValue.toUpperCase());
        }
        function calculateAge(field, oldValue){
        		var birthdate = field.getValue(oldValue);
				var parsebirthdate = Date.parse(birthdate);              
				var datenow = Ext.Date.format(new Date(),'Y-m-d');
				var parsedatenow = Date.parse(datenow);
				var age = (parsedatenow-parsebirthdate)/31536000000;
				var result = parseInt(age);
				Ext.ComponentQuery.query('#agefield')[0].setValue(result);
        }

        function setSpouseNameFieldEnabled(){
				Ext.ComponentQuery.query('#spousefname')[0].setDisabled(false);
				Ext.ComponentQuery.query('#spousemname')[0].setDisabled(false);
				Ext.ComponentQuery.query('#spouselname')[0].setDisabled(false);
        }

        function setSpouseNameFieldDisabled(){
				Ext.ComponentQuery.query('#spousefname')[0].setDisabled(true);
				Ext.ComponentQuery.query('#spousefname')[0].setValue('');
				Ext.ComponentQuery.query('#spousemname')[0].setDisabled(true);
				Ext.ComponentQuery.query('#spousemname')[0].setValue('');
				Ext.ComponentQuery.query('#spouselname')[0].setDisabled(true);
				Ext.ComponentQuery.query('#spouselname')[0].setValue('');
        }

    	var fullname = Ext.create('Ext.form.FieldContainer', {		
			fieldLabel: 'Name',
			layout: 'hbox',
			combineErrors: true,
			defaultType: 'textfield',
			items: [{
				name: 'first_name',
				flex: 2,
				emptyText: 'First',
				allowBlank: false,
				listeners:{change: changeUpperCase}
			},{
				name: 'middle_name',
				flex: 2,
				margins: '0 0 0 6',
				emptyText: 'Middle',
				allowBlank: false,
				listeners:{change: changeUpperCase}
			},{
				name: 'last_name',
				flex: 3,
				margins: '0 0 0 6',
				emptyText: 'Last',
				allowBlank: false,
				listeners:{change: changeUpperCase}
			}]
		});

		var gender = Ext.create('Ext.form.FieldContainer', {		
			fieldLabel: 'Sex',
		    defaultType: 'textfield',
		    layout: 'hbox',
		    items: [{
		        name: 'sex',
		        itemId: 'sexfield',
		        hidden: true
		    },{
		    	xtype: 'checkboxfield',
		        boxLabel  : 'Male',
		        inputValue: 'male',
		        itemId: 'boxmale',
		        handler: function(field, value) {
		            if (value) {
		   				Ext.ComponentQuery.query('#boxfemale')[0].setValue(false);
		   				Ext.ComponentQuery.query('#sexfield')[0].setValue('MALE');
		            }          
		        }       
		    },{
		    	xtype: 'checkboxfield',
		        boxLabel  : 'Female',
		        inputValue: 'female',
		        itemId: 'boxfemale',
		        handler: function(field, value) {
		            if (value) {
		   				Ext.ComponentQuery.query('#boxmale')[0].setValue(false);
		   				Ext.ComponentQuery.query('#sexfield')[0].setValue('FEMALE');
		            }          
		        }

		    }]	
		});

		var birth = Ext.create('Ext.form.FieldContainer', {	
			layout: 'hbox',
			defaultType: 'textfield',
			itemId: 'birthfield',
			items: [{
				xtype: 'datefield',
				fieldLabel: 'Birth Date',
				format: 'Y-m-d',
				width: 206,
				name: 'birth_date',
				itemId: 'datefield',
				allowBlank: false,
				listeners:{ 
					select: calculateAge
				}
			},{
				labelWidth: 50,
				name: 'age',
				itemId: 'agefield',
				width: 50,
				readOnly: true,
				margins: '0 0 0 6',
				emptyText: 'Age'
			},{
				name: 'place_of_birth',
				itemId: 'placeofbirthfield',
				flex: 3,
				margins: '0 0 0 6',
				emptyText: 'Place Of Birth',
				allowBlank: false,
				listeners:{change: changeUpperCase}
			}]		
		});
			
		var address = Ext.create('Ext.form.FieldContainer', {		
			layout: 'hbox',
			defaultType: 'textfield',
			items: [{
				fieldLabel: 'Address',
				flex: 3,
				name: 'address',
				allowBlank: false,
				listeners:{change: changeUpperCase}
			},{
				name: 'zone_no',
				emptyText: 'Zone No.',
				width: 60,
				margins: '0 0 0 6',
				maskRe: /[\d]/,
				maxLength: 2,
				allowBlank: false	
			},{
				name: 'house_no',
				emptyText: 'House No.',
				width: 62,
				margins: '0 0 0 6',	
				allowBlank: false
			}]
		});

		// Civil status local data store
		var store = Ext.create('Ext.data.Store', {
		    fields: ['abbr', 'name'],
		    data : [
		        {"abbr":"Single", "name":"Single"},
		        {"abbr":"Married", "name":"Married"},
		        {"abbr":"Widowed", "name":"Widowed"},
		        {"abbr":"Legally Separated", "name":"Legally Separated"},
		    ]
		});

		// Create the combo box, attached to the civil status data store
		var civilstatus = Ext.create('Ext.form.FieldContainer', {
			defaultType: 'combo',
			items: [{
				fieldLabel: 'Civil Status',
			    store: store,
			    width: 215,
			    queryMode: 'local',
			    displayField: 'name',
			    valueField: 'abbr',
			    listeners:{
			        select: function() {
			        	var status = this.getValue();
			        	if (status == 'Married') {
			        		setSpouseNameFieldEnabled();
			        	} else {
			        		setSpouseNameFieldDisabled();
			        	}
			        }
			    }
			}]		   
		});

		var spousename = Ext.create('Ext.form.FieldContainer', {		
			fieldLabel: 'Name of Spouse, if married',
			layout: 'hbox',
			combineErrors: true,
			defaultType: 'textfield',
			labelAlign: 'top',
			items: [{
				name: 'spouse_fname',
				itemId: 'spousefname',
				flex: 2,
				emptyText: 'First',
				disabled: true,
				allowBlank: false,
				listeners:{change: changeUpperCase}
			},{
				name: 'spouse_mname',
				itemId: 'spousemname',
				flex: 2,
				margins: '0 0 0 6',
				emptyText: 'Middle',
				disabled: true,
				allowBlank: false,
				listeners:{change: changeUpperCase}
			},{
				name: 'spouse_lname',
				itemId: 'spouselname',
				flex: 3,
				margins: '0 0 0 6',
				emptyText: 'Last',
				disabled: true,
				allowBlank: false,
				listeners:{change: changeUpperCase}
			}]
		}); 		    

		// Form items
    	this.items = [{
			xtype: 'fieldset',
			title: 'Date of Registration',
			defaultType: 'datefield',
			layout: 'anchor',
			items: [{
				name: 'date_of_registration',
				format: 'Y-m-d',
				value: new Date(),
				width: 100,
				allowBlank: false
			},
			{
				name: 'last_update',
				format: 'Y-m-d H:i:s', //datetime 
				value: new Date(),
				hidden: true,
				allowBlank: false
			}]
		},{	
			xtype: 'fieldset',
			title: 'Application No.',
			defaultType: 'textfield',
			layout: 'anchor',
			items: [{
				name: 'application_no',
				width: 100,
				readOnly: true,
				allowBlank: true
			}]
		},{
    		xtype: 'fieldset',
			title: 'Personal Information',
			defaultType: 'textfield',
			layout: 'anchor',
			defaults: { anchor: '100%'},
			items: [fullname,gender,birth,address,civilstatus,spousename]
    	},{
    		xtype: 'fieldset',
			title: 'Remarks',
			layout: 'anchor',
			defaultType: 'textarea',
			defaults: { anchor: '100%'},
			items: [{
				grow: true,
	        	name: 'remarks'
			}]
    	}],

		this.buttons = [{
			text: 'Save',
			formBind: false,  
			disabled: false,
			action: 'save' 
		},{
			text: 'Cancel',
			handler: function(){
			this.up('window').close();
			}
    
		}],
	
        this.callParent(arguments);
    }
});



				
