export class Skills {
    id?: number;
    title: string;
    percent: number;
    img: string;

    constructor(title: string, percent: number, img: string){
        this.title = title;
        this.percent = percent;
        this.img = img;
    }
}
