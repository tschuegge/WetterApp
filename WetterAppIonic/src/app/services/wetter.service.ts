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
    return this.httpclient.get<Wetter>('http://api.weatherstack.com/current?access_key=7063f90987c7df61318bc66e974d74ea&query=' + ort);
  }
}
