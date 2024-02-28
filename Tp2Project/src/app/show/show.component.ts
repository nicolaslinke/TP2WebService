import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandsInTownService } from '../services/bandsInTown.service';
import { Concert } from '../models/concert';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  artist : string | null = null;

  concerts : Concert[] | null = null;

  constructor(public route : ActivatedRoute, public bandsInTown : BandsInTownService) { }

  center : google.maps.LatLngLiteral = {lat: 42, lng: -4};
  zoom : number = 5;
  markerPositions : google.maps.LatLngLiteral[] = [];

  async ngOnInit() {
    this.artist = this.route.snapshot.paramMap.get("artist");
    if (this.artist != null) {
      this.concerts = await this.bandsInTown.getConcerts(this.artist);
      console.log(this.concerts);
      for (let i = 0; i < this.concerts.length; i++) {
        this.markerPositions.push({lat: this.concerts[i].latitude, lng : this.concerts[i].longitude});
      }
    }
  }
}
