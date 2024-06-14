import { Injectable, Signal, computed, effect, inject, signal } from "@angular/core";
import { SigsProductStore } from "../sigs-products/sigs-product.store";
import { SigsCartStore } from "./sigs-cart.store";
import { patchState } from "@ngrx/signals";
import { SigsCartItemModel } from "./sigs-cart.model";
import { SigsOrderService } from "../sigs-orders/sigs-order.service";
import { SigsOrderStore } from "../sigs-orders/sigs-orders.store";

@Injectable({
    providedIn: 'root'
})
export class SigsCartService {

    private readonly _cart = signal<SigsCartItemModel[]>([]);

    cartData: Signal<SigsCartItemModel[]> = this._cart;

    readonly productStore = inject(SigsProductStore);
    readonly cartStore = inject(SigsCartStore);
    readonly orderStore = inject(SigsOrderStore);


    constructor() {
        effect(() => {
        })
    }

    get totalPriceSignal() {
        const tps = computed(() =>
            this.cartStore.cartItems().reduce((total, item) => {
                const product = this.productStore.products().find(p => p.id === item.productId);
                return total + (product ? product.price * item.quantity : 0);
            }, 0)
        );
        // patchState(this.cartStore, { totalPrice: tps() })
        return tps;
    }

    addToCart(productId: number, quantity: number) {
        this._cart.update(cart => {
            const existingItem = cart.find(item => item.productId === productId);
            if (existingItem) {
                return cart.map(item =>
                    item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...cart, { productId, quantity }];
            }
        });

        const total = this.cartData().reduce((total, item) => {
            console.log('calculation total of: ', this.cartData())
            const product = this.productStore.products().find(p => p.id === item.productId);
            return total + (product ? product.price * item.quantity : 0);
        }, 0)
        patchState(this.cartStore, { cartItems: this.cartData() })
        patchState(this.cartStore, { totalPrice: total })
        console.log('Cart State Patched')
        // this.totalPriceSignal();
    }

    removeFromCart(productId: number, quantity: number) {
        this._cart.update(cart => {
            const existingItem = cart.find(item => item.productId === productId);
            if (existingItem) {
                const newQuantity = existingItem.quantity - quantity;
                if (newQuantity > 0) {
                    return cart.map(item =>
                        item.productId === productId ? { ...item, quantity: newQuantity } : item
                    );
                } else {
                    return cart.filter(item => item.productId !== productId);
                }
            } else {
                return cart;
            }
        });
        patchState(this.cartStore, { cartItems: this._cart as any })
    }

    getProductName = (productId: number) => {
        const product = this.productStore.products().find(p => p.id === productId);
        return product ? product.name : 'Unknown';
    }

}