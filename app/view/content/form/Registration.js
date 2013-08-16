Ext.define('ext-bis.view.content.form.Registration', {
    extend: 'Ext.form.Panel',
    xtype: 'form-registration',
	border: false,
	bodyPadding: 5,
	fieldDefaults: { labelAlign: 'right', labelWidth: 90, msgTarget: 'qtip'},

    initComponent: function () {

    	  // Custom function used for textfield listeners val change to uppercase
        function changeUpperCase(field, newValue, oldValue){
                 field.setValue(newValue.toUpperCase());
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
				listeners:{
			        change: changeUpperCase
			    }
			},{
				name: 'middle_name',
				flex: 2,
				margins: '0 0 0 6',
				emptyText: 'Middle',
				allowBlank: false,
				listeners:{
			        change: changeUpperCase
			    }
			},{
				name: 'last_name',
				flex: 3,
				margins: '0 0 0 6',
				emptyText: 'Last',
				allowBlank: false,
				listeners:{
			        change: changeUpperCase
			    }
			}]
		});
		var gender = Ext.create('Ext.form.FieldContainer', {		
			fieldLabel: 'Sex',
		    defaultType: 'checkboxfield',
		    horizontal: true,
		    items: [{
		        boxLabel  : 'Male',
		        name      : 'male',
		        inputValue: '1',
		        id        : 'checkbox1'
		    },{
		        boxLabel  : 'Female',
		        name      : 'female',
		        inputValue: '2',
		        id        : 'checkbox2'
		    }]	
		});    

    	this.items = [{
    		xtype: 'fieldset',
			title: 'Citizen Information',
			defaultType: 'textfield',
			layout: 'anchor',
			defaults: { anchor: '100%'},
			items: [fullname,gender]
    	}],

		this.buttons = [{
			text: 'Save',
			formBind: true,  
			disabled: true,
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




						

  				
                    
			
				
		
  
           
      
