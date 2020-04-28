import { selectProductsInitWaitingMessage } from './../_selectors/product.selectors';

// RXJS
import { delay, distinctUntilChanged } from 'rxjs/operators';

// MODELS
import {
  QueryResultsModel,
  BaseDataSource
} from '@monorepo/shared/data-access-models';

// STATE
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';

// SELECTORS
import {
  selectProductsInStore,
  selectProductsPageLoading
} from '../_selectors/product.selectors';

export class ProductsDataSource extends BaseDataSource {
  constructor(private store: Store<AppState>) {
    super();
    this.loading$ = this.store.pipe(select(selectProductsPageLoading));

    this.isPreloadTextViewed$ = this.store.pipe(
      select(selectProductsInitWaitingMessage)
    );

    this.store
      .pipe(select(selectProductsInStore))
      .subscribe((response: QueryResultsModel) => {
        this.paginatorTotalSubject.next(response.totalCount);
        this.entitySubject.next(response.items);
      });
  }
}
