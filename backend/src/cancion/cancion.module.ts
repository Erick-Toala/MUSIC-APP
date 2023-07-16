import { Module } from '@nestjs/common';
import { CancionController } from './cancion.controller';
import { CancionService } from './cancion.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CancionSchema } from './schemas/cancion.schema';


@Module({
  imports:[
    MongooseModule.forFeature([
      {name:'Cancion', schema: CancionSchema}
    ])
  ],
  controllers: [CancionController],
  providers: [CancionService]
})
export class CancionModule {}
