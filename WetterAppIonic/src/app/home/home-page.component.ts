import { Component, OnInit } from '@angular/core';
import { WetterService } from '../services/wetter.service';
import { Wetter } from '../models/wetter';

@Component({
  selector: 'app-home',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  ort = 'Buchs';
  wetter: Wetter | null = null;
  fehler: string | null = null;
  isLoading = false;

  constructor(
    private wetterService: WetterService
  ) { }

  /**
   * Beim Initialisieren der Seite den letzten Ort aus dem LocalStorage laden und Ansicht aktualisieren
   */
  ngOnInit(): void {

    // Ort aus dem LocalStorage laden, sofern vorhanden
    if (localStorage && localStorage.getItem('wetterapp-city')) {
      const ort = localStorage.getItem('wetterapp-city');
      if (ort != null) {
        this.ort = ort;
      }
    }

    this.aktualisiereAnsicht();
  }

  /**
   * Aktualisiert das Wetter auf der Ansicht
   */
  aktualisiereAnsicht() {

    // Falls Fehler angezeigt wird, diesen zurücksetzen
    this.fehler = null;

    // Neuer Ort im LocalStorage speichern, sofern LocalStorage vorhanden
    if (localStorage) {
      localStorage.setItem('wetterapp-city', this.ort);
    }

    // Ladeindikator anzeigen
    this.isLoading = true;

    // Wetter laden
    this.wetterService.getWetter(this.ort).subscribe(

      // Erfolgsfall
      wetter => {
        this.wetter = wetter;
        this.isLoading = false; // Ladeindikator ausblenden
      },

      // Fehlerfall
      fehler => {
        this.fehler = fehler.message;
        this.isLoading = false; // Ladeindikator ausblenden
      },
    );
  }

}
