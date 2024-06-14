// signal-r.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
// import { Subject } from 'rxjs';
// import { initialState } from 'src/app/store/counter.reducer';
// import { CartStore, initialCartState } from '../store/cart.store';
// import { CartItem } from '../store/cart.state';
import { patchState } from '@ngrx/signals';
import { Observable, map, of } from 'rxjs';
import { dummyProducts } from './sigs-products.model';
import { SigsProductStore } from './sigs-product.store';

@Injectable({
    providedIn: 'root',
})
export class SigsProductService {

    private dataUrl = 'assets/items.json'
    productStore = inject(SigsProductStore);

    constructor(private httpClient: HttpClient) { }

    fetchProductsList(pageNumber: number, pageSize: number) {
        // return this.httpClient.get<any[]>(this.dataUrl).pipe(
        //     map(data => {
        const products = dummyProducts;
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const prods = (products.slice(startIndex, endIndex));
        const updatedList = [...this.productStore.products(), ...prods];
        patchState(this.productStore, { products: updatedList });
        // }
        // ))
    }

    get productsList() {
        return this.productStore.products;
    }
}
