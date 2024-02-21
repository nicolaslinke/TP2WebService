import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  artistID : string | null = null;
  albums : Album[] = [];

  constructor(public route : ActivatedRoute, public spotify : SpotifyService) { }

  async ngOnInit() {
    this.artistID = this.route.snapshot.paramMap.get("artistID");
    if (this.artistID != null) {
      this.albums = await this.spotify.getAlbums(this.artistID);
    }
  }
}
