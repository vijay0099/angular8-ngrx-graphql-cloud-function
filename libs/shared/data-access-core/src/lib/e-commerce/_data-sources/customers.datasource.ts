import { mergeMap, tap } from 'rxjs/operators';
// RXJS
import {
  delay,
  distinctUntilChanged,
  skip,
  filter,
  take,
  map
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
  selectCustomersInStore,
  selectCustomersPageLoading,
  selectCustomersShowInitWaitingMessage
} from '../_selectors/customer.selectors';

export class CustomersDataSource extends BaseDataSource {
  constructor(private store: Store<AppState>) {
    super();

    this.loading$ = this.store.pipe(select(selectCustomersPageLoading));

    this.isPreloadTextViewed$ = this.store.pipe(
      select(selectCustomersShowInitWaitingMessage)
    );

    this.store
      .pipe(select(selectCustomersInStore))
      .subscribe((response: QueryResultsModel) => {
        this.paginatorTotalSubject.next(response.totalCount);
        this.entitySubject.next(response.items);
      });
  }
}
