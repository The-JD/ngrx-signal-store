
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { SigsProductModel } from './sigs-products.model';
import { withDevtools, withStorageSync } from '@angular-architects/ngrx-toolkit';
import { filter } from 'rxjs';

type SigsProductState = { products: SigsProductModel[], cartList: SigsProductModel[], totalPrice: number };

export const initialSigsProductState: SigsProductState = {
    products: [],
    cartList: [],
    totalPrice: 0
}

export const SigsProductStore = signalStore(
    { providedIn: 'root' },
    withDevtools('products'),
    withState(initialSigsProductState),
    // withStorageSync('sigsProductState'),
    withMethods((store) => ({
        updateQuery(query: string): void {
            const filterd = store.products().filter(x => x.name.includes(query))
            console.log('filterd: ', filterd)
            patchState(store, (state) => ({ products: filterd }));
        }
    }))
);
