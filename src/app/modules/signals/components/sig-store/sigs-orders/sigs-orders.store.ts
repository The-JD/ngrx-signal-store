import { signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
// import { SigsCartItemModel } from './sigs-cart.model';
import { withDevtools, withStorageSync } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { SigsProductStore } from '../sigs-products/sigs-product.store';


type SigsOrderState = {
    orderNumber: number
};

const initialSigsOrderState: SigsOrderState = {
    orderNumber: 0
};


export const SigsOrderStore = signalStore(
    { providedIn: 'root' },
    withDevtools('orders'),
    withState(initialSigsOrderState),
    withStorageSync('sigsOrderState'),
    withHooks({
        onInit() {
            console.log('os init')
        },
        onDestroy() {
            console.log('os destroy')
        }
    })
);