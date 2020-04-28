import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e, _f, _g;
// ANGULAR
import { Component, ElementRef, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
// MATERIAL
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
// RXJS
import { debounceTime, distinctUntilChanged, tap, delay } from 'rxjs/operators';
import { fromEvent, merge, Observable, of } from 'rxjs';
// NGRX
import { Store, select } from '@ngrx/store';
// CORE
import { 
// E-COMMERCE
ProductRemarksDataSource, ProductRemarksPageRequested, ProductRemarkUpdated, ProductRemarkStoreUpdated, OneProductRemarkDeleted, ManyProductRemarksDeleted, selectLastCreatedProductRemarkId, ProductRemarkOnServerCreated } from '@monorepo/shared/data-access-core';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
// SERVICES
import { TypesUtilsService, LayoutUtilsService, MessageType } from '@monorepo/shared/util-services';
// MODELS
import { ProductRemarkModel } from '@monorepo/shared/data-access-models';
// Table with EDIT item in new page
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
let RemarksListComponent = class RemarksListComponent {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param fb: FormBuilder
     * @param dialog: MatDialog
     * @param typesUtilsService: TypeUtilsService
     * @param layoutUtilsService: LayoutUtilsService
     */
    constructor(store, fb, dialog, typesUtilsService, layoutUtilsService) {
        this.store = store;
        this.fb = fb;
        this.dialog = dialog;
        this.typesUtilsService = typesUtilsService;
        this.layoutUtilsService = layoutUtilsService;
        this.displayedColumns = ['select', 'id', 'text', 'type', 'dueDate', 'actions'];
        // Selection
        this.selection = new SelectionModel(true, []);
        this.productRemarksResult = [];
        // Add and Edit
        this.isSwitchedToEditMode = false;
        this.loadingAfterSubmit = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
        /* Data load will be triggered in two cases:
            - when a pagination event occurs => this.paginator.page
            - when a sort event occurs => this.sort.sortChange
            **/
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(tap(() => {
            this.loadRemarksList();
        }))
            .subscribe();
        // Filtration, bind to searchInput
        fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(debounceTime(150), distinctUntilChanged(), tap(() => {
            this.paginator.pageIndex = 0;
            this.loadRemarksList();
        }))
            .subscribe();
        // Init DataSource
        this.dataSource = new ProductRemarksDataSource(this.store);
        this.dataSource.entitySubject.subscribe(res => (this.productRemarksResult = res));
        this.productId$.subscribe(res => {
            if (!res) {
                return;
            }
            this.productId = res;
            of(undefined)
                .pipe(delay(1000))
                .subscribe(() => {
                // Remove this line, just loading imitation
                this.loadRemarksList();
            }); // Remove this line, just loading imitation
            this.createFormGroup();
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
     * Loading Remarks list
     */
    loadRemarksList() {
        this.selection.clear();
        const queryParams = new QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new ProductRemarksPageRequested({
            page: queryParams,
            productId: this.productId
        }));
    }
    /**
     * Create Reactive Form
     * @param _item: remark
     */
    createFormGroup(_item = null) {
        // 'edit' prefix - for item editing
        // 'add' prefix - for item creation
        this.formGroup = this.fb.group({
            editText: ['', Validators.compose([Validators.required])],
            editType: ['0'],
            editDueDate: [
                this.typesUtilsService.getDateFromString(),
                Validators.compose([Validators.required])
            ],
            newText: ['', Validators.compose([Validators.required])],
            newType: ['0'],
            newDueDate: [
                this.typesUtilsService.getDateFromString(),
                Validators.compose([Validators.required])
            ]
        });
        this.clearAddForm();
        this.clearEditForm();
    }
    // ADD REMARK FUNCTIONS: clearAddForm | checkAddForm | addRemarkButtonOnClick | cancelAddButtonOnClick | saveNewRemark
    clearAddForm() {
        const controls = this.formGroup.controls;
        controls.newText.setValue('');
        controls.newText.markAsPristine();
        controls.newText.markAsUntouched();
        controls.newType.setValue('0');
        controls.newType.markAsPristine();
        controls.newType.markAsUntouched();
        controls.newDueDate.setValue(this.typesUtilsService.getDateFromString());
        controls.newDueDate.markAsPristine();
        controls.newDueDate.markAsUntouched();
        this.remarkForAdd = new ProductRemarkModel();
        this.remarkForAdd.clear(this.productId);
        this.remarkForAdd.dueDate = this.typesUtilsService.getDateStringFromDate();
        this.remarkForAdd._isEditMode = false;
    }
    /**
     * Check if Add Form is Valid
     */
    checkAddForm() {
        const controls = this.formGroup.controls;
        if (controls.newText.invalid ||
            controls.newType.invalid ||
            controls.newDueDate.invalid) {
            controls.newText.markAsTouched();
            // controls['newType'].markAsTouched();
            controls.newDueDate.markAsTouched();
            return false;
        }
        return true;
    }
    /**
     * Open Remark Add Form
     */
    addRemarkButtonOnClick() {
        this.clearAddForm();
        this.remarkForAdd._isEditMode = true;
        this.isSwitchedToEditMode = true;
    }
    /**
     * Close Remark Add Form
     */
    cancelAddButtonOnClick() {
        this.remarkForAdd._isEditMode = false;
        this.isSwitchedToEditMode = false;
    }
    /**
     *  Create new remark
     */
    saveNewRemark() {
        if (!this.checkAddForm()) {
            return;
        }
        const controls = this.formGroup.controls;
        this.loadingAfterSubmit = false;
        this.remarkForAdd._isEditMode = false;
        this.remarkForAdd.text = controls.newText.value;
        this.remarkForAdd.type = +controls.newType.value;
        const _date = new Date(controls.newDueDate.value);
        this.remarkForAdd.dueDate = this.typesUtilsService.getDateStringFromDate(_date);
        this.remarkForAdd._updatedDate = this.typesUtilsService.getDateStringFromDate();
        this.remarkForAdd._createdDate = this.remarkForEdit._updatedDate;
        this.remarkForAdd._userId = 1; // Admin TODO: Get from user servics
        this.store.dispatch(new ProductRemarkOnServerCreated({ productRemark: this.remarkForAdd }));
        this.componentSubscriptions = this.store
            .pipe(select(selectLastCreatedProductRemarkId))
            .subscribe(res => {
            if (!res) {
                return;
            }
            const _saveMessage = `Remark has been created`;
            this.isSwitchedToEditMode = false;
            this.layoutUtilsService.showActionNotification(_saveMessage, MessageType.Create, 10000, true, true);
            this.clearAddForm();
        });
    }
    // EDIT REMARK FUNCTIONS: clearEditForm | checkEditForm | editRemarkButtonOnClick | cancelEditButtonOnClick |
    clearEditForm() {
        const controls = this.formGroup.controls;
        controls.editText.setValue('');
        // controls['editText'].markAsPristine();
        // controls['editText'].markAsUntouched();
        controls.editType.setValue('0');
        // controls['editType'].markAsPristine();
        // controls['editType'].markAsUntouched();
        controls.editDueDate.setValue(this.typesUtilsService.getDateFromString());
        // controls['editDueDate'].markAsPristine();
        // controls['editDueDate'].markAsUntouched();
        this.remarkForEdit = new ProductRemarkModel();
        this.remarkForEdit.clear(this.productId);
        this.remarkForEdit.dueDate = this.typesUtilsService.getDateStringFromDate();
        this.remarkForEdit._isEditMode = false;
    }
    /**
     * Check is Edit Form valid
     */
    checkEditForm() {
        const controls = this.formGroup.controls;
        if (controls.editText.invalid ||
            controls.editType.invalid ||
            controls.editDueDate.invalid) {
            // controls['editText'].markAsTouched();
            // controls['editType'].markAsTouched();
            // controls['editDueDate'].markAsTouched();
            return false;
        }
        return true;
    }
    /**
     * Update remark
     *
     * @param _item: ProductRemarkModel
     */
    editRemarkButtonOnClick(_item) {
        const controls = this.formGroup.controls;
        controls.editText.setValue(_item.text);
        controls.editType.setValue(_item.type.toString());
        controls.editDueDate.setValue(this.typesUtilsService.getDateFromString(_item.dueDate));
        const updateProductReamrk = {
            id: _item.id,
            changes: {
                _isEditMode: true
            }
        };
        this.store.dispatch(new ProductRemarkStoreUpdated({ productRemark: updateProductReamrk }));
        this.isSwitchedToEditMode = true;
    }
    /**
     * Cancel remark
     *
     * @param _item: ProductRemarkModel
     */
    cancelEditButtonOnClick(_item) {
        const updateProductReamrk = {
            id: _item.id,
            changes: {
                _isEditMode: false
            }
        };
        this.store.dispatch(new ProductRemarkStoreUpdated({ productRemark: updateProductReamrk }));
        this.isSwitchedToEditMode = false;
    }
    /**
     * Save remark
     *
     * @param _item: ProductRemarkModel
     */
    saveUpdatedRemark(_item) {
        if (!this.checkEditForm()) {
            return;
        }
        this.loadingAfterSubmit = true;
        const controls = this.formGroup.controls;
        this.loadingAfterSubmit = false;
        const objectForUpdate = new ProductRemarkModel();
        objectForUpdate.id = _item.id;
        objectForUpdate.carId = _item.carId;
        objectForUpdate._isEditMode = _item._isEditMode;
        objectForUpdate.text = controls.editText.value;
        objectForUpdate.type = +controls.editType.value;
        const _date = new Date(controls.editDueDate.value);
        objectForUpdate.dueDate = this.typesUtilsService.getDateStringFromDate(_date);
        objectForUpdate._updatedDate = this.typesUtilsService.getDateStringFromDate();
        objectForUpdate._isEditMode = false;
        const updateProductReamrk = {
            id: _item.id,
            changes: objectForUpdate
        };
        this.store.dispatch(new ProductRemarkUpdated({
            partialProductRemark: updateProductReamrk,
            productRemark: objectForUpdate
        }));
        const saveMessage = `Remark has been updated`;
        this.isSwitchedToEditMode = false;
        this.layoutUtilsService.showActionNotification(saveMessage, MessageType.Update, 10000, true, true);
    }
    /**
     * Returns object for filtration
     */
    filterConfiguration() {
        const filter = {};
        const searchText = this.searchInput.nativeElement.value;
        filter.text = searchText;
        return filter;
    }
    /**
     * Check all rows are selected
     */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.productRemarksResult.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection
     */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else {
            this.productRemarksResult.forEach(row => this.selection.select(row));
        }
    }
    /** ACTIONS */
    /**
     * Delete remark
     *
     * @param _item: ProductRemarkModel
     */
    deleteRemark(_item) {
        const _title = 'Remark Delete';
        const _description = 'Are you sure to permanently delete this remark?';
        const _waitDesciption = 'Remark is deleting...';
        const _deleteMessage = `Remark has been deleted`;
        const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(res => {
            if (!res) {
                return;
            }
            this.store.dispatch(new OneProductRemarkDeleted({ id: _item.id }));
            this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete);
        });
    }
    /**
     * Delete selected remarks
     */
    deleteRemarks() {
        const _title = 'Remarks Delete';
        const _description = 'Are you sure to permanently delete selected remarks?';
        const _waitDesciption = 'Remarks are deleting...';
        const _deleteMessage = 'Selected remarks have been deleted';
        const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(res => {
            if (!res) {
                return;
            }
            const length = this.selection.selected.length;
            const idsForDeletion = [];
            for (let i = 0; i < length; i++) {
                idsForDeletion.push(this.selection.selected[i].id);
            }
            this.store.dispatch(new ManyProductRemarksDeleted({ ids: idsForDeletion }));
            this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete);
            this.selection.clear();
        });
    }
    /**
     * Fetch selected remarks
     */
    fetchRemarks() {
        const messages = [];
        this.selection.selected.forEach(elem => {
            messages.push({ text: `${elem.text}`, id: elem.id });
        });
        this.layoutUtilsService.fetchElements(messages);
    }
    /* UI **/
    /**
     * Returns type in string
     *
     * @param _remark: ProductRemarkModel
     */
    getTypeStr(_remark) {
        switch (_remark.type) {
            case 0:
                return 'Info';
            case 1:
                return 'Note';
            case 2:
                return 'Reminder';
            default:
                return '';
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Observable !== "undefined" && Observable) === "function" ? _a : Object)
], RemarksListComponent.prototype, "productId$", void 0);
tslib_1.__decorate([
    ViewChild(MatPaginator, { static: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _b : Object)
], RemarksListComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", typeof (_c = typeof MatSort !== "undefined" && MatSort) === "function" ? _c : Object)
], RemarksListComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    ViewChild('searchInput', { static: true }),
    tslib_1.__metadata("design:type", typeof (_d = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _d : Object)
], RemarksListComponent.prototype, "searchInput", void 0);
RemarksListComponent = tslib_1.__decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'monorepo-remarks-list',
        templateUrl: './remarks-list.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof Store !== "undefined" && Store) === "function" ? _e : Object, typeof (_f = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _f : Object, typeof (_g = typeof MatDialog !== "undefined" && MatDialog) === "function" ? _g : Object, TypesUtilsService,
        LayoutUtilsService])
], RemarksListComponent);
export { RemarksListComponent };
//# sourceMappingURL=remarks-list.component.js.map