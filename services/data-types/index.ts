export interface CategoryTypes{
    _id:string,
    name:string,
    __v:number
}
export interface GameItemTypes{
    _id: string,
    name: string,
    status:string,
    thumbnail:string,
    category: CategoryTypes
}

export interface NominalItemTypes{
    _id:string,
    coinName: string,
    coinQuantity: number,
    price:number
}
export interface BankTypes{
    map: any;
    _id:string,
    name:string,
    noRekening: number,
    bankName:string
}
export interface PaymentItemTypes{
    _id:string,
    type:string
    banks: BankTypes[]
}