import { IPlot } from "./IPlot";

export interface IEtape{
    id:number;
    titre:string;
    plots:IPlot[];
}