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
  getWetter(): Observable<Wetter> {
    return this.httpclient.get<Wetter>('https://api.apixu.com/v1/current.json?key=a8e744ad55e14df3bda82412190904&lang=de&q=Buchs');
  }
}
