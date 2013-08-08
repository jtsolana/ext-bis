
Ext.define('ext-app.controller.Viewport', {
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
            p.add(Ext.create('ext-app.view.Login')); 
            p.doLayout(); 
        } else {
           // p.remove('ext-app.view.Login');
            p.add(Ext.create('ext-app.view.Header'),
                Ext.create('ext-app.view.Footer'),
                Ext.create('ext-app.view.Menu'),
                Ext.create('ext-app.view.Dashboard')
             ); 
            p.doLayout();
        }
    }
});

