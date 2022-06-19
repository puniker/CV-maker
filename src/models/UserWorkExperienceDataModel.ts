import { DocumentData } from "firebase/firestore";

interface timespamp {
    seconds: number;
    nanoseconds: number;
}

export class UserWorkExperienceDataModel {
    public id: string;
    public order: number;
    public position: string;
    public business: string;
    public place: string;
    public start_date: string;
    public end_date: string;
    public description: string;
    public hide_on_cv: boolean;

    constructor(data: DocumentData) {
        this.id = data.id;
        this.order = data.order;
        this.position = data.position;
        this.description = data.description;
        this.business = data.business;
        this.start_date = data.start_date;
        this.end_date = data.end_date;
        this.place = data.place;
        this.hide_on_cv = data.hide_on_cv;
    }
}