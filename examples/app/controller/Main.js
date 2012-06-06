/**
 * @class Sample.controller.Main
 * @extends Ext.app.Controller
 * Main application controller.
 */
Ext.define('Sample.controller.Main',{
    extend: 'Ext.app.Controller',
    config: {
        views: [
            'Address',
            'Main'
        ],
        refs: {
            mainView: 'mainview'
        },
        control: {
            'mainview button[action=getvalue]': {
                tap: 'getValue'
            },
            'mainview button[action=setvalue]': {
                tap: 'setValue'
            }
        }
    },
    
    getValue: function(){
        
        // Get the active for view
        var form = this.getMainView().getActiveItem();
        
        // Log the FieldContainer value
        console.log(form.getComponent(0).getValue());
        
        // Log the form values
        console.log(form.getValues());
        
    },
    
    setValue: function(){
        
        // Get the active for view
        var form = this.getMainView().getActiveItem();
        
        // Set a test value
        form.getComponent(0).setValue({
            street: 'Test Route',
            civic: '84',
            city: 'turin',
            zip: '10151',
            province: 'TO',
            country: 'italy'
        });
        
    }
    
});