import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e;
import { Component, ContentChildren, Directive, EventEmitter, Input, Output, QueryList, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
let nextId = 0;
/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
let AccordionControlPanelTitleDirective = class AccordionControlPanelTitleDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
AccordionControlPanelTitleDirective = tslib_1.__decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'ng-template[AccordionControlPanelTitle]'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof TemplateRef !== "undefined" && TemplateRef) === "function" ? _a : Object])
], AccordionControlPanelTitleDirective);
export { AccordionControlPanelTitleDirective };
/**
 * This directive must be used to wrap accordion panel content.
 */
let AccordionControlPanelContentDirective = class AccordionControlPanelContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
AccordionControlPanelContentDirective = tslib_1.__decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'ng-template[AccordionControlPanelContent]'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof TemplateRef !== "undefined" && TemplateRef) === "function" ? _b : Object])
], AccordionControlPanelContentDirective);
export { AccordionControlPanelContentDirective };
/**
 * The NgbPanel directive represents an individual panel with the title and collapsible
 * content
 */
let AccordionControlPanelDirective = class AccordionControlPanelDirective {
    /**
     * The NgbPanel directive represents an individual panel with the title and collapsible
     * content
     */
    constructor() {
        /**
         *  A flag determining whether the panel is disabled or not.
         *  When disabled, the panel cannot be toggled.
         */
        this.disabled = false;
        this.height = 0;
        this.contentHeight = 0;
        /**
         *  An optional id for the panel. The id should be unique.
         *  If not provided, it will be auto-generated.
         */
        this.id = `kt-accordion-control-panel-${nextId++}`;
        /**
         * A flag telling if the panel is currently open
         */
        this.isOpen = false;
    }
    ngAfterContentChecked() {
        // We are using @ContentChildren instead of @ContantChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        this.titleTpl = this.titleTpls.first;
        this.contentTpl = this.contentTpls.first;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AccordionControlPanelDirective.prototype, "disabled", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AccordionControlPanelDirective.prototype, "id", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AccordionControlPanelDirective.prototype, "title", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AccordionControlPanelDirective.prototype, "iconClass", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AccordionControlPanelDirective.prototype, "hasBodyWrapper", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AccordionControlPanelDirective.prototype, "type", void 0);
tslib_1.__decorate([
    ContentChildren(AccordionControlPanelTitleDirective, { descendants: false }),
    tslib_1.__metadata("design:type", typeof (_c = typeof QueryList !== "undefined" && QueryList) === "function" ? _c : Object)
], AccordionControlPanelDirective.prototype, "titleTpls", void 0);
tslib_1.__decorate([
    ContentChildren(AccordionControlPanelContentDirective, { descendants: false }),
    tslib_1.__metadata("design:type", typeof (_d = typeof QueryList !== "undefined" && QueryList) === "function" ? _d : Object)
], AccordionControlPanelDirective.prototype, "contentTpls", void 0);
AccordionControlPanelDirective = tslib_1.__decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'monorepo-accordion-control-panel'
    })
], AccordionControlPanelDirective);
export { AccordionControlPanelDirective };
/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only one panel can be opened at a time.
 */
let AccordionControlComponent = class AccordionControlComponent {
    constructor() {
        /**
         * An array or comma separated strings of panel identifiers that should be opened
         */
        this.activeIds = [];
        this.hasAnimation = false;
        /**
         * Whether the closed panels should be hidden without destroying them
         */
        this.destroyOnHide = true;
        /**
         * A panel change event fired right before the panel toggle happens. See PanelChangeEvent for payload details
         */
        this.panelChange = new EventEmitter();
    }
    /**
     * Programmatically toggle a panel with a given id.
     */
    toggle(panelId, accordionBodyScrollHeight) {
        const panel = this.panels.find(p => p.id === panelId);
        if (panel && !panel.disabled) {
            let defaultPrevented = false;
            if (this.hasAnimation) {
                panel.height = panel.height ? 0 : panel.contentHeight;
            }
            this.panelChange.emit({ panelId, nextState: !panel.isOpen, preventDefault: () => { defaultPrevented = true; } });
            if (!defaultPrevented) {
                panel.isOpen = !panel.isOpen;
                if (this.closeOthers) {
                    this._closeOthers(panelId);
                }
                this._updateActiveIds();
            }
        }
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * after content checked
     */
    ngAfterContentChecked() {
        // active id updates
        if (typeof this.activeIds === 'string') {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        // update panels open states
        this.panels.forEach(panel => {
            panel.isOpen = !panel.disabled && this.activeIds.indexOf(panel.id) > -1;
            if (this.hasAnimation) {
                const domPanel = document.getElementById(panel.id);
                panel.contentHeight = domPanel && domPanel.scrollHeight ? domPanel.scrollHeight : 200;
            }
        });
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOthers) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    }
    /**
     * Close all panel except selected
     * @param panelId: string
     */
    _closeOthers(panelId) {
        this.panels.forEach(panel => {
            if (panel.id !== panelId) {
                panel.isOpen = false;
            }
        });
    }
    /**
     * Update active ids
     */
    _updateActiveIds() {
        this.activeIds = this.panels.filter(panel => panel.isOpen && !panel.disabled).map(panel => panel.id);
    }
};
tslib_1.__decorate([
    ContentChildren(AccordionControlPanelDirective),
    tslib_1.__metadata("design:type", typeof (_e = typeof QueryList !== "undefined" && QueryList) === "function" ? _e : Object)
], AccordionControlComponent.prototype, "panels", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AccordionControlComponent.prototype, "activeIds", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AccordionControlComponent.prototype, "hasAnimation", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AccordionControlComponent.prototype, "closeOthers", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AccordionControlComponent.prototype, "destroyOnHide", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AccordionControlComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], AccordionControlComponent.prototype, "panelChange", void 0);
AccordionControlComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-accordion-control',
        exportAs: 'AccordionControl',
        host: {
            role: 'tablist',
            '[attr.aria-multiselectable]': '!closeOtherPanels',
            class: 'accordion'
        },
        templateUrl: './accordion-control.component.html',
        styles: [`
		.accordion--animation {
			overflow: hidden;
        	-webkit-transition: height .5s;
      		transition: height .5s;
		}
	`],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AccordionControlComponent);
export { AccordionControlComponent };
//# sourceMappingURL=accordion-control.component.js.map