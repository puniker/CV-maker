import { DocumentData } from "firebase/firestore";

interface timespamp {
    seconds: number;
    nanoseconds: number;
}

export class UserStudiesDataModel {
    public id: string;
    public order: number;
    public title: string;
    public description: string;
    public study_center: string;
    public start_date: string;
    public end_date: string;
    public place: string;
    public hide_on_cv: boolean;

    constructor(data: DocumentData) {
        this.id = data.id;
        this.order = data.order;
        this.title = data.title;
        this.description = data.description;
        this.study_center = data.study_center;
        this.start_date = data.start_date;
        this.end_date = data.end_date;
        this.place = data.place;
        this.hide_on_cv = data.hide_on_cv;
    }
}