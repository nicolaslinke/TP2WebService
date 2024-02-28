
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Concert } from '../models/concert';

const API_KEY : string = "2b32475766802ac01eefda45e9e42ea0";

@Injectable({
  providedIn: 'root'
})
export class BandsInTownService {

  constructor(public http : HttpClient) { }

  async getConcerts(artist : string): Promise<Concert[]> {
    let concerts : Concert[] = [];
    let x = await lastValueFrom(this.http.get<any>('https://rest.bandsintown.com/artists/' + artist + '/events?app_id=' + API_KEY));
    for (let i = 0; i < x.length; i++) {
      concerts.push(new Concert(x[i].datetime, x[i].venue.country, x[i].venue.city, x[i].venue.latitude, x[i].venue.longitude))
    }
    console.log(x);
    return concerts;
  }
}