
import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsDataService {

  artistsFavoris : Artist[] = [];
  jsonData : string | null = null; 

  constructor() { }

  async initData(): Promise<void> {
    this.jsonData = sessionStorage.getItem("artistsFavoris");
    if(this.jsonData != null) {
      this.artistsFavoris = JSON.parse(this.jsonData);
    }
  }

  async addData(artist : Artist): Promise<void> {
    this.artistsFavoris.push(artist);
    this.saveData();
  }

  saveData():void{
    // METTRE this.profile DANS LE STOCKAGE LOCAL 💾
    sessionStorage.setItem("artistsFavoris", JSON.stringify(this.artistsFavoris));
  }
}
