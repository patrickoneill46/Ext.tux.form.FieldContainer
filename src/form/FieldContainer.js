/**
 * @class Ext.tux.form.FieldContainer
 * @extends Ext.field.Field
 * FieldContainer component.
 */
Ext.define('Ext.tux.form.FieldContainer',{
    extend: 'Ext.field.Field',
    xtype: 'fieldcontainer',
    config: {
    
        /**
         * @cfg items
         * The field items that the this component
         * should contains.
         * @accessor
         */
        items: null,

        component: {
            xtype: 'container',
            cls: 'x-field-container'
        }

    },

    // @private
    initialize: function(config){

        var items = this.getItems(),
            cmp = this.getComponent();
    
        Ext.each(items, function(item){
            item.cls = 'x-container-row';
            cmp.add(Ext.factory(item, Ext.Container));
        });
    
        this.updateFields();
        this.callParent(arguments);

    },

    // @private
    updateFields: function(){
        
        var me = this;
        me.fields = new Ext.util.MixedCollection(true, me.getFieldKey);
        me.fields.addAll(Ext.ComponentQuery.query('field[name!=""]', this.getComponent()));
    
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