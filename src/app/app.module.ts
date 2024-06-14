import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SigsProductsComponent } from './modules/signals/components/sig-store/sigs-products/sigs-products.component';
import { SigsCartComponent } from './modules/signals/components/sig-store/sigs-cart/sigs-cart.component';
import { SigsOrdersComponent } from './modules/signals/components/sig-store/sigs-orders/sigs-orders.component';
import { SigsCartStore } from './modules/signals/components/sig-store/sigs-cart/sigs-cart.store';
import { SigsProductStore } from './modules/signals/components/sig-store/sigs-products/sigs-product.store';
import { SigsOrderStore } from './modules/signals/components/sig-store/sigs-orders/sigs-orders.store';
import { FormsModule } from '@angular/forms';
import { SigsSharedStore } from './modules/signals/components/sig-store/sigs-shared/sigs-shared.store';
// import { restoreState } from './modules/signals/util/state-persistence.utils';

@NgModule({
  imports: [
    BrowserModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(),
    SigsProductsComponent,
    SigsCartComponent,
    SigsOrdersComponent,
    FormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    SigsCartStore,
    SigsProductStore,
    SigsOrderStore,
    SigsSharedStore
  ]
})
export class AppModule { }


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/