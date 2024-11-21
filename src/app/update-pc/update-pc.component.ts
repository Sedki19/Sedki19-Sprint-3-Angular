import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque.model';  // Updated import
import { PC } from '../model/pc.model';  // Updated import
import { PCService } from '../services/pc.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-pc',
  templateUrl: './update-pc.component.html',
  styles: []
})
export class UpdatePcComponent implements OnInit {

  currentPC = new PC();
  marques!: Marque[];
  updatedMarqueId!: number;
  myImage!: string;

  uploadedImage!: File;
  isImageUpdated: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private pcService: PCService) { }

  ngOnInit(): void {
    // Fetching the list of Marques (Categories renamed to Marque)
    this.pcService.listeMarques().
      subscribe(marques => {
        this.marques = marques._embedded.marques;  // Adjusted for marque
        console.log(marques);
      });

    // Fetching the PC by its ID from the route
    this.pcService.consulterPC(this.activatedRoute.snapshot.params['id']).
      subscribe(pc => {

        this.currentPC = pc;
        this.updatedMarqueId = pc.marque.idMarq;
        /* this.currentPC = pc;
         this.updatedMarqueId = this.currentPC.marque.idMarq;
         this.pcService
           .loadImage(this.currentPC.image.idImage)
           .subscribe((img: Image) => {
             this.myImage = 'data:' + img.type + ';base64,' + img.image;
           });*/
      });
  }

  updatePC() {
    this.currentPC.marque = this.marques.find(marque => marque.idMarq == this.updatedMarqueId)!;


    this.pcService.updatePC(this.currentPC).subscribe(pc => {
      this.router.navigate(['pcs']);  // Navigating back to the produits list
    });

    /* if (this.isImageUpdated) {
       this.pcService
         .uploadImage(this.uploadedImage, this.uploadedImage.name)
         .subscribe((img: Image) => {
           this.currentPC.image = img;
           this.pcService
             .updatePC(this.currentPC)
             .subscribe((pc) => {
               this.router.navigate(['pcs']);
             });
         });
     }
     else {
       this.pcService
         .updatePC(this.currentPC)
         .subscribe((pc) => {
           this.router.navigate(['pcs']);
         });
     }*/

  }

  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => { this.myImage = reader.result as string; };
    }
  }

  onAddImagePc() {
    this.pcService
      .uploadImagePc(this.uploadedImage,
        this.uploadedImage.name, this.currentPC.idPc)
      .subscribe((img: Image) => {
        this.currentPC.images.push(img);
      });
  }

  supprimerImage(img: Image) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.pcService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentPc.images
        const index = this.currentPC.images.indexOf(img, 0);
        if (index > -1) {
          this.currentPC.images.splice(index, 1);
        }
      });
  }

}
