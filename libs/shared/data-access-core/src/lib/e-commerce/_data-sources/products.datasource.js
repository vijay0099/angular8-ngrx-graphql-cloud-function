import { selectProductsInitWaitingMessage } from './../_selectors/product.selectors';
// MODELS
import { BaseDataSource } from '@monorepo/shared/data-access-models';
// STATE
import { select } from '@ngrx/store';
// SELECTORS
import { selectProductsInStore, selectProductsPageLoading } from '../_selectors/product.selectors';
export class ProductsDataSource extends BaseDataSource {
    constructor(store) {
        super();
        this.store = store;
        this.loading$ = this.store.pipe(select(selectProductsPageLoading));
        this.isPreloadTextViewed$ = this.store.pipe(select(selectProductsInitWaitingMessage));
        this.store
            .pipe(select(selectProductsInStore))
            .subscribe((response) => {
            this.paginatorTotalSubject.next(response.totalCount);
            this.entitySubject.next(response.items);
        });
    }
}
//# sourceMappingURL=products.datasource.js.map