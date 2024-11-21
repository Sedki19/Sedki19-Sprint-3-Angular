import { Marque } from "./marque.model";
import { Image } from "./image.model";

export class PC {
    idPc!: number;
    nomPc!: string;
    prixPc!: number;
    specs!: string;
    marque!: Marque;
    image!: Image;
    imageStr!: string;

    images!: Image[];

}
