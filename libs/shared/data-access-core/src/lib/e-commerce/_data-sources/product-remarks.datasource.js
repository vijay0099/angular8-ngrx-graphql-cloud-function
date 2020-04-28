// RXJS
import { debounceTime } from 'rxjs/operators';
// NGRX
import { select } from '@ngrx/store';
// MODELS
import { BaseDataSource } from '@monorepo/shared/data-access-models';
import { selectProductRemarksInStore, selectProductRemarksPageLoading, selectPRShowInitWaitingMessage } from '../_selectors/product-remark.selectors';
export class ProductRemarksDataSource extends BaseDataSource {
    constructor(store) {
        super();
        this.store = store;
        this.store
            .pipe(select(selectProductRemarksInStore), debounceTime(600))
            .subscribe((response) => {
            this.entitySubject.next(response.items);
            this.paginatorTotalSubject.next(response.totalCount);
        });
        this.isPreloadTextViewed$ = this.store.pipe(select(selectPRShowInitWaitingMessage));
        this.loading$ = this.store.pipe(select(selectProductRemarksPageLoading));
    }
}
//# sourceMappingURL=product-remarks.datasource.js.map