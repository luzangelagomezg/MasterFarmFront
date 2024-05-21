import { IFarmer } from "./Farmer";

export interface IFarm {

    id: number,
    farmName: string,
    farmerId: number,
    farmer: IFarmer,
    is_active: boolean
}
export class Farm implements IFarm {
    constructor(public id: number, public farmName: string, public farmerId: number, public farmer: IFarmer, public is_active: boolean) { }
}