Ext.define('ext-bis.view.content.Registration', {
    extend: 'Ext.panel.Panel',
    
    xtype: 'app-registration',
    itemId: 'registration',
    closable:  true,
 	layout: 'fit',
 	
 	initComponent: function() {

		var grid = Ext.create('Ext.grid.Panel', {
            cls: 'registration-list',
		    layout: 'fit',
            autoScroll: true,
            store: 'Registrations',
		    columns: [
		        { xtype: 'rownumberer' },
                { text: 'ID', hidden: true, dataIndex: 'id'},
                { text: 'Date of Registration',width: 70, sortable : true, dataIndex: 'date_of_registration'},
                { text: 'Citizen #', width: 40, sortable: true, dataIndex: 'citizen_no'},
                { text: 'First Name', width: 100, sortable: false, dataIndex: 'first_name'},
                { text: 'Middle Name', width: 100, sortable: false, dataIndex: 'middle_name'},
                { text: 'Last Name', width: 100, sortable: false, dataIndex: 'last_name'},
                { text: 'Age', width: 30, sortable: false, dataIndex: 'age', renderer: ''},
                { text: 'Gender', width: 50, sortable: false, dataIndex: 'gender'},
                { text: 'Civil Status', width: 50, sortable: false, dataIndex: 'civil_status'},
                { text: 'Address', width: 150, sortable : false, dataIndex: 'address'},
                { text: 'Zone #', width: 35, sortable: false, dataIndex: 'zone_no', renderer: ''},
                { text: 'House #', width: 40, sortable: false, dataIndex: 'house_hold_no', renderer: ''},
                { text: 'Record Status', width: 55, sortable: false, dataIndex: 'record_status', renderer: ''},
                { text: 'Remarks', flex: 1, sortable: false, dataIndex: 'remarks',renderer: ''}
		    ],
            dockedItems: [{
                xtype: 'toolbar',
                itemId: 'registrationtoolbar',
                dock: 'top',
                items: [{
                    text: 'New Record',
                    action: 'newrecord'
                }]
            },{
                xtype: 'pagingtoolbar',
                store: 'Registrations',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }]
		});

        this.items = [grid]
        this.callParent(arguments);

 	}
});

