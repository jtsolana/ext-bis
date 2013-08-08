Ext.define('ext-bis.view.Footer', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'app-footer',
    itemId: 'footer',
    region: 'south',
    cls: 'icon-blue',
    border: false,
    
    initComponent: function() {
        var now = new Date(),
        now = Ext.Date.format(now, 'F j, Y');
        //Ext.Date.format(curdate,  'm/d/y');
        this.items = [
        '->',
        {
            xtype: 'label',
            style: { color: 'White'},
            text: 'Date:' + " " + now
        }]
    
        this.callParent(arguments); 
    }
    
   
});