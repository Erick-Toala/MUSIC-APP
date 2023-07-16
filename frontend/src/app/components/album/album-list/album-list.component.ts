import { Component, OnInit } from '@angular/core';

import {  AlbumService } from '../../../services/album/album.service';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albumes: any[] = [];


  constructor(private albumesService: AlbumService){
    this.albumes = [];
  }

  ngOnInit():void {
    this.getAlbums();
  }

  getAlbums() {  
    this.albumesService.getAlbums()
      .subscribe(
        res => {
          this.albumes = Object.values(res);
          console.log(this.albumes);
        },
        err => console.log(err)
      );
  }

  deleteAlbum(id: string){
    this.albumesService.deleteAlbum(id)
      .subscribe(
        res=> {
          this.getAlbums();
        },
        err => console.log(err)
      );
  }
}
