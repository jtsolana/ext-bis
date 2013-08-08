Ext.define('ext-bis.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[    
        'Ext.layout.container.Border',
        'Ext.tab.Panel',
        'ext-bis.view.Header',
        'ext-bis.view.Navigation',
        'ext-bis.view.Footer'
    ],

    layout: {
        type: 'border'
    }

});

