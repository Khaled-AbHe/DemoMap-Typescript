import { faker } from "@faker-js/faker"

export class Compangnie {
    name:string;
    catchphrase:string;
    location: {
        lat:number;
        lon:number;
    };

    constructor() {
        this.name = faker.company.name();
        this.catchphrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lon: parseFloat(faker.address.longitude()),
        };
    };

};