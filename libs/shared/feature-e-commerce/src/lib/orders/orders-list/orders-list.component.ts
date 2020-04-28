// ANGULAR
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'monorepo-orders-list',
	templateUrl: './orders-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersListComponent { }
