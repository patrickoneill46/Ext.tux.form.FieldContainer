/**
 * @class Sample.view.Address
 * @extends Ext.form.Panel
 * View which contains a FieldContainer component
 * configured to handle an address value.
 */
Ext.define('Sample.view.Address',{
    extend: 'Ext.form.Panel',
    xtype: 'addressview',
    config: {
        items: [
            {
                xtype: 'fieldcontainer',
                label: 'Address',
                name: 'address',
                rows: [
                    {
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'street',
                                placeHolder: 'Street',
                                flex: .7
                            },
                            {
                                xtype: 'spinnerfield',
                                name: 'civic',
                                placeHolder: 'Civic',
                                minValue: 1,
                                increment: 1,
                                flex: .3
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'zip',
                                placeHolder: 'Zip Code'
                            },
                            {
                                xtype: 'selectfield',
                                name: 'city',
                                options: [
                                    { text: 'Turin',  value: 'turin' },
                                    { text: 'San Francisco', value: 'sfo' },
                                    { text: 'Rewood City',  value: 'redwood' }
                                ]
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'province',
                                placeHolder: 'Province'
                            },
                            {
                                xtype: 'selectfield',
                                name: 'country',
                                options: [
                                    { text: 'Italy',  value: 'italy' },
                                    { text: 'California', value: 'california' }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
});