import { Component } from '@angular/core';

import { ReseniaService } from '../../services/resenia/resenia.service';
import { IResenia,IResenias } from '../../interfaces/Resenia';

import { CancionService } from '../../services/cancion/cancion.service';
import { Cancion } from '../../interfaces/Cancion';


@Component({
  selector: 'app-resenia',
  templateUrl: './resenia.component.html',
  styleUrls: ['./resenia.component.css']
})
export class ReseniaComponent {
  canciones: any[];

  id: string='';;

  dataResenia:IResenias = { sum:0, resenia:[] };
  title:string = 'Resenia';

  constructor(
    private reseniaService: ReseniaService,
    private cancionService: CancionService
  ){
    this.canciones = [];
  }

  ngOnInit() {
    this.reseniaService.getResenias()
     .subscribe(data => {
       this.dataResenia= data;
       console.log(data)
    });
    this.cancionService.getCancions()
      .subscribe(
        res => {
          this.canciones = Object.values(res);
          console.log(this.canciones);
        },
        err => console.log(err)
      );
  }

  submitData(value: IResenia) {
    const id = this.id;
    let body: IResenia = {
      descripcion: value.descripcion,
      nombre: value.nombre
    };
    if (value.idCancion) {
      body.idCancion = value.idCancion;
    }
    
    if (this.id.trim().length==0)
    {
    this.reseniaService.createResenia(body)
      .subscribe(response => {
        console.log(response);
        this.ngOnInit();
      })
    }else
    {
      this.reseniaService.updateResenia(this.id, body)
        .subscribe(response => {
          console.log(response);
          this.ngOnInit();
        })
    }
  }

  deleteResenia(id: string) {
    this.reseniaService.deleteResenia(id)
      .subscribe(response => {
        console.log('Reseña eliminada:', response);
        // Realiza cualquier otra acción necesaria después de eliminar el deportista.
        this.ngOnInit();
      });
  }

  eliminarEspacios(nombre: string): string {
    return nombre.replace(/\s+/g, '');
  }
  
}
