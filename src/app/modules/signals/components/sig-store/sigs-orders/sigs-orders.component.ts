import { ChangeDetectionStrategy, Component, OnInit, effect, inject } from '@angular/core';
import { SigsProductStore } from '../sigs-products/sigs-product.store';
import { SigsCartStore } from '../sigs-cart/sigs-cart.store';
import { CommonModule } from '@angular/common';
import { SigsOrderStore } from './sigs-orders.store';
import { patchState } from '@ngrx/signals';
import { SigsSharedService } from '../sigs-shared/sigs-shared.service';

@Component({
  selector: 'app-sigs-orders',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './sigs-orders.component.html',
  styleUrl: './sigs-orders.component.css'
})
export class SigsOrdersComponent implements OnInit {

  proStore = inject(SigsProductStore);
  cartStore = inject(SigsCartStore);
  orderStore = inject(SigsOrderStore);

  addON(){
    const ss = this.orderStore.orderNumber() + 1;
    patchState(this.orderStore, { orderNumber: ss })
  }

  ngOnInit() {
    console.log('Orders Comp Init')
  }

  constructor(){
    effect(() => {
      console.log('Orders Effect')
    })
  }

}
