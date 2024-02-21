import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { ShowComponent } from './show/show.component';
import { SongComponent } from './song/song.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
