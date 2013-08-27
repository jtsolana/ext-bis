Ext.define('ext-bis.view.content.Registration', {
    extend: 'Ext.panel.Panel',
    
    xtype: 'app-registration',
    itemId: 'registration',
    iconCls: 'icon-menu-registration',
    closable:  true,
 	layout: 'fit',
    requires: [
        'Ext.grid.*',
        'Ext.ux.grid.feature.Searching'
    ],
 	
 	initComponent: function() {

        // Custom function used for column renderer @param {Object} val change font color
        function changeGreen(val){
                return '<span style="color:green;">' + val + '</span>';
        }
        
        function changeRed(val){
                return '<span style="color:red;">' + val + '</span>';
        } 
        
        function activeChange(val){
            if(val == 'Active'){
                return '<span style="color:green;">' + val +'</span>';
            }else{
                return '<span style="color:red;">' + val +'</span>';
            }
            return val;
        }  

        var searching = {
           ftype: 'searching',
           minChars: 1,
           mode: 'local'
        };

		var grid = Ext.create('Ext.grid.Panel', {
            itemId: 'registrationgrid',
               cls: 'registration-list',
		    layout: 'fit',
            autoScroll: true,
            store: 'Registrations',
            features: [searching],
		    columns: [
		        { xtype: 'rownumberer' },
                { text: 'Application No.', width: 70, sortable : true, dataIndex: 'application_no'},
                { text: 'Date of Registration', width: 70, sortable: true, dataIndex: 'date_of_registration'},
                { text: 'First Name', width: 100, sortable: true, dataIndex: 'first_name'},
                { text: 'Middle Name', width: 100, sortable: true, dataIndex: 'middle_name'},
                { text: 'Last Name', width: 100, sortable: true, dataIndex: 'last_name'},
                { text: 'Sex', width: 50, sortable: true, dataIndex: 'sex'},
                { text: 'Age', width: 30, sortable: true, dataIndex: 'age', renderer: changeGreen},
                { text: 'Address', width: 150, sortable: true, dataIndex: 'address'},
                { text: 'Zone No.', width: 35, sortable: true, dataIndex: 'zone_no', renderer: changeRed},
                { text: 'House No.', width: 40, sortable: true, dataIndex: 'house_no', renderer: changeRed},
                { text: 'Civil Status', width: 40, sortable: true, dataIndex: 'civil_status'},
                { text: 'Last Update', width: 70, sortable: true, dataIndex: 'last_update'},
                { text: 'Status', width: 55, sortable: false, dataIndex: 'status', renderer: changeGreen},
                { text: 'Remarks', flex: 1, sortable: false, dataIndex: 'remarks', renderer: changeGreen}
                
		    ],
            dockedItems: [{
                xtype: 'toolbar',
                itemId: 'registrationtoolbar',
                dock: 'top',
                items: [{
                    text: 'Prepare',
                    action: 'prepare'
                },'->']
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

