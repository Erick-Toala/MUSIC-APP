import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cancion } from './interfaces/cancion.interface';
import { CreateCancionDTO } from './dto/cancion.dto';

@Injectable()
export class CancionService {
    constructor(@InjectModel('Cancion') private readonly cancionModel:Model<Cancion>){}

    async getCanciones(): Promise<Cancion[]> {
        const canciones = await this.cancionModel.find().populate('idArtista', 'nombre').exec();
        return canciones;
    }

    async getCancion(cancionID:string):Promise<Cancion>{
        const cancion = await this.cancionModel.findById(cancionID).exec();;
        return cancion;
    }

    async createCancion(createCancionDTO:CreateCancionDTO):Promise<Cancion>{
        const cancion = new this.cancionModel(createCancionDTO);
        return await cancion.save();
    }

    async deleteCancion(cancionID:string):Promise<Cancion>{
        const deleteCancion = await this.cancionModel.findByIdAndDelete(cancionID);
        return deleteCancion;
    }

    async updateCancion(cancionID:string, createCancionDTO:CreateCancionDTO):Promise<Cancion>{
        const updateCancion = await this.cancionModel.findByIdAndUpdate(cancionID, createCancionDTO, {new:true});
        return updateCancion;
    }
}
