// RXJS
import { BehaviorSubject, of } from 'rxjs';
import { skip, distinctUntilChanged } from 'rxjs/operators';
// MODELS
import { HttpExtenstionsModel } from './http-extentsions-model';
// Why not use MatTableDataSource?
/*  In this example, we will not be using the built-in MatTableDataSource because its designed for filtering,
    sorting and pagination of a client - side data array.
    Read the article: 'https://blog.angular-university.io/angular-material-data-table/'
**/
export class BaseDataSource {
    constructor() {
        this.entitySubject = new BehaviorSubject([]);
        this.hasItems = true; // Need to show message: 'No records found'
        this.isPreloadTextViewed$ = of(true);
        // Paginator | Paginators count
        this.paginatorTotalSubject = new BehaviorSubject(0);
        this.subscriptions = [];
        this.paginatorTotal$ = this.paginatorTotalSubject.asObservable();
        // subscribe hasItems to (entitySubject.length==0)
        const hasItemsSubscription = this.paginatorTotal$
            .pipe(distinctUntilChanged(), skip(1))
            .subscribe(res => (this.hasItems = res > 0));
        this.subscriptions.push(hasItemsSubscription);
    }
    connect(collectionViewer) {
        // Connecting data source
        return this.entitySubject.asObservable();
    }
    disconnect(collectionViewer) {
        // Disonnecting data source
        this.entitySubject.complete();
        this.paginatorTotalSubject.complete();
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    baseFilter(_entities, _queryParams, _filtrationFields = []) {
        const httpExtention = new HttpExtenstionsModel();
        return httpExtention.baseFilter(_entities, _queryParams, _filtrationFields);
    }
    sortArray(_incomingArray, _sortField = '', _sortOrder = 'asc') {
        const httpExtention = new HttpExtenstionsModel();
        return httpExtention.sortArray(_incomingArray, _sortField, _sortOrder);
    }
    searchInArray(_incomingArray, _queryObj, _filtrationFields = []) {
        const httpExtention = new HttpExtenstionsModel();
        return httpExtention.searchInArray(_incomingArray, _queryObj, _filtrationFields);
    }
}
//# sourceMappingURL=_base.datasource.js.map