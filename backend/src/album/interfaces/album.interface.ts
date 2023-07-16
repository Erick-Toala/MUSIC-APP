import {Document} from 'mongoose';

export interface Album extends Document{
    readonly nombre:string;
    readonly cancionPopular:string;
    readonly idArtista:string;
    readonly urlPortada:string;
    readonly urlAlbum:string;
    readonly fechaLanzamiento:Date;
}