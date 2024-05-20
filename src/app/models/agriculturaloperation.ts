import { ICrop } from "./crop";
import { IAgriculturalOperationType } from "./agriculturaloperationtype";


export interface IAgriculturalOperation {
    id: number;
    cropId: number
    crop: ICrop;
    dateOperation: Date;
    operationTypeId: number;
    operationType: IAgriculturalOperationType;
    description: string;
    is_active: boolean;
}
export class AgriculturalOperation implements IAgriculturalOperation {
    constructor(
    public id: number,
    public cropId: number,
    public crop: ICrop,
    public dateOperation: Date,
    public operationTypeId: number,
    public operationType: IAgriculturalOperationType,
    public description: string,
    public is_active: boolean
){}
}