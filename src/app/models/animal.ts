import { IPlot } from "./plot";

export interface IAnimal{
    id: number;
    nameAnimal: string;
    plotId: number;
    plot: IPlot;
    is_active:boolean;
}
export class Animal implements IAnimal{
    constructor(public id: number, public nameAnimal: string, public plotId: number,public plot:IPlot, public is_active: boolean) {}
}   