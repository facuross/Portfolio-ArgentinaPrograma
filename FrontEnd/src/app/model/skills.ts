export class Skills {
    id?: number;
    title: string;
    percent: number;

    constructor(title: string, percent: number){
        this.title = title;
        this.percent = percent;
    }
}
