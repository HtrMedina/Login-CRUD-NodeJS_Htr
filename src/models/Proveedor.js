import { Schema, model } from "mongoose";

const supplierSchema = new Schema({
    supplierName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); // Asegura que el teléfono tenga 10 dígitos
            },
            message: props => `${props.value} no es un número de teléfono válido!`
        }
    }
});

export default model('Supplier', supplierSchema);


