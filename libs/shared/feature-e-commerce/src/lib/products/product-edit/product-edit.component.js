import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e, _f;
// ANGULAR
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
// MATERIAL
import { MatDialog } from '@angular/material';
// RXJS
import { BehaviorSubject, of } from 'rxjs';
import { map, startWith, delay } from 'rxjs/operators';
// NGRX
import { Store, select } from '@ngrx/store';
// CORE
import { 
// E-COMMERCE
selectLastCreatedProductId, selectProductById, ProductOnServerCreated, ProductUpdated } from '@monorepo/shared/data-access-core';
// SERVICES
import { SubheaderService, LayoutConfigService } from '@monorepo/shared/util-services';
// MODELS
import { ProductModel } from '@monorepo/shared/data-access-models';
// SERVICES
import { ProductsService, LayoutUtilsService, TypesUtilsService, MessageType } from '@monorepo/shared/util-services';
const AVAILABLE_COLORS = [
    'Red',
    'CadetBlue',
    'Gold',
    'LightSlateGrey',
    'RoyalBlue',
    'Crimson',
    'Blue',
    'Sienna',
    'Indigo',
    'Green',
    'Violet',
    'GoldenRod',
    'OrangeRed',
    'Khaki',
    'Teal',
    'Purple',
    'Orange',
    'Pink',
    'Black',
    'DarkTurquoise'
];
const AVAILABLE_MANUFACTURES = [
    'Pontiac',
    'Subaru',
    'Mitsubishi',
    'Oldsmobile',
    'Chevrolet',
    'Chrysler',
    'Suzuki',
    'GMC',
    'Cadillac',
    'Mercury',
    'Dodge',
    'Ram',
    'Lexus',
    'Lamborghini',
    'Honda',
    'Nissan',
    'Ford',
    'Hyundai',
    'Saab',
    'Toyota'
];
let ProductEditComponent = class ProductEditComponent {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param typesUtilsService: TypesUtilsService
     * @param productFB: FormBuilder
     * @param dialog: MatDialog
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: SubheaderService
     * @param layoutConfigService: LayoutConfigService
     * @param productService: ProductsService
     * @param cdr: ChangeDetectorRef
     */
    constructor(store, activatedRoute, router, typesUtilsService, productFB, dialog, subheaderService, layoutUtilsService, layoutConfigService, productService, cdr) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.typesUtilsService = typesUtilsService;
        this.productFB = productFB;
        this.dialog = dialog;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.layoutConfigService = layoutConfigService;
        this.productService = productService;
        this.cdr = cdr;
        this.selectedTab = 0;
        this.loadingSubject = new BehaviorSubject(true);
        this.hasFormErrors = false;
        this.availableYears = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        for (let i = 2019; i > 1945; i--) {
            this.availableYears.push(i);
        }
        this.loading$ = this.loadingSubject.asObservable();
        this.loadingSubject.next(true);
        this.activatedRoute.params.subscribe(params => {
            const id = params.id;
            if (id && id > 0) {
                this.store.pipe(select(selectProductById(id))).subscribe(result => {
                    if (!result) {
                        this.loadProductFromService(id);
                        return;
                    }
                    this.loadProduct(result);
                });
            }
            else {
                const newProduct = new ProductModel();
                newProduct.clear();
                this.loadProduct(newProduct);
            }
        });
        // sticky portlet header
        window.onload = () => {
            const style = getComputedStyle(document.getElementById('kt_header'));
            this.headerMargin = parseInt(style.height, 0);
        };
    }
    loadProduct(_product, fromService = false) {
        if (!_product) {
            this.goBack('');
        }
        this.product = _product;
        this.productId$ = of(_product.id);
        this.oldProduct = Object.assign({}, _product);
        this.initProduct();
        if (fromService) {
            this.cdr.detectChanges();
        }
    }
    // If product didn't find in store
    loadProductFromService(productId) {
        this.productService.getProductById(productId).subscribe(res => {
            this.loadProduct(res, true);
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    }
    /**
     * Init product
     */
    initProduct() {
        this.createForm();
        this.loadingSubject.next(false);
        if (!this.product.id) {
            this.subheaderService.setBreadcrumbs([
                { title: 'eCommerce', page: `/ecommerce` },
                { title: 'Products', page: `/ecommerce/products` },
                { title: 'Create product', page: `/ecommerce/products/add` }
            ]);
            return;
        }
        this.subheaderService.setTitle('Edit product');
        this.subheaderService.setBreadcrumbs([
            { title: 'eCommerce', page: `/ecommerce` },
            { title: 'Products', page: `/ecommerce/products` },
            {
                title: 'Edit product',
                page: `/ecommerce/products/edit`,
                queryParams: { id: this.product.id }
            }
        ]);
    }
    /**
     * Create form
     */
    createForm() {
        this.productForm = this.productFB.group({
            model: [this.product.model, Validators.required],
            manufacture: [this.product.manufacture, Validators.required],
            modelYear: [this.product.modelYear.toString(), Validators.required],
            mileage: [
                this.product.mileage,
                [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
            ],
            description: [this.product.description],
            color: [this.product.color, Validators.required],
            price: [
                this.product.price,
                [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
            ],
            condition: [
                this.product.condition.toString(),
                [Validators.required, Validators.min(0), Validators.max(1)]
            ],
            status: [
                this.product.status.toString(),
                [Validators.required, Validators.min(0), Validators.max(1)]
            ],
            VINCode: [this.product.VINCode, Validators.required]
        });
        this.filteredManufactures = this.productForm.controls.manufacture.valueChanges.pipe(startWith(''), map(val => this.filterManufacture(val.toString())));
        this.filteredColors = this.productForm.controls.color.valueChanges.pipe(startWith(''), map(val => this.filterColor(val.toString())));
    }
    /**
     * Filter manufacture
     *
     * @param val: string
     */
    filterManufacture(val) {
        return AVAILABLE_MANUFACTURES.filter(option => option.toLowerCase().includes(val.toLowerCase()));
    }
    /**
     * Filter color
     *
     * @param val: string
     */
    filterColor(val) {
        return AVAILABLE_COLORS.filter(option => option.toLowerCase().includes(val.toLowerCase()));
    }
    /**
     * Go back to the list
     *
     * @param id: any
     */
    goBack(id) {
        this.loadingSubject.next(false);
        const url = `/ecommerce/products?id=${id}`;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    }
    goBackWithoutId() {
        this.router.navigateByUrl('/ecommerce/products', {
            relativeTo: this.activatedRoute
        });
    }
    /**
     * Refresh product
     *
     * @param isNew: boolean
     * @param id: number
     */
    refreshProduct(isNew = false, id = 0) {
        this.loadingSubject.next(false);
        let url = this.router.url;
        if (!isNew) {
            this.router.navigate([url], { relativeTo: this.activatedRoute });
            return;
        }
        url = `/ecommerce/products/edit/${id}`;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    }
    /**
     * Reset
     */
    reset() {
        this.product = Object.assign({}, this.oldProduct);
        this.createForm();
        this.hasFormErrors = false;
        this.productForm.markAsPristine();
        this.productForm.markAsUntouched();
        this.productForm.updateValueAndValidity();
    }
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    onSumbit(withBack = false) {
        this.hasFormErrors = false;
        const controls = this.productForm.controls;
        /** check form */
        if (this.productForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            this.hasFormErrors = true;
            this.selectedTab = 0;
            return;
        }
        // tslint:disable-next-line:prefer-const
        let editedProduct = this.prepareProduct();
        if (editedProduct.id > 0) {
            this.updateProduct(editedProduct, withBack);
            return;
        }
        this.addProduct(editedProduct, withBack);
    }
    /**
     * Returns object for saving
     */
    prepareProduct() {
        const controls = this.productForm.controls;
        const _product = new ProductModel();
        _product.id = this.product.id;
        _product.model = controls.model.value;
        _product.manufacture = controls.manufacture.value;
        _product.modelYear = +controls.modelYear.value;
        _product.mileage = +controls.mileage.value;
        _product.description = controls.description.value;
        _product.color = controls.color.value;
        _product.price = +controls.price.value;
        _product.condition = +controls.condition.value;
        _product.status = +controls.status.value;
        _product.VINCode = controls.VINCode.value;
        _product._userId = 1; // TODO: get version from userId
        _product._createdDate = this.product._createdDate;
        _product._updatedDate = this.product._updatedDate;
        _product._updatedDate = this.typesUtilsService.getDateStringFromDate();
        _product._createdDate =
            this.product.id > 0 ? _product._createdDate : _product._updatedDate;
        return _product;
    }
    /**
     * Add product
     *
     * @param _product: ProductModel
     * @param withBack: boolean
     */
    addProduct(_product, withBack = false) {
        this.loadingSubject.next(true);
        this.store.dispatch(new ProductOnServerCreated({ product: _product }));
        this.componentSubscriptions = this.store
            .pipe(delay(1000), select(selectLastCreatedProductId))
            .subscribe(newId => {
            if (!newId) {
                return;
            }
            this.loadingSubject.next(false);
            if (withBack) {
                this.goBack(newId);
            }
            else {
                const message = `New product successfully has been added.`;
                this.layoutUtilsService.showActionNotification(message, MessageType.Create, 10000, true, true);
                this.refreshProduct(true, newId);
            }
        });
    }
    /**
     * Update product
     *
     * @param _product: ProductModel
     * @param withBack: boolean
     */
    updateProduct(_product, withBack = false) {
        this.loadingSubject.next(true);
        const updateProduct = {
            id: _product.id,
            changes: _product
        };
        this.store.dispatch(new ProductUpdated({
            partialProduct: updateProduct,
            product: _product
        }));
        of(undefined)
            .pipe(delay(3000))
            .subscribe(() => {
            // Remove this line
            if (withBack) {
                this.goBack(_product.id);
            }
            else {
                const message = `Product successfully has been saved.`;
                this.layoutUtilsService.showActionNotification(message, MessageType.Update, 10000, true, true);
                this.refreshProduct(false);
            }
        }); // Remove this line
    }
    /**
     * Returns component title
     */
    getComponentTitle() {
        let result = 'Create product';
        if (!this.product || !this.product.id) {
            return result;
        }
        result = `Edit product - ${this.product.manufacture} ${this.product.model}, ${this.product.modelYear}`;
        return result;
    }
    /**
     * Close alert
     *
     * @param $event
     */
    onAlertClose($event) {
        this.hasFormErrors = false;
    }
};
ProductEditComponent = tslib_1.__decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'monorepo-product-edit',
        templateUrl: './product-edit.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Store !== "undefined" && Store) === "function" ? _a : Object, typeof (_b = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _b : Object, typeof (_c = typeof Router !== "undefined" && Router) === "function" ? _c : Object, TypesUtilsService, typeof (_d = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _d : Object, typeof (_e = typeof MatDialog !== "undefined" && MatDialog) === "function" ? _e : Object, SubheaderService,
        LayoutUtilsService,
        LayoutConfigService,
        ProductsService, typeof (_f = typeof ChangeDetectorRef !== "undefined" && ChangeDetectorRef) === "function" ? _f : Object])
], ProductEditComponent);
export { ProductEditComponent };
//# sourceMappingURL=product-edit.component.js.map