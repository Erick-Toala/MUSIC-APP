import { Module } from '@nestjs/common';
import { AutorController } from './autor.controller';
import { AutorService } from './autor.service';

import {MongooseModule} from '@nestjs/mongoose';
import {AutorSchema} from './schemas/autor.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:'Autor',schema:AutorSchema}
    ])
  ],
  controllers: [AutorController],
  providers: [AutorService]
})
export class AutorModule {}
