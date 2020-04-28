import { CustomersTable } from './customers.table';
import { CarsTable } from './cars.table';
import { RemarksTable } from './remarks.table';
import { CarSpecificationsTable } from './car-specifications.table';
import { OrdersTable } from './orders.table';
// Wrapper class
export class ECommerceDataContext {
}
ECommerceDataContext.customers = CustomersTable.customers;
ECommerceDataContext.cars = CarsTable.cars;
// e-commerce car remarks
// one => many relations
ECommerceDataContext.remarks = RemarksTable.remarks;
// e-commerce car specifications
// one => many relations
ECommerceDataContext.carSpecs = CarSpecificationsTable.carSpecifications;
ECommerceDataContext.orders = OrdersTable.orders;
//# sourceMappingURL=_e-commerce.data-context.js.map