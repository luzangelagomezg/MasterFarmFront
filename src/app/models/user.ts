import { IFarmer } from "./Farmer";

export interface IUser{
    id: number;
    userName: string;
    password: string;
    farmerId: number;
    farmer:IFarmer;
    is_active:boolean;
}
  
export class User implements IUser{
    constructor(public id: number, public userName: string, public password: string, public farmerId: number, public farmer:IFarmer, public is_active: boolean) {}
}