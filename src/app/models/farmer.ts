export interface IFarmer{
    id: number,
    firstNameFarmer: string,
    lastNameFarmer: string,
    emailFarmer: string,
    phoneFarmer: string,
    addressFarmer: string,
    is_active: boolean
}
export class Farmer implements IFarmer{
    constructor(public id: number, public firstNameFarmer: string, public lastNameFarmer: string, public emailFarmer: string, public phoneFarmer: string, public addressFarmer: string, public is_active: boolean) {}
}