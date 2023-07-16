import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';

import { MongooseModule } from '@nestjs/mongoose';
import { AlbumSchema } from './schemas/album.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:'Album', schema: AlbumSchema }
    ])
  ],
  controllers: [AlbumController],
  providers: [AlbumService]
})
export class AlbumModule {}
