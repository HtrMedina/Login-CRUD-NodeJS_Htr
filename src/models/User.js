import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true // Convierte el correo a minúsculas para evitar duplicados
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

export default model("User", userSchema);