/**
 * @author Andrea Cammarata
 * @class Ext.tux.form.FieldContainer
 * @extends Ext.field.Field
 * @version 0.2
 * FieldContainer component which allow to create custom complex
 * Form Fields grouping them under the same label.
 */
Ext.define('Ext.tux.form.FieldContainer',{
    extend: 'Ext.field.Field',
    xtype: 'fieldcontainer',
    config: {
    
        /**
         * @cfg rows
         * The field rows used to contains all the fields
         * this component will display.
         * @accessor
         */
        rows: null,

        component: {
            xtype: 'container',
            cls: 'x-field-container'
        }

    },

    // @private
    initialize: function(config){

        var me = this,
            rows = me.getRows(),
            cmp = me.getComponent(),
            rowConfig = me.getRowConfig();

        //Apply the default row config to every rows
        Ext.each(rows, function(row){
	        Ext.apply(row, rowConfig);
            cmp.add(Ext.factory(row, Ext.Container));
        });
    
        me.initFields();
        me.callParent(arguments);

    },

    //@private
    getRowConfig: function(){
	
	    return {
	        cls: 'x-container-row',
	        defaults: { flex: 1 },
	        layout: {
                type: 'hbox',
                align: 'stretch'
            }
        };
	
    },

    // @private
    initFields: function(){
        
        var me = this;
        me.fields = new Ext.util.MixedCollection(true, me.getFieldKey);
        me.fields.addAll(Ext.ComponentQuery.query('field[name!=""]', me.getComponent()));
    
    },

    // @private
    getFieldKey: function(field){
        return field.getName();
    },

    /**
     * Get a FieldContainer object value.
     * @return {Object} The FieldContainer value.
     */
    getValue: function(){
        
        var cmp = this.getComponent(),
            value = {};

        this.fields.each(function(field){
            value[field.getName()] = field.getValue();
        });
        
        return value;
        
    },

    // @private
    applyValue: function(value){
    
        for(name in value){
            this.getField(name).setValue(value[name]);
        }

    },

    /**
     * Get a FieldContainer subfield.
     * @param {String} name The field name.
     * @return {Ext.field.Field} The requested field.
     */
    getField: function(name){
        return this.fields.getByKey(name);
    }
    
});