export interface IPlotType{
    id: number;
    plotType: string;
    is_active:boolean;
}
export class PlotType implements IPlotType{
    constructor(public id: number, public plotType: string, public is_active: boolean) {}
}