import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { ShowComponent } from './show/show.component';
import { SongComponent } from './song/song.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

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
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    RouterModule,
    RouterModule.forRoot([
      {path: "", redirectTo: "/artist", pathMatch: "full"},
      {path: "artist", component: ArtistComponent},
      {path: "song/:albumID", component: SongComponent},
      {path: "album/:artistID", component: AlbumComponent},
      {path: "show/:artist", component: ShowComponent}
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http : HttpClient) {
  return new TranslateHttpLoader(http);
}
