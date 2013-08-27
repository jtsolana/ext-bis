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

    models: [
        'Registration'
    ],

    controllers: [
        'Viewport',
        'Login',
        'Header',
        'Navigation',
        'Registration'
    ],

    stores: [
        'Registrations'
    ]

    
});
