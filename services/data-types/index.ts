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
    price:number,
    onChange: ()=>void
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

export interface SigninTypes{
    email:string,
    password:string
}
export interface UserTypes{
    id: string,
    username: string,
    email: string,
    name: string,
    phoneNumber: string,
    avatar: string
}
export interface JWTPayloadTypes{
    player: UserTypes,
    iat:number
}
export interface checkoutTypes{
    voucher: string,
    nominal: string,
    payment: string,
    bank: string,
    name: string,
    accountUser: string
}

export interface historyPaymentTypes{
    bankName: string,
    name: string,
    noRekening:string,
    type:string
}
export interface historyVoucherTopupTypes{
    coinName: string,
    coinQuantity:string,
    gameName: string,
    price: number | string,
    thumbnail: string
}
export interface HistoryVoucherTopupTypes {
    category: string;
    coinName: string;
    coinQuantity: string;
    gameName: string;
    price: number;
    thumbnail: string;
}

export interface HistoryPaymentTypes {
    bankName: string;
    name: string;
    noRekening: string;
    type: string;
}

export interface HistoryTransactionTypes {
    _id: string;
    historyVoucherTopup: HistoryVoucherTopupTypes;
    value: number;
    status: string;
    accountUser: string;
    tax: number;
    name: string;
    historyPayment: HistoryPaymentTypes;
}

export interface TopUpCategoriesTypes {
    _id: string;
    value: number;
    name: string;
}
