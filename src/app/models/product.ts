export interface IProduct{
    id: number;
    productTypeId: number;
    productType: string;
    name: string;
    is_active:boolean;
}
export class Product implements IProduct{
    constructor(public id: number, public productTypeId: number, public productType: string, public name: string, public is_active: boolean) {}
}