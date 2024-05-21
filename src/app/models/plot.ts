import { IFarm } from "./farm";
import { IPlotType } from "./plottype";

export interface IPlot{
    id: number;
    number: string;
    farmId: number;
    farm: IFarm;
    plotTypeId: number;
    plotType:IPlotType
    is_active:boolean;
}
export class Plot implements IPlot{
    constructor(public id: number, public number: string, public farmId: number,public farm: IFarm, public plotTypeId: number,public plotType: IPlotType, public is_active: boolean) {}
}
