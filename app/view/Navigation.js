Ext.define('ext-bis.view.Navigation', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.panel.Panel',
        'Ext.layout.container.Accordion'
    ],

    xtype: 'app-navigation',
    itemId: 'navigation',
    region: 'west',
    width: 230,
    
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
        iconCls: 'icon-menu',
        items: [{
            xtype: 'menu',
            itemId: 'menu',
            border: false,
            bodyStyle:'background-color:white !important;',
            floating: false,  // usually you want this set to True (default)
            items: [{
                text: 'Registration',
                panel: 'Registration',
                iconCls: 'icon-arrow-right'
            },{
                text: 'Chart',
                iconCls: 'icon-arrow-right'
            }]
        }]
       
    },{
        title: 'Reports',
        iconCls: 'icon-reports'
    },{
        title: 'Settings',
        iconCls: 'icon-settings'
    }]


});