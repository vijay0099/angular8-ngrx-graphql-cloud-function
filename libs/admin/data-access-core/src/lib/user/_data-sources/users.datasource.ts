// RXJS
import { of } from 'rxjs';
import {
  catchError,
  finalize,
  tap,
  debounceTime,
  delay,
  distinctUntilChanged
} from 'rxjs/operators';

// NGRX
import { Store, select } from '@ngrx/store';

// MODELS
import {
  BaseDataSource,
  QueryResultsModel
} from '@monorepo/shared/data-access-models';

// STATE
import { AppState } from '../../reducers';

import {
  selectUsersInStore,
  selectUsersPageLoading,
  selectUsersShowInitWaitingMessage
} from '../_selectors/user.selectors';

export class UsersDataSource extends BaseDataSource {
  constructor(private store: Store<AppState>) {
    super();

    this.loading$ = this.store.pipe(select(selectUsersPageLoading));

    this.isPreloadTextViewed$ = this.store.pipe(
      select(selectUsersShowInitWaitingMessage)
    );

    this.store
      .pipe(select(selectUsersInStore))
      .subscribe((response: QueryResultsModel) => {
        this.paginatorTotalSubject.next(response.totalCount);
        this.entitySubject.next(response.items);
      });
  }
}
