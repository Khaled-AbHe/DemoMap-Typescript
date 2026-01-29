import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Compagnie implements Mappable {
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

    markerContent(): string {
        return `
            <h1>Company: ${this.name}</h1>
            <h2>Catchphrase: ${this.catchphrase}</h2>
        `
    }
};