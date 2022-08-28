export class Experiencia {
    id?: number;
    nombreE: string;
    inicio: string;
    fin: string;
    descripcionE: string;

    constructor(nombreE: string, descripcionE: string, inicio: string, fin: string){
        this.nombreE= nombreE;
        this.inicio = inicio;
        this.fin= fin;
        this.descripcionE= descripcionE;
    }
}
