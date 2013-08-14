Ext.define('ext-bis.controller.Registration', {
    extend: 'Ext.app.Controller',	
    refs: [{ ref: 'registration', selector: ''} ],
    init: function() {
	
        this.control({
            'app-registration button[action=newrecord]': {
                click: this.onClickNewRecord
            }, 
        });
    },

    onTest: function() {
      console.log('Test Success');
    },

    onClickNewRecord: function() {

        var form = Ext.create('Ext.form.Panel', {
            
            bodyPadding: '5 5 0',
            fieldDefaults: {
                msgTarget: 'side',
                labelWidth: 75
            },
            defaults: { anchor: '100%' },

            items: [{
                xtype:'fieldset',
                title: 'Personal Information',
                collapsible: true,
                defaultType: 'textfield',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items :[{
                    fieldLabel: 'Home',
                    name: 'home',
                    value: '(888) 555-1212'
                },{
                    fieldLabel: 'Business',
                    name: 'business'
                },{
                    fieldLabel: 'Mobile',
                    name: 'mobile'
                },{
                    fieldLabel: 'Fax',
                    name: 'fax'
                }]
            }],

            buttons: [{
                text: 'Save'
            },{
                text: 'Cancel'
            }]
        });

        var window = Ext.create('Ext.window.Window', {
            title: 'Citizen Information Form',
            iconCls: '',
            height: 500,
            width: 600, 
            layout: 'fit',   
            items:[form]  
        }).show();  

    },


});





 

                        

                
                    
            
            
                        