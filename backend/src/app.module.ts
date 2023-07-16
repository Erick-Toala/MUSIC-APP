import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CancionModule } from './cancion/cancion.module';

import { MongooseModule } from '@nestjs/mongoose';
import { AutorModule } from './autor/autor.module';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [CancionModule, MongooseModule.forRoot('mongodb+srv://toalaerick56:toalaerick56@cluster0.9flgjye.mongodb.net/music-repertorio-80s'), AutorModule, AlbumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
