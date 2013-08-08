Ext.define('ext-bis.controller.Navigation', {
    extend: 'Ext.app.Controller',	
    refs: [{ ref: '', selector: ''} ],
    init: function() {
	
        this.control({
            'app-navigation': {
                 render: this.onRendered
            } 
        });
    },

    onRendered: function() {
      console.log('Success');
    }

});