import { DocumentData } from "firebase/firestore";

export class TemplateDataModel {
    public id: string;
    public name: string;
    public author: string;
    public preview_image: string;
    public creation_date: string;

    constructor(data: DocumentData) {
        this.id = data.id;
        this.name = data.name;
        this.author = data.author;
        this.preview_image = '/src/assets/images/site-logo.png';
        // this.preview_image = data.preview_image;
        this.creation_date = data.creation_date;
    }

}