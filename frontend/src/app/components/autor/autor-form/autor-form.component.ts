import { Component, OnInit } from '@angular/core';

import { Autor } from '../../../interfaces/Autor';
import { AutorService } from '../../../services/autor/autor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.css']
})
export class AutorFormComponent implements OnInit{

  
  autor:Autor={
    nombre:'',
    nacionalidad:'',
    fechaNacimiento: '',
    urlFoto:'',
    urlYouTube:''

  };

  edit:boolean=false;

  constructor(
    private autorService:AutorService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ){}

  ngOnInit(){
    const params= this.activatedRoute.snapshot.params;
    if (params){
      this.autorService.getAutor(params['id'])
        .subscribe(
          res=>{
            console.log(res);
            this.autor=res;
            this.edit=true;
            console.log(this.edit);
          }
        )
    }

  }


  submitAutor(){
    this.autorService.createAutor(this.autor)
      .subscribe(
        res => {
          console.log(res),
          this.router.navigate(['/autor'])
        },
        err => console.log(err)
      )
  }
  updateAutor(){
    if (this.autor._id) {
      this.autorService.updateAutorid(this.autor._id, this.autor)
        .subscribe(
          res => {
            console.log(res),
            this.router.navigate(['/autor'])
          },
          err => console.log(err)
        );
    } else {
      console.log('ID del autor no definido');
    }
  }
  
}

