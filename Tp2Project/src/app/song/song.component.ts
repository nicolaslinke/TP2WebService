import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { YoutubeService } from '../services/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  albumID : string | null = null;

  songs : string[] = [];

  videoId : string | null = null;

  videoUrl : string | null = null;

  constructor(public route : ActivatedRoute, public youtube : YoutubeService, public spotify : SpotifyService, public sanitizer : DomSanitizer) { }

  async ngOnInit() {
    this.albumID = this.route.snapshot.paramMap.get("albumID");
    if (this.albumID != null) {
      this.songs = await this.spotify.getSongs(this.albumID);
    }
  }

  async searchVideo(video : string) : Promise<void>{
    this.videoId = (await this.youtube.searchVideo(video));
    this.videoUrl = "https://www.youtube.com/embed/" + this.videoId;
  }

  getSafeUrl() : SafeResourceUrl | null{
    if (this.videoUrl != null)
    {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    }
    else return null;
  }
}
