import { Schema } from 'mongoose';


export const AlbumSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    cancionPopular:{type: Schema.Types.ObjectId, ref:"Cancion"},
    idArtista:{type: Schema.Types.ObjectId, ref:"Autor"},
    urlPortada:String,
    urlAlbum:String,
    fechaLanzamiento:{
        type:Date,
        default:Date.now
    }
});