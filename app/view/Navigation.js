Ext.define('ext-bis.view.Navigation', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.panel.Panel',
        'Ext.layout.container.Accordion'
    ],

    xtype: 'app-navigation',
    itemId: 'navigation',
    region: 'west',
    width: 250,
    
    defaults: { 
        // applied to each contained panel
        bodyStyle: 'padding:15px'
    },

    layout: {
        // layout-specific configs go here
        type: 'accordion',
        titleCollapse: false,
        animate: true,
        activeOnTop: true
    },

    items: [{
        title: 'Menu',
        itemId: 'menupanel',
        items: [{
            xtype: 'menu',
            itemId: 'menu',
            border: false,
            bodyStyle:'background-color:white !important;',
            floating: false,  // usually you want this set to True (default)
            items: [{
                text: 'item 1',
                panel: 'Registration'
            },{
                text: 'item 2'
            },{
                text: 'item 3'
            }]
        }]
       
    },{
        title: 'Reports',
        html: 'Panel content!'
    },{
        title: 'Settings',
        html: 'Panel content!'
    }]


});