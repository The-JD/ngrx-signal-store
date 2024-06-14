import { Injectable, computed, inject } from "@angular/core";
import { SigsCartStore } from "../sigs-cart/sigs-cart.store";
import { SigsProductStore } from "../sigs-products/sigs-product.store";
import { SigsOrderStore } from "../sigs-orders/sigs-orders.store";

@Injectable({
    providedIn: 'root'
})
export class SigsSharedService {

    productStore = inject(SigsProductStore);
    cartStore = inject(SigsCartStore);
    orderStore = inject(SigsOrderStore);

    get orderNumber() {
        return computed(() =>  this.orderStore.orderNumber())
    }

    get totalPrice() {
        return computed(() =>  this.orderStore.orderNumber())
    }



}