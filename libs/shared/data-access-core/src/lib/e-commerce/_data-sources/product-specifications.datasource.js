// RXJS
import { debounceTime } from 'rxjs/operators';
// NGRX
import { select } from '@ngrx/store';
// MODELS
import { BaseDataSource } from '@monorepo/shared/data-access-models';
import { selectProductSpecificationsInStore, selectProductSpecificationsPageLoading, selectPSShowInitWaitingMessage } from '../_selectors/product-specification.selectors';
export class ProductSpecificationsDataSource extends BaseDataSource {
    constructor(store) {
        super();
        this.store = store;
        this.store
            .pipe(select(selectProductSpecificationsInStore), debounceTime(600))
            .subscribe((response) => {
            this.entitySubject.next(response.items);
            this.paginatorTotalSubject.next(response.totalCount);
        });
        this.isPreloadTextViewed$ = this.store.pipe(select(selectPSShowInitWaitingMessage));
        this.loading$ = this.store.pipe(select(selectProductSpecificationsPageLoading));
    }
}
//# sourceMappingURL=product-specifications.datasource.js.map