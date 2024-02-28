
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

const API_KEY : string = "2b32475766802ac01eefda45e9e42ea0";

@Injectable({
  providedIn: 'root'
})
export class BandsInTownService {

  constructor(public http : HttpClient) { }

  async getConcerts(artist : string): Promise<string> {
    let x = await lastValueFrom(this.http.get<any>('https://rest.bandsintown.com/artists/' + artist + '/events?app_id=' + API_KEY));
    console.log(x);
    return x;
  }
}