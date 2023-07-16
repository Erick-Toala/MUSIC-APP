import { Component, OnInit } from '@angular/core';

import { CancionService } from '../../../services/cancion/cancion.service';


@Component({
  selector: 'app-cancion-list',
  templateUrl: './cancion-list.component.html',
  styleUrls: ['./cancion-list.component.css']
})
export class CancionListComponent implements OnInit {
  canciones: any[] = [];


  constructor(private cancionService: CancionService){
    this.canciones = [];
  }

  ngOnInit():void {
    this.getCancions();
  }

  getCancions() {  
    this.cancionService.getCancions()
      .subscribe(
        res => {
          this.canciones = Object.values(res);
          console.log(this.canciones);
        },
        err => console.log(err)
      );
  }

  deleteCancion(id: string){
    this.cancionService.deleteCancion(id)
      .subscribe(
        res=> {
          this.getCancions();
        },
        err => console.log(err)
      );
  }


}
