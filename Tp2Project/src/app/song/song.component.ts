import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  albumID : string | null = null;

  songs : string[] = [];

  constructor(public route : ActivatedRoute, public spotify : SpotifyService) { }

  async ngOnInit() {
    this.albumID = this.route.snapshot.paramMap.get("albumID");
    if (this.albumID != null) {
      this.songs = await this.spotify.getSongs(this.albumID);
    }
  }
}
