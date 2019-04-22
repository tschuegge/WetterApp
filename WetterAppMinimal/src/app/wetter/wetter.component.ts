import { Component, OnInit } from '@angular/core';
import { WetterService } from '../services/wetter.service';
import { Wetter } from '../models/wetter';

@Component({
  selector: 'app-wetter',
  templateUrl: './wetter.component.html'
})
export class WetterComponent implements OnInit {

  wetter: Wetter;
  fehler: string;

  constructor(
    private wetterService: WetterService // WetterService injecten (verfügbar weil er dem Provider-Array im AppModule hinzugefügt wurde)
  ) { }

  ngOnInit() {

    // keine zeitintensiven Operationen im Constructor, daher immer bei ngOnInit()!
    this.wetterService.getWetter().subscribe(

      // Erfolgsfall
      wetter => this.wetter = wetter, // geladenes Wetter der Instanzvariable zuweisen, damit diese im Template verwendet werden kann

      // Fehlerfall
      error => this.fehler = error.message // im Fehlerfall die Fehlermeldung ausgeben
    );
  }

}
