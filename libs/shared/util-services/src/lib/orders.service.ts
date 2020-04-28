// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// SERVICES
import { HttpUtilsService } from './http-utils.service';

const API_ORDERS_URL = 'api/orders';

@Injectable()
export class OrdersService {
  httpOptions = this.httpUtils.getHTTPHeaders();

  constructor(private http: HttpClient, private httpUtils: HttpUtilsService) {}

  // CREATE
  // READ
  // UPDATE
  // DELETE
}
