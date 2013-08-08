Ext.define('ext-app.Application', {
    name: 'ext-app',
    extend: 'Ext.app.Application',
     views: [
        'Login', 
        'Viewport',
        'Header',
        'Menu',
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
