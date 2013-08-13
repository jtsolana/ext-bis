Ext.define('ext-bis.store.Registrations', {
    extend: 'Ext.data.Store',
    model: 'ext-bis.model.Registration',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 20},
	sorters: [{
		property : 'id',
		direction: 'DESC'
	}], 
     
    proxy: {
        type: 'ajax',
        api: {
			 create: '', 
			 read: '',
             update: '',
             destroy: ''
        },
        reader: {
            type: 'json',
            root: '',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: ''
        }
    }
});