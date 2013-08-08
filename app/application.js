Ext.define('ext-bis.Application', {
    name: 'ext-bis',
    extend: 'Ext.app.Application',
     views: [
        'Login', 
        'Viewport',
        'Header',
        'Navigation',
        'Dashboard',
        'Footer'
     ],


    controllers: [
        // TODO: add controllers here
        'Viewport',
        'Login',
        'Header'
    ],

    stores: [
        // TODO: add stores here
    ]

    
});
