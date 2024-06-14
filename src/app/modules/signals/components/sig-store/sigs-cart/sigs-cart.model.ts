
export interface SigsCartItemModel {
    productId: number;
    quantity: number
}

export interface SigsCartModel {
    cartItems: SigsCartItemModel[];
    totalPrice: number;
}