Ext.define('ext-bis.store.Registrations', {
    extend: 'Ext.data.Store',
    model: 'ext-bis.model.Registration',
    autoLoad: true,
    pageSize: 22,
    autoLoad: {start: 0, limit: 22},
	sorters: [{
		property : 'id',
		direction: 'DESC'
	}], 
     
    proxy: {
        type: 'ajax',
        api: {
			 create: 'php/registration/create.php', 
			 read: 'php/registration/list.php',
             update: '',
             destroy: ''
        },
        reader: {
            type: 'json',
            root: 'registration',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'registration'
        }
    }
});