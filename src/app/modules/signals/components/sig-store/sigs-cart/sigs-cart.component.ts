import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Signal, computed, effect, inject, signal } from '@angular/core';
import { SigsCartStore } from './sigs-cart.store';
import { CommonModule } from '@angular/common';
import { SigsProductStore } from '../sigs-products/sigs-product.store';
import { SigsOrderStore } from '../sigs-orders/sigs-orders.store';
import { patchState } from '@ngrx/signals';
import { SigsSharedService } from '../sigs-shared/sigs-shared.service';

@Component({
  selector: 'app-sigs-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sigs-cart.component.html',
  styleUrl: './sigs-cart.component.css',
})
export class SigsCartComponent implements OnInit {

  readonly cartStore = inject(SigsCartStore);
  orderStore = inject(SigsOrderStore);
  prodStore = inject(SigsProductStore);

  ngOnInit(): void {
    console.log('Cart Comp Init')
  }

  constructor(private cd: ChangeDetectorRef) {
    effect(() => {
      console.log('Cart Effect')
    })
  }

  addON() {
    const ss = this.orderStore.orderNumber() + 1;
    patchState(this.orderStore, { orderNumber: ss });
    this.cd.detectChanges()
  }

  getProductName = (productId: number) => {
    const product = this.prodStore.products().find(p => p.id === productId);
    return product ? product.name : 'Unknown';
  }
}
