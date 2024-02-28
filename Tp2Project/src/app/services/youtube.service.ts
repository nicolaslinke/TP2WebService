
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

const API_KEY : string = "AIzaSyDdGeBBitp39vY4x9sFpvO3_xHr5GlvTsU";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(public http : HttpClient) { }

  async searchVideo(video : string): Promise<string> {
    let x = await lastValueFrom(this.http.get<any>('https://www.googleapis.com/youtube/v3/search?type=video&part=id&maxResults=1&key=' + API_KEY + '&q=' + video));
    console.log(x);
    return x.items[0].id.videoId;
  }
}