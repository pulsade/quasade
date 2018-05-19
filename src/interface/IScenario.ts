import { IEtape } from "./IEtape";

export interface IScenario{
    id:number;
    titre:string;
    etapes:IEtape[];
}