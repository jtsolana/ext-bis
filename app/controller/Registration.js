Ext.define('ext-bis.controller.Registration', {
    extend: 'Ext.app.Controller',	
    refs: [{ ref: 'registration', selector: ''} ],
    
    init: function() {
	
        this.control({
            'app-registration button[action=prepare]': {
                click: this.onClickNewRecord
            },
            'form-registration button[action=save]': {
                click: this.onTest
            },  
        });
    },

    onTest: function(button) {
        var win  = button.up('window');
        var form   = win.down('form');
        var values = form.getValues();
        var store = Ext.getStore('Registrations');
        store.add(values);
        store.sync();
        store.load();
        win.close();

    },

    onClickNewRecord: function() {

        var window = Ext.create('Ext.window.Window', {
            title: 'Application For Registration',
            iconCls: '',
            height: 500,
            width: 500, 
            layout: 'fit',   
            items:[{
                xtype: 'form-registration'
            }]  
        }).show();  

    }


});





 

                        

                

                   
      
                        