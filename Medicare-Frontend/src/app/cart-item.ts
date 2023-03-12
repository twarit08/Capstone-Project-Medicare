import { Product } from "./product";

export class CartItem {
    pid!: number;
    name!: string;
    brand!: string;
    price!: number;
    img!: any;
    quantity!: number;

    constructor(product: Product) {
        this.pid = product.pid;
        this.name = product.name;
        this.brand = product.brand;
        this.price = product.price;
        this.img = product.img;
        this.quantity = 1;
    }
}