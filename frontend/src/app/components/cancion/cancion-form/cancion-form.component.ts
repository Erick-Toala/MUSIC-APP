import { Component, OnInit } from '@angular/core';

import { Cancion } from '../../../interfaces/Cancion';
import { CancionService } from '../../../services/cancion/cancion.service';
import { Router, ActivatedRoute } from '@angular/router';

import { AutorService } from '../../../services/autor/autor.service';


@Component({
  selector: 'app-cancion-form',
  templateUrl: './cancion-form.component.html',
  styleUrls: ['./cancion-form.component.css']
})
export class CancionFormComponent  implements OnInit {

  autor: any[]=[];

  

  cancion:Cancion={
    nombre:'',
    duracion:'',
    idArtista: '',
    urlPortada:'',
    urlYouTube:'',
    fechaLanzamiento:''

  };

  edit:boolean=false;

  constructor(
    private cancionService:CancionService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private autorService: AutorService
    ){
      this.autor = [];
    }

  ngOnInit(){
    const params= this.activatedRoute.snapshot.params;
    if (params){
      this.cancionService.getCancion(params['id'])
        .subscribe(
          res=>{
            console.log(res);
            this.cancion=res;
            this.edit=true;
            console.log(this.edit);
          }
        )
    };
    this.autorService.getAutors()
      .subscribe(
        res => {
          this.autor = Object.values(res);
          console.log(this.autor);
        },
        err => console.log(err)
      );

  }


  submitCancion(){
    this.cancionService.createCancion(this.cancion)
      .subscribe(
        res => {
          console.log(res),
          this.router.navigate(['/cancion'])
        },
        err => console.log(err)
      )
  }
  updateCancion(){
    if (this.cancion._id) {
      this.cancionService.updateCancionid(this.cancion._id, this.cancion)
        .subscribe(
          res => {
            console.log(res),
            this.router.navigate(['/cancion'])
          },
          err => console.log(err)
        );
    } else {
      console.log('ID de la canción no definido');
    }
  }

}
