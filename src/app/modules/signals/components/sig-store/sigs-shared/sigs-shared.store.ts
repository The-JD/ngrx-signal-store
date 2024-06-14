
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { withDevtools, withStorageSync } from '@angular-architects/ngrx-toolkit';
import { filter } from 'rxjs';

interface ErrorModel {
    title: string;
    message: string;
    code: number;
}

type SigsSharedState = {
    isLoading: boolean,
    error?: ErrorModel[]
};

export const initialSigsSharedState: SigsSharedState = {
    isLoading: false,
    error: []
}

export const SigsSharedStore = signalStore(
    { providedIn: 'root' },
    withDevtools('shared'),
    withState(initialSigsSharedState),
    // withStorageSync('sigsSharedState')
);
