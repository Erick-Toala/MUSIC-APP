import { Component, OnInit } from '@angular/core';

import { AutorService } from '../../../services/autor/autor.service';
import { Autor  } from '../../../interfaces/Autor';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent implements OnInit{

  autores: any[] = [];


  constructor(private autorService: AutorService){
    this.autores = [];
  }

  ngOnInit():void {
    this.getAutors();
  }

  getAutors() {  
    this.autorService.getAutors()
      .subscribe(
        res => {
          this.autores = Object.values(res);
          console.log(this.autores);
        },
        err => console.log(err)
      );
  }

  deleteAutor(id: string){
    this.autorService.deleteAutor(id)
      .subscribe(
        res=> {
          this.getAutors();
        },
        err => console.log(err)
      );
  }

}

