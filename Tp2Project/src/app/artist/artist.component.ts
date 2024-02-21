import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';
import { SpotifyService } from '../services/spotify.service';
import { ArtistsDataService } from '../services/artists-data.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistName : string = "";
  artist ?: Artist;
  spotifyToken ?: string;
  artistsFavoris : Artist[] = [];

  constructor(public spotify : SpotifyService, public artistsData : ArtistsDataService) { }

  ngOnInit() {
    this.spotify.connect();
    this.artistsData.initData();
  }

  async addArtist() : Promise<void>{
    // Allo 👋
    //this.artist = await this.spotify.searchArtist(this.artistName);
    await this.artistsData.addData(await this.spotify.searchArtist(this.artistName));
  }
}
