import { Injectable } from '@nestjs/common';

import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Autor} from './interfaces/autor.interface';
import {CreateAutorDTO} from './dto/autor.dto';

@Injectable()
export class AutorService {
    constructor(@InjectModel('Autor') private readonly autorModel:Model<Autor>){}


    async getAutores(): Promise<Autor[]> {
        const autores = await this.autorModel.find()
        return autores;
    }

    async getAutor(autorID:string):Promise<Autor>{
        const autor = await this.autorModel.findById(autorID);
        return autor;
    }

    
    async createAutor(createAutorDTO:CreateAutorDTO):Promise<Autor>{
        const autor = new this.autorModel(createAutorDTO);
        return await autor.save();
    }
    
    async deleteAutor(autorID:string):Promise<Autor>{
        const deleteAutor = await this.autorModel.findByIdAndDelete(autorID);
        return deleteAutor;
    }

    async updateAutor(autorID:string, createAutorDTO:CreateAutorDTO):Promise<Autor>{
        const updateAutor = await this.autorModel.findByIdAndUpdate(autorID, createAutorDTO, {new:true});
        return updateAutor;
    }


}
