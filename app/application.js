Ext.define('ext-bis.Application', {
    name: 'ext-bis',
    extend: 'Ext.app.Application',
     views: [
        'Login', 
        'Viewport',
        'Header',
        'Navigation',
        'Dashboard',
        'Footer',
        'content.Registration',
        'content.form.Registration'
     ],


    controllers: [
        // TODO: add controllers here
        'Viewport',
        'Login',
        'Header',
        'Navigation',
        'Registration'
    ],

    stores: [
        // TODO: add stores here
        'Registrations'
    ]

    
});
