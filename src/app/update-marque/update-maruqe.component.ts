import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marque } from '../model/marque.model';  // Changed Categorie to Marque

@Component({
  selector: 'app-update-marque',  // Changed from UpdateCategorie to UpdateMarque
  templateUrl: './update-marque.component.html',  // Changed from update-categorie.component.html to update-marque.component.html
  styles: []
})
export class UpdateMarqueComponent implements OnInit {  // Changed class name from UpdateCategorieComponent to UpdateMarqueComponent

  @Input()
  marque!: Marque;  // Changed from categorie to marque

  @Input()
  ajout!: boolean;

  @Output()
  marqueUpdated = new EventEmitter<Marque>();  // Changed from categorieUpdated to marqueUpdated

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateMarque ", this.marque);  // Changed from UpdateCategorie to UpdateMarque
  }

  saveMarque() {  // Changed from saveCategorie to saveMarque
    this.marqueUpdated.emit(this.marque);  // Changed from categorieUpdated.emit to marqueUpdated.emit
  }
}
