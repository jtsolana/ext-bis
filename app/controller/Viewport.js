
Ext.define('ext-bis.controller.Viewport', {
    extend: 'Ext.app.Controller',
    
    init: function() {
        this.control({
             'viewport': {
                 render: this.onViewportRendered
            }
        });
    },

    onViewportRendered: function(p) {
        // global variable userid ref: index.php
        if (userid == 0) {
            p.add(Ext.create('ext-bis.view.Login')); 
            p.doLayout(); 
        } else {
           // p.remove('ext-bis.view.Login');
            p.add(Ext.create('ext-bis.view.Header'),
                Ext.create('ext-bis.view.Footer'),
                Ext.create('ext-bis.view.Navigation'),
                Ext.create('ext-bis.view.Dashboard')
             ); 
            p.doLayout();
        }
    }
});

