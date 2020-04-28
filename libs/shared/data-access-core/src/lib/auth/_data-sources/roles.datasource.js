// NGRX
import { select } from '@ngrx/store';
// MODELS
import { BaseDataSource } from '@monorepo/shared/data-access-models';
// Selectirs
import { selectQueryResult, selectRolesPageLoading, selectRolesShowInitWaitingMessage } from '../_selectors/role.selectors';
export class RolesDataSource extends BaseDataSource {
    constructor(store) {
        super();
        this.store = store;
        this.loading$ = this.store.pipe(select(selectRolesPageLoading));
        this.isPreloadTextViewed$ = this.store.pipe(select(selectRolesShowInitWaitingMessage));
        this.store
            .pipe(select(selectQueryResult))
            .subscribe((response) => {
            this.paginatorTotalSubject.next(response.totalCount);
            this.entitySubject.next(response.items);
        });
    }
}
//# sourceMappingURL=roles.datasource.js.map