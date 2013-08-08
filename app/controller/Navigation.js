Ext.define('ext-bis.controller.Navigation', {
    extend: 'Ext.app.Controller',	
    refs: [{ ref: 'dashboard', selector: 'viewport > #dashboard'} ],
    init: function() {
	
        this.control({
            'app-navigation > #menupanel > #menu': {
                 click: this.onClickMenu
            }, 
        });
    },

    onTest: function() {
      console.log('Test Success');
    },

     onClickMenu: function (view, id) {
        var id = id.panel;      
        var cls = "ext-bis.view.content." + id;
        var tabs = this.getDashboard();
        var tab = tabs.child('#' + id);
        if (!tab) {
            tab = tabs.add(Ext.create(cls, {
                itemId: id,
                title: id
            }));
        }

        tabs.setActiveTab(tab);
        
        switch (id) 
        {
            case 'Registration': 
                console.log(id);
            break;
        }
        
    }

});