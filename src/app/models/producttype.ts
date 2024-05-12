export interface IProductType {
    id: number;
    productType: string;
    is_active:boolean
}

export class ProductType implements IProductType {
    constructor(public id: number, public productType: string, public is_active: boolean) {}
}