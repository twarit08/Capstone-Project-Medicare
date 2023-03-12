import { ProductQuantity } from "./product-quantity";

export class OrderSummary {
    oid!: number;
    username!: string;
    firstName!: string;
    lastName!: string;
    address!: string;
    district!: string;
    pinCode!: number;
    state!: string;
    contact!: string;
    paidAmount!: number;
    paymentMode!: string;
    status!: string;
    date!: string;
    products: ProductQuantity[] = [];
}