import { Compagnie } from "./Compagnie.ts";
import { User } from "./User.ts";
import { CustomMap } from "./CustomMap.ts";

const user = new User();
const comp = new Compagnie();
const map = new CustomMap("map");

console.log(user);
console.log(comp);

map.addMarker(user);
map.addMarker(comp);
