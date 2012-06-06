/**
 * @class Sample.view.Main
 * @extends Ext.Container
 * Main application view.
 * PS: Since will be added new examples on how to use this component
 * I need this main view container which will be converted in a TabPanel
 * where every tab will contains a different example.
 */
Ext.define('Sample.view.Main',{
    extend: 'Ext.Container',
    xtype: 'mainview',
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        text: 'getValue',
                        action: 'getvalue'
                    },
                    {
                        text: 'setValue',
                        action: 'setvalue'
                    }
                ]
            },
            {
                xtype: 'addressview',
                title: 'Address'
            }
        ]
    }
});