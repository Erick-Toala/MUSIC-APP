//importamos el objeto Document para manejar la interface como un documento
import {Document} from 'mongoose';

//definimos una interface para detallar que es lo que vamos a estar manejando dentro del codigo, 
//no lo que se mueve en la aplicacion servidor-cliente
//le decimos que esta interface hereda propiedades de Document
export interface Cancion extends Document{
    //definimos las propiedades
    readonly nombre:string;
    readonly duracion:string;
    readonly idArtista:string;
    readonly urlPortada:string;
    readonly urlYouTube:string;
    readonly fechaLanzamiento:Date;
}