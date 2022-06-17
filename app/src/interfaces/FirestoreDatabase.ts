interface timespamp {
    seconds: number;
    nanoseconds: number;
}

export interface FirestoreGeneralDataInterface{
    birth_date: timespamp;
    c_postal: number;
    city: string;
    description: string;
    direccion: string;
    email: string;
    estado_civil: string;
    gender: string;
    name: string;
    nationality: string;
    place_of_birth: string;
    surname: string;
    telefono: number;
    website: string;
}