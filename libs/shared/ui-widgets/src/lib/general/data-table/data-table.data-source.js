// RXJS
import { BehaviorSubject, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
// MODELS
import { QueryResultsModel, HttpExtenstionsModel } from '@monorepo/shared/data-access-models';
// Why not use MatTableDataSource?
/*  In this example, we will not be using the built-in MatTableDataSource because its designed for filtering,
    sorting and pagination of a client - side data array.
    Read the article: 'https://blog.angular-university.io/angular-material-data-table/'
**/
export class DataTableDataSource {
    /**
     * Data-Source Constructor
     *
     * @param dataTableService: DataTableService
     */
    constructor(dataTableService) {
        this.dataTableService = dataTableService;
        // Public properties
        this.entitySubject = new BehaviorSubject([]);
        this.hasItems = false; // Need to show message: 'No records found
        // Loading | Progress bar
        this.loadingSubject = new BehaviorSubject(false);
        // Paginator | Paginators count
        this.paginatorTotalSubject = new BehaviorSubject(0);
        this.loading$ = this.loadingSubject.asObservable();
        this.paginatorTotal$ = this.paginatorTotalSubject.asObservable();
        this.paginatorTotal$.subscribe(res => (this.hasItems = res > 0));
    }
    /**
     * Connect data-source
     *
     * @param collectionViewer: CollectionViewer
     */
    connect(collectionViewer) {
        // Connecting data source
        return this.entitySubject.asObservable();
    }
    /**
     * Disconnect data-source
     *
     * @param collectionViewer: CollectionViewer
     */
    disconnect(collectionViewer) {
        // Disonnecting data source
        this.entitySubject.complete();
        this.loadingSubject.complete();
        this.paginatorTotalSubject.complete();
    }
    baseFilter(_entities, _queryParams) {
        let entitiesResult = _entities;
        // Sorting
        // start
        if (_queryParams.sortField) {
            entitiesResult = this.sortArray(_entities, _queryParams.sortField, _queryParams.sortOrder);
        }
        // end
        // Paginator
        // start
        const totalCount = entitiesResult.length;
        const initialPos = _queryParams.pageNumber * _queryParams.pageSize;
        entitiesResult = entitiesResult.slice(initialPos, initialPos + _queryParams.pageSize);
        // end
        const queryResults = new QueryResultsModel();
        queryResults.items = entitiesResult;
        queryResults.totalCount = totalCount;
        return queryResults;
    }
    loadItems(queryParams) {
        this.loadingSubject.next(true);
        this.dataTableService
            .getAllItems()
            .pipe(tap(res => {
            const result = this.baseFilter(res, queryParams);
            this.entitySubject.next(result.items);
            this.paginatorTotalSubject.next(result.totalCount);
        }), catchError(err => of(new QueryResultsModel([], err))), finalize(() => this.loadingSubject.next(false)))
            .subscribe();
    }
    sortArray(_incomingArray, _sortField = '', _sortOrder = 'asc') {
        const httpExtenstion = new HttpExtenstionsModel();
        return httpExtenstion.sortArray(_incomingArray, _sortField, _sortOrder);
    }
}
//# sourceMappingURL=data-table.data-source.js.map