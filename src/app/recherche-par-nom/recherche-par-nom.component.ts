import { Component, OnInit } from '@angular/core';
import { PC } from '../model/pc.model';  // Updated to reflect the correct model
import { PCService } from '../services/pc.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: []
})
export class RechercheParNomComponent implements OnInit {

  nomPC!: string;  // Change from nomProduit to nomPC
  pcs!: PC[];  // Change from produits to pcs
  allPcs!: PC[];  // Change from allProduits to allPcs
  searchTerm!: string;

  constructor(private pcService: PCService) { }

  ngOnInit(): void {
    // Fetch all PCs on initialization
    this.pcService.listePCs().subscribe(pcs => {
      console.log(pcs);
      this.pcs = pcs;
      this.allPcs = pcs;  // Store all PCs for filtering
    });
  }

  rechercherPcs() {  // Change from rechercherProds to rechercherPcs
    this.pcService.rechercherParNom(this.nomPC).subscribe(pcs => {  // Change from nomProduit to nomPC
      console.log(pcs);
      this.pcs = pcs;
    });
  }

  onKeyUp(filterText: string) {
    this.pcs = this.allPcs.filter(item =>
      item.nomPc.toLowerCase().includes(filterText));  // Change from nomProduit to nomPC
  }
}
