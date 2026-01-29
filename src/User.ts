import { faker} from "@faker-js/faker"
import { Mappable } from "./CustomMap";

export class User implements Mappable {
    name:String;
    location: {
        lat:number,
        lon:number
    }

    constructor(){
        this.name = faker.name.fullName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lon: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `<p>Username: ${this.name}</p>`
    }
}