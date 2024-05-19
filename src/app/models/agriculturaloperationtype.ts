export interface IAgriculturalOperationType {
    id: number;
    type: string;
    is_active: boolean;
}

export class AgriculturalOperationType implements IAgriculturalOperationType {
    constructor(public id: number, public type: string, public is_active: boolean) {}
}