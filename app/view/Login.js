Ext.define('ext-bis.view.Login', {
    extend: 'Ext.container.Container',
    requires:[    
        'Ext.layout.container.Absolute',
        'Ext.layout.container.Container',
        'Ext.toolbar.TextItem',
        'Ext.form.Label',
        'Ext.form.Panel'
    ],
    xtype: 'app-login',
    region: 'center',
    bodyPadding: 10,
    border: false, 
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
   
    initComponent: function() {

        var toolbar = Ext.create('Ext.toolbar.Toolbar',{
            cls: 'icon-blue',
            border: true,
            width: 300,
            items: [
            {
                xtype: 'tbtext',
                text:'<div style="height:16px;width:16px;background: url(\'resources/images/lock.png\')" align="right"></div>'
            },{
                xtype: 'label',
                style: { color: 'White'},
                text: 'Barangay Information System'
            }]

        });

        var form = Ext.create('Ext.form.Panel', {
            layout: 'absolute',
            border: true,
            shadow:true,
            height: 120,
            width: 300,
            defaultType:'textfield',
            bodyPadding: 5,
            monitorValid:true,
            items:[{ 
                x: 10,
                fieldLabel:'Username', 
                name:'username',
                labelWidth: 80,
                width: 270,
                allowBlank:false 
            },{ 
                x: 10, y: 35,
                fieldLabel:'Password', 
                name:'password', 
                inputType:'password', 
                labelWidth: 80,
                width: 270,
                allowBlank:false 
            },{ 
                xtype: 'button',
                x: 225, y: 65,
                text:'Login',
                formBind: false,
                action: 'login',
                iconCls: 'icon-key'
            }]
        });

        this.items = [toolbar,form],
        this.callParent(arguments); 
    }
    
   
});