import { IPlot } from "./plot";

export interface ICrop{
    id: number;
    name: string;
    description: string;
    harvestDays: string;
    plotId: number;
    plot: IPlot;
    is_active:boolean;
}

export class Crop implements ICrop{
    constructor(public id: number, public name: string, public description: string, public harvestDays: string, public plotId: number,public plot:IPlot, public is_active: boolean) {}
}