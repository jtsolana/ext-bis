Ext.define('ext-bis.controller.Header', {
    extend: 'Ext.app.Controller',	
    refs: [{ ref: 'toolbar', selector: 'toolbar'} ],
    init: function() {
	
        this.control({
            'app-header': {
                 render: this.onRendered
            },      		
            'app-header label': {
				  click : function(c) {
					window.location = 'php/logout.php';
				}
            }		 
        });
    },

    onRendered: function() {
     
    }

});