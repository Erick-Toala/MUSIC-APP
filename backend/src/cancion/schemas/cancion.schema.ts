//importamos Schema desde mongoose
import { Schema } from 'mongoose';

//modelamos los datos que vamos a guardar dentro de mongoose en un Schema
//lo guardamos en una constante para exportar el Schema
export const CancionSchema = new Schema({
    //definimos todas las propiedades que vamos a guardar en mongodb
    nombre:{
        type:String,
        required:true
    },
    duracion:String,
    idArtista:{type: Schema.Types.ObjectId, ref:"Autor"},
    urlPortada:String,
    urlYouTube:String,
    fechaLanzamiento:{
        type:Date,
        default:Date.now
    }
});