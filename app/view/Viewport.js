Ext.define('ext-app.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[    
        'Ext.layout.container.Border',
        'Ext.tab.Panel',
        'ext-app.view.Header',
        'ext-app.view.Menu',
        'ext-app.view.Footer'
    ],

    layout: {
        type: 'border'
    }

});

