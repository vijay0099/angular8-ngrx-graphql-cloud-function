// NGRX
import { select } from '@ngrx/store';
// MODELS
import { BaseDataSource } from '@monorepo/shared/data-access-models';
import { selectUsersInStore, selectUsersPageLoading, selectUsersShowInitWaitingMessage } from '../_selectors/user.selectors';
export class UsersDataSource extends BaseDataSource {
    constructor(store) {
        super();
        this.store = store;
        this.loading$ = this.store.pipe(select(selectUsersPageLoading));
        this.isPreloadTextViewed$ = this.store.pipe(select(selectUsersShowInitWaitingMessage));
        this.store
            .pipe(select(selectUsersInStore))
            .subscribe((response) => {
            this.paginatorTotalSubject.next(response.totalCount);
            this.entitySubject.next(response.items);
        });
    }
}
//# sourceMappingURL=users.datasource.js.map