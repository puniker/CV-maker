import { DocumentData } from "firebase/firestore";
import { FirestoreGeneralDataInterface } from "../interfaces/FirestoreDatabase";

interface timespamp {
    seconds: number;
    nanoseconds: number;
}

export class UserGeneralDataModel {
    public name: string;
    public surname: string;
    public telefono: number;
    public email: string;
    public birth_date: string;
    public gender: string;
    public description: string;
    public c_postal: number;
    public city: string;
    public direccion: string;
    public estado_civil: string;
    public nationality: string;
    public place_of_birth: string;
    public website?: string;
    public twitter?: string;
    public linkedIn?: string;

    constructor(data: DocumentData) {
        this.name = data.name;
        this.surname = data.surname;
        this.telefono = data.telefono;
        this.email = data.email;
        this.birth_date =  data.birth_date;
        this.gender = data.gender;
        this.description = data.description;
        this.c_postal = data.c_postal;
        this.city = data.city;
        this.direccion = data.direccion;
        this.estado_civil = data.estado_civil;
        this.nationality = data.nationality;
        this.place_of_birth = data.place_of_birth;
        this.website = data.website;
        this.twitter = data.twitter;
        this.linkedIn = data.linkedIn;
    }
}