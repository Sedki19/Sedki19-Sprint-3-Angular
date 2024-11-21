import { Component, OnInit } from '@angular/core';
import { PC } from '../model/pc.model';
import { AuthService } from '../services/auth.service';
import { PCService } from '../services/pc.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-pcs',
  templateUrl: './pcs.component.html'
})
export class PCsComponent implements OnInit {

  pcs?: PC[]; // an array of PCs
  src = "{{pc.imageStr}}";
  apiurl: string = 'http://localhost:8080/pcs/api';


  constructor(private pcService: PCService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.chargerPCs();
  }

  chargerPCs() {
    this.pcService.listePCs().subscribe(pcs => {
      this.pcs = pcs;
    });
  }

  supprimerPC(pc: PC) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.pcService.supprimerPC(pc.idPc).subscribe(() => {
        console.log("PC supprimé");
        this.chargerPCs();
      });
  }
}
