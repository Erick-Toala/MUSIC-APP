import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Album } from './interfaces/album.interface';
import { CreateAlbumDTO } from './dto/album.dto';

@Injectable()
export class AlbumService {

    constructor(@InjectModel('Album') private readonly albumModel:Model<Album>){}

    async getAlbumes(): Promise<Album[]> {
        const albumes = await this.albumModel.find().populate('cancionPopular idArtista', 'nombre').exec();
        return albumes;
    }

    async getAlbum(albumID:string):Promise<Album>{
        const album = await this.albumModel.findById(albumID).exec();;
        return album;
    }

    async createAlbum(createAlbumDTO:CreateAlbumDTO):Promise<Album>{
        const album = new this.albumModel(createAlbumDTO);
        return await album.save();
    }

    async deleteAlbum(albumID:string):Promise<Album>{
        const deleteAlbum = await this.albumModel.findByIdAndDelete(albumID);
        return deleteAlbum;
    }

    async updateAlbum(albumID:string, createAlbumDTO:CreateAlbumDTO):Promise<Album>{
        const updateAlbum = await this.albumModel.findByIdAndUpdate(albumID, createAlbumDTO, {new:true});
        return updateAlbum;
    }

}
