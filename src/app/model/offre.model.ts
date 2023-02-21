import { client } from "./clients.model";
import { pack } from "./pack.model";

export class offre {

  id? : number ;
  name?: string ;
  duration? : number;
  prix? : number;
myPacks! : pack;
clients! : client ;

}
