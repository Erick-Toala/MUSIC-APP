import {Document} from 'mongoose';

export interface Autor extends Document{
    readonly nombre:string;
    readonly nacionalidad:string;
    readonly fechaNacimiento:Date;
    readonly urlFoto:string;
    readonly urlYouTube:string;   
}