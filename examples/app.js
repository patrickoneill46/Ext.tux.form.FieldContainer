Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.tux': '../src'
    }
});

Ext.require([
	'Ext.tux.form.FieldContainer'
]);

Ext.application({
    name: 'Sample',
    controllers: ['Main'],
    launch: function(){
	    
	    Ext.Viewport.add({
		    xtype: 'mainview'
	    });
	
    }
});