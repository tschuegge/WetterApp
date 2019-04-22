import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WetterComponent } from './wetter/wetter.component';
import { WetterService } from './services/wetter.service';

@NgModule({
  declarations: [
    AppComponent,
    WetterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // HttpClientModul importieren, damit der HttpClient zur Verfügung steht
  ],
  providers: [
    WetterService // eigenen WetterService dem Provider-Array hinzufügen, damit der Injector den Service kennt
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
