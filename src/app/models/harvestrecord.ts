import { IAgriculturalOperation } from "./agriculturaloperation";
import { IProduct } from "./product";

export interface IHarvestRecord{
    id: number;
    operationId: number;
    operation: IAgriculturalOperation;
    productId: number;
    product: IProduct;
    quantity: number;
    is_active:boolean;
}
export class HarvestRecord implements IHarvestRecord{
    constructor(public id: number, public operationId: number, public operation: IAgriculturalOperation, public productId: number, public product: IProduct, public quantity: number, public is_active: boolean) {}
}