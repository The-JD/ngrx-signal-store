import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { SigsCartItemModel } from './sigs-cart.model';
import { withDevtools, withStorageSync } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { SigsProductStore } from '../sigs-products/sigs-product.store';
import { SigsProductService } from '../sigs-products/sigs-product.service';

export type SigsCartState = {
    cartItems: any[];
    totalPrice: number,
    isUpdated: boolean
    copyProducts: any[]
};

const initialSigsCartState: SigsCartState = {
    cartItems: [],
    copyProducts: [],
    totalPrice: 0,
    isUpdated: false
};


export const SigsCartStore = signalStore(
    { providedIn: 'root' },
    withDevtools('cart'),
    withState(initialSigsCartState),
    // withStorageSync('sigsCartState'), // To enable local storage
    withMethods(() => {
        const prodService = inject(SigsProductService);
        return {
            copyProducts: computed(() => prodService.productsList())


        }
    })


);