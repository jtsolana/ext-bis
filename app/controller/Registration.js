Ext.define('ext-bis.controller.Registration', {
    extend: 'Ext.app.Controller',	
    refs: [{ ref: 'registration', selector: ''} ],
    
    init: function() {
	
        this.control({
            'app-registration button[action=prepare]': {
                click: this.onClickPrepare
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

    onClickPrepare: function() {

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

        var store = Ext.getStore('Registrations');
        var rowindex = store.getCount();

        if (rowindex == 0) {
           var num = 1;
           var str = "" + num;
           var pad = "00000";
           var application_no = pad.substring(0, pad.length - str.length) + str;
           Ext.ComponentQuery.query('#applicationnofield')[0].setValue(application_no);
        } else {
            var lastindex = store.getCount();
            var record = store.getAt(lastindex-1);
            var registration_id = record.get('registration_id') ;
            var num = parseInt(registration_id) + 1;
            var str = "" + num;
            var pad = "00000";
            var application_no = pad.substring(0, pad.length - str.length) + str;
            Ext.ComponentQuery.query('#applicationnofield')[0].setValue(application_no);
        }  

    }


});





 

                        

                

                   
      
                        