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

        var window = Ext.create('Ext.window.Window', {
            title: 'Registration Form',
            iconCls: '',
            height: 500,
            width: 600, 
            layout: 'fit',   
            items:[{
                xtype: 'form-registration'
            }]  
        }).show();  

    }


});





 

                        

                

                   
      
                        