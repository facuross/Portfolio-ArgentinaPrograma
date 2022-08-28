export class Educacion {
    id: number;
    nombreEdu: string;
    inicio: string;
    fin: string;
    descripcionEdu: string;

    constructor(nombreEdu: string, inicio: string, fin: string, descripcionEdu: string){
        this.nombreEdu = nombreEdu;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcionEdu = descripcionEdu;
    }
}
