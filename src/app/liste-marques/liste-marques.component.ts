import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { PCService } from '../services/pc.service';

@Component({
  selector: 'app-liste-marques',
  templateUrl: './liste-marques.component.html',
  styles: [
  ]
})
export class ListeMarquesComponent implements OnInit {

  marques!: Marque[];

  ajout: boolean = true;

  updatedMarq: Marque = { "idMarq": 0, "nomMarq": "", "descriptionMarq": "" };

  constructor(private pcService: PCService) { }

  ngOnInit(): void {
    this.chargerMarques();
  }

  chargerMarques() {
    this.pcService.listeMarques()
      .subscribe(marqs => {
        this.marques = marqs._embedded.marques;
        console.log(marqs);
      });
  }

  marqueUpdated(marq: Marque) {
    console.log("Marque reçue du composant updateMarque ", marq);
    this.pcService.ajouterMarque(marq).subscribe(() => this.chargerMarques());
  }

  updateMarq(marq: Marque) {
    this.updatedMarq = marq;
    this.ajout = false;
  }
}
