// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJS
import { Observable } from 'rxjs';

// MODELS
import { DataTableItemModel } from '@monorepo/shared/data-access-models';

const API_DATATABLE_URL = 'api/cars';

@Injectable()
export class DataTableService {
  /**
   * Service Constructor
   *
   * @param http: HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * Returns data from fake server
   */
  getAllItems(): Observable<DataTableItemModel[]> {
    return this.http.get<DataTableItemModel[]>(API_DATATABLE_URL);
  }
}
