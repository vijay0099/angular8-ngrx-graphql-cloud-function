// NGRX
import { select } from '@ngrx/store';
// MODELS
import { BaseDataSource } from '@monorepo/shared/data-access-models';
import { selectCustomersInStore, selectCustomersPageLoading, selectCustomersShowInitWaitingMessage } from '../_selectors/customer.selectors';
export class CustomersDataSource extends BaseDataSource {
    constructor(store) {
        super();
        this.store = store;
        this.loading$ = this.store.pipe(select(selectCustomersPageLoading));
        this.isPreloadTextViewed$ = this.store.pipe(select(selectCustomersShowInitWaitingMessage));
        this.store
            .pipe(select(selectCustomersInStore))
            .subscribe((response) => {
            this.paginatorTotalSubject.next(response.totalCount);
            this.entitySubject.next(response.items);
        });
    }
}
//# sourceMappingURL=customers.datasource.js.map