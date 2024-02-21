
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
    this.jsonData = localStorage.getItem("artistsFavoris");
    if(this.jsonData != null) {
      this.artistsFavoris = JSON.parse(this.jsonData);
    }
  }

  async addData(artist : Artist): Promise<void> {
    this.artistsFavoris.push(artist);
    this.saveData();
  }

  async clearData(): Promise<void> {
    this.artistsFavoris = [];
    this.saveData();
  }

  async saveData(): Promise<void> {
    sessionStorage.setItem("artistsFavoris", JSON.stringify(this.artistsFavoris));
  }
}
