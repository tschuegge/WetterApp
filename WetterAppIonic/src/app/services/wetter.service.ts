import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wetter } from '../models/wetter';

@Injectable({
  providedIn: 'root'
})
export class WetterService {

  constructor(
    private httpclient: HttpClient // HttpClient injecten (verfügbar weil HttpClientModule im AppModule importiert wurde)
  ) { }

  /**
   * Lädt das Wetter für Buchs und gibt dieses ab Observable zurück
   */
  getWetter(ort: string): Observable<Wetter> {
    return this.httpclient.get<Wetter>('https://api.openweathermap.org/data/2.5/weather?appid=3d37b0aa0b8e383968a3a8243d954202&lang=de&units=metric&q=' + ort);
  }
}
