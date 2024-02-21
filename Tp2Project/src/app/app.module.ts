import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { ShowComponent } from './show/show.component';
import { SongComponent } from './song/song.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [				
    AppComponent,
      ArtistComponent,
      AlbumComponent,
      ShowComponent,
      SongComponent
   ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      {path: "", redirectTo: "/artist", pathMatch: "full"},
      {path: "artist", component: ArtistComponent},
      {path: "song", component: SongComponent},
      {path: "album", component: AlbumComponent},
      {path: "show", component: ShowComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
