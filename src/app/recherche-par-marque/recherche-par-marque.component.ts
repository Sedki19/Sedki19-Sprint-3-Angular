import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { PC } from '../model/pc.model';
import { PCService } from '../services/pc.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: [
  ]
})
export class RechercheParMarqueComponent implements OnInit {
  IdMarque!: number;
  marques!: Marque[];  // Changed from Categorie to Marque
  pcs!: PC[];  // Changed from Produit to PC

  constructor(private pcService: PCService) { }

  ngOnInit(): void {
    this.pcService.listeMarques().subscribe(marquesData => {
      this.marques = marquesData._embedded.marques;  // Updated to use marques
      console.log(marquesData);
    });
  }

  onChange() {
    this.pcService.rechercherParMarque(this.IdMarque).subscribe(pcsData => {
      this.pcs = pcsData;  // Updated to handle PCs
    });
  }
}
