import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandsInTownService } from '../services/bandsInTown.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  artist : string | null = null;

  constructor(public route : ActivatedRoute, public bandsInTown : BandsInTownService) { }

  ngOnInit() {
    this.artist = this.route.snapshot.paramMap.get("artist");
    if (this.artist != null) {
      this.bandsInTown.getConcerts(this.artist);
    }
  }
}
