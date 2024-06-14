import { Component, HostListener, inject } from '@angular/core';
import { SigsSharedStore } from './modules/signals/components/sig-store/sigs-shared/sigs-shared.store';
import { patchState } from '@ngrx/signals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  sharedStore = inject(SigsSharedStore);

  toggleLoader() {
    patchState(this.sharedStore, { isLoading: !this.sharedStore.isLoading() })
  }

  onError() {
    patchState(this.sharedStore, { error: [{ title: 'Error Title', code: 200, message: 'Error Message' }] })
  }

  clear() {
    patchState(this.sharedStore, { error: [] })
  }

  clearLocalStore() {
    localStorage.removeItem('sigsOrderState');
    localStorage.removeItem('sigsCartState');
    localStorage.removeItem('sigsProductState');
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/