import { Schema } from 'mongoose';

export const AutorSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    nacionalidad:String,
    fechaNacimiento:{
        type:Date,
        default:Date.now
    },
    urlFoto:String,
    urlYouTube:String
});