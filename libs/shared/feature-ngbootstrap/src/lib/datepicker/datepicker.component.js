import * as tslib_1 from "tslib";
var _a, _b;
import { Component, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { NgbCalendar, NgbDateAdapter, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
const now = new Date();
const equals = (one, two) => one && two && two.year === one.year && two.month === one.month && two.day === one.day;
const before = (one, two) => !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;
const after = (one, two) => !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
const basicDatepicker = {
    beforeCodeTitle: 'Basic datepicker',
    htmlCode: `
<div class="kt-section">
  <h3 class="kt-section__heading">Simple datepicker</h3>
  <div class="kt-section__content">
    <ngb-datepicker #dp [(ngModel)]="model" (navigate)="date = $event.next"></ngb-datepicker>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
<div class="kt-section">
  <div class="kt-section__heading">
    <button class="btn btn-sm btn-primary" (click)="selectToday()">Select Today</button>
    <button class="btn btn-sm btn-info" (click)="dp.navigateTo()">To current month</button>
    <button class="btn btn-sm btn-danger" (click)="dp.navigateTo({year: 2013, month: 2})">To Feb 2013</button>
  </div>
  <div class="kt-section__content">
    <pre>Month: {{ date.month }}.{{ date.year }}</pre>
    <pre>Model: {{ model | json }}</pre>
  </div>
</div>
`,
    tsCode: `
import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n
const now = new Date();\n
@Component({
  selector: 'ngbd-datepicker-basic',
  templateUrl: './datepicker-basic.html'
})
export class NgbdDatepickerBasic {\n
  model: NgbDateStruct;
  date: {year: number, month: number};\n
  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
`,
    isCodeVisible: false,
    isExampleExpanded: true
};
const datepickerInAPopup = {
    beforeCodeTitle: 'Datepicker in a popup',
    htmlCode: `
<div class="kt-section">
  <div class="kt-section__heading">
    <pre>Model: {{ model | json }}</pre>
  </div>
  <div class="kt-section__content">
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <input class="form-control" placeholder="yyyy-mm-dd" name="dp" [(ngModel)]="model" ngbDatepicker #d="ngbDatepicker">
          <div class="input-group-append">
            <button class="btn btn-primary" (click)="d.toggle()" type="button">
              <i class="la la-calendar"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
`,
    tsCode: `
import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-collapse-basic',
  templateUrl: './collapse-basic.html'
})
export class NgbdCollapseBasic {
  public isCollapsed = false;
}
`,
    isCodeVisible: false,
    isExampleExpanded: true
};
const multipleMonths = {
    beforeCodeTitle: 'Multiple months',
    htmlCode: `
<div class="kt-section">
  <div class="kt-section__content">
    <ngb-datepicker [displayMonths]="displayMonths" [navigation]="navigation" [showWeekNumbers]="showWeekNumbers"></ngb-datepicker>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
<div class="kt-section">
  <div class="kt-section__content">
    <form class="form-inline">
      <div class="form-group kt-form__group">
        <div class="input-group">
		  <input class="form-control" placeholder="yyyy-mm-dd" name="dp" [displayMonths]="displayMonths"
           [navigation]="navigation" [showWeekNumbers]="showWeekNumbers" ngbDatepicker #d="ngbDatepicker">
          <div class="input-group-append">
            <button class="btn btn-primary" (click)="d.toggle()" type="button">
              <i class="la la-calendar"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
<div class="kt-section">
  <div class="kt-section__content">
    <select class="custom-select kt-input" [(ngModel)]="displayMonths">
      <option [ngValue]="1">One month</option>
      <option [ngValue]="2">Two months</option>
      <option [ngValue]="3">Three months</option>
    </select>
    <select class="custom-select kt-input" [(ngModel)]="navigation">
      <option value="none">Without navigation</option>
      <option value="select">With select boxes</option>
      <option value="arrows">Without select boxes</option>
    </select>
    <select class="custom-select kt-input" [(ngModel)]="showWeekNumbers">
      <option [ngValue]="true">Week numbers</option>
      <option [ngValue]="false">No week numbers</option>
    </select>
  </div>
</div>
`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'ngbd-datepicker-multiple',
  templateUrl: './datepicker-multiple.html',
  styles: [\`
    select.custom-select {
    margin-right: 0.5rem;
    width: auto;
  }
 \`]
})
export class NgbdDatepickerMultiple {
  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
}
`,
    isCodeVisible: false,
    isExampleExpanded: true
};
const rangeSelection = {
    beforeCodeTitle: 'Range selection',
    htmlCode: `
<div class="kt-section">
  <h3 class="kt-section__heading">Example of the range selection</h3>
  <div class="kt-section__content">
    <ngb-datepicker #dp ngModel (ngModelChange)="onDateChange($event)" [displayMonths]="2" [dayTemplate]="t"></ngb-datepicker>
    <ng-template #t let-date="date" let-focused="focused">
	  <span class="custom-day" [class.focused]="focused"
        [class.range]="isFrom(date) || isTo(date) || isInside(date) || isHovered(date)" [class.faded]="isHovered(date) || isInside(date)"
        (mouseenter)="hoveredDate = date" (mouseleave)="hoveredDate = null">
        {{ date.day }}
      </span>
    </ng-template>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
<div class="kt-section">
  <div class="kt-section__content">
    <pre>From: {{ fromDate | json }} </pre>
    <pre>To: {{ toDate | json }} </pre>
  </div>
</div>
`,
    tsCode: `
import {Component} from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';\n
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;\n
const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
  ? false : one.day < two.day : one.month < two.month : one.year < two.year;\n
const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
  ? false : one.day > two.day : one.month > two.month : one.year > two.year;\n
@Component({
  selector: 'ngbd-datepicker-range',
  templateUrl: './datepicker-range.html',
  styles: [\`
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
	}
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }
 \`]
})
export class NgbdDatepickerRange {
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;\n
  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }\n
  onDateChange(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }\n
  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);
}
`,
    isCodeVisible: false,
    isExampleExpanded: true
};
const disabledDatepicker = {
    beforeCodeTitle: 'Disabled datepicker',
    htmlCode: `
<div class="kt-section">
  <div class="kt-section__content">
    <ngb-datepicker [(ngModel)]="model" [disabled]="disabled"></ngb-datepicker>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
<div class="kt-section">
  <div class="kt-section__content">
    <button class="btn btn-sm btn-{{disabled ? 'danger' : 'success'}}" (click)="disabled = !disabled">
      {{ disabled ? "disabled" : "enabled"}}
    </button>
  </div>
</div>
`,
    tsCode: `
import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n
const now = new Date();\n
@Component({
  selector: 'ngbd-datepicker-disabled',
  templateUrl: './datepicker-disabled.html'
})
export class NgbdDatepickerDisabled {
  model: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  disabled = true;
}
`,
    isCodeVisible: false,
    isExampleExpanded: true
};
const customDateAdapter = {
    beforeCodeTitle: 'Custom date adapter',
    htmlCode: `

<div class="kt-section">
  <span class="kt-section__sub">
	These datepickers use custom Date adapter that lets you use your own model implementation.
    In this example we are converting from and to a JS native Date object
  </span>
  <div class="kt-section__content">
    <ngb-datepicker #d1 [(ngModel)]="model1" #c1="ngModel"></ngb-datepicker>
    <div class="kt-separator kt-separator--dashed"></div>
    <button class="btn btn-sm btn-primary" (click)="model1 = today">Select Today</button>
    <div class="kt-separator kt-separator--dashed"></div>
    <pre>Model: {{ model1 | json }}</pre>
    <pre>State: {{ c1.status }}</pre>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
<div class="kt-section">
  <span class="kt-section__sub">
	These datepickers use custom Date adapter that lets you use your own model implementation. In this example we are
    converting from and to a JS native Date object
  </span>

  <div class="kt-section__content">
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
		  <input class="form-control" placeholder="yyyy-mm-dd" name="d22" #c2="ngModel" [(ngModel)]="model2"
            ngbDatepicker #d22="ngbDatepicker">
          <div class="input-group-append">
            <button class="btn btn-primary" (click)="d22.toggle()" type="button">
              <i class="la la-calendar"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
    <div class="kt-separator kt-separator--dashed"></div>
    <button class="btn btn-sm btn-info" (click)="model2 = today">Select Today</button>
	<div class="kt-separator kt-separator--dashed"></div>
    <pre>Model: {{ model2 | json }}</pre>
    <pre>State: {{ c2.status }}</pre>
  </div>
</div>
`,
    tsCode: `
import {Component, Injectable} from '@angular/core';
import {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n
/**
* Example of a Native Date adapter
*/
@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {
  fromModel(date: Date): NgbDateStruct {
    return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : null;
  }\n
  toModel(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }
}\n
@Component({
  selector: 'ngbd-datepicker-adapter',
  templateUrl: './datepicker-adapter.html',\n
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class NgbdDatepickerAdapter {
  model1: Date;
  model2: Date;\n
  get today() {
    return new Date();
  }
}
`,
    isCodeVisible: false,
    isExampleExpanded: true
};
const iternationalizationOfDatepickers = {
    beforeCodeTitle: 'Internationalization of datepicker',
    htmlCode: `
<div class="kt-section">
  <span class="kt-section__sub">
    Datepicker in French
  </span>
  <div class="kt-section__content">
    <ngb-datepicker [(ngModel)]="fourthModel"></ngb-datepicker>
  </div>
</div>
`,
    tsCode: `
import {Component, Injectable} from '@angular/core';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';\n
const I18N_VALUES = {
  'fr': {
    weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
  }
  // other languages you would support
};\n
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = 'fr';
}\n
// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  constructor(private _i18n: I18n) {
    super();
  }\n
  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }\n
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }\n
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
}\n
@Component({
  selector: 'ngbd-datepicker-i18n',
  templateUrl: './datepicker-i18n.html',
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}] // define custom NgbDatepickerI18n provider
})
export class NgbdDatepickerI18n {
  model;
}
`,
    isCodeVisible: false,
    isExampleExpanded: true
};
const customDayView = {
    beforeCodeTitle: 'Custom day view',
    htmlCode: `
<div class="kt-section">
  <span class="kt-section__sub">
    This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.
  </span>
  <div class="kt-section__content">
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
		  <input class="form-control" placeholder="yyyy-mm-dd" name="dp" [(ngModel)]="fifthModel" ngbDatepicker
           [dayTemplate]="customDay" [markDisabled]="isDisabled" #d="ngbDatepicker">
	      <div class="input-group-append">
            <button class="btn btn-primary" (click)="d.toggle()" type="button">
              <i class="la la-calendar"></i>
            </button>
          </div>
        </div>
      </div>
   </form>
	<ng-template #customDay let-date="date" let-currentMonth="currentMonth" let-selected="selected" let-disabled="disabled"
      let-focused="focused">
	  <span class="custom-day" [class.weekend]="isWeekend(date)" [class.focused]="focused" [class.bg-primary]="selected"
        [class.hidden]="date.month !== currentMonth" [class.text-muted]="disabled">
        {{ date.day }}
      </span>
    </ng-template>
  </div>
</div>
`,
    tsCode: `
import {Component, Input} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngbd-datepicker-customday',
  templateUrl: './datepicker-customday.html',
  styles: [\`
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      border-radius: 0.25rem;
      display: inline-block;
      width: 2rem;
    }
    .custom-day:hover, .custom-day.focused {
      background-color: #e6e6e6;
    }
    .weekend {
      background-color: #f0ad4e;
      border-radius: 1rem;
      color: white;
    }
    .hidden {
      display: none;
    }
 \`]
})
export class NgbdDatepickerCustomday {
  model: NgbDateStruct;\n
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }\n
  isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }
}
`,
    isCodeVisible: false,
    isExampleExpanded: true
};
const alternativeCalendars = {
    beforeCodeTitle: 'Alternative calendars',
    htmlCode: `
<div class="container">
  <div class="row">
    <div class="col">
      <ngbd-islamic-civil></ngbd-islamic-civil>
    </div>
    <div class="col">
      <ngbd-islamic-umalqura></ngbd-islamic-umalqura>
    </div>
  </div>
</div>
`,
    tsCode: `
import { Component } from '@angular/core';\n
@Component({
    selector: 'ngbd-collapse-basic',
    templateUrl: './collapse-basic.html'
})
export class NgbdCollapseBasic {
    public isCollapsed = false;
}
`,
    isCodeVisible: false,
    isExampleExpanded: true
};
const globalConfigurationOfDatepickers = {
    beforeCodeTitle: 'Global configuration of datepickers',
    htmlCode: `
<div class="kt-section">
  <span class="kt-section__sub">
    This datepicker uses customized default values.
  </span>
  <div class="kt-section__content">
    <ngb-datepicker [(ngModel)]="model"></ngb-datepicker>
  </div>
</div>
`,
    tsCode: `
import {Component} from '@angular/core';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
  selector: 'ngbd-datepicker-config',
  templateUrl: './datepicker-config.html',
  providers: [NgbDatepickerConfig] // add NgbDatepickerConfig to the component providers
})
export class NgbdDatepickerConfig {
  model;\n
  constructor(config: NgbDatepickerConfig) {
    // customize default values of datepickers used by this component tree
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};\n
    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';\n
    // weekends are disabled
    config.markDisabled = (date: NgbDateStruct) => {
    const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
     };
  }
}
`,
    isCodeVisible: false,
    isExampleExpanded: true
};
/**
 * Example of a Native Date adapter
 */
let NgbDateNativeAdapter = class NgbDateNativeAdapter extends NgbDateAdapter {
    fromModel(date) {
        return (date && date.getFullYear) ? { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : null;
    }
    toModel(date) {
        return date ? new Date(date.year, date.month - 1, date.day) : null;
    }
};
NgbDateNativeAdapter = tslib_1.__decorate([
    Injectable()
], NgbDateNativeAdapter);
export { NgbDateNativeAdapter };
const I18N_VALUES = {
    fr: {
        weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
    }
    // other languages you would support
};
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
let I18n = class I18n {
    // Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
    // use the Angular LOCALE_ID value
    constructor() {
        this.language = 'fr';
    }
};
I18n = tslib_1.__decorate([
    Injectable()
], I18n);
export { I18n };
// Define custom service providing the months and weekdays translations
let CustomDatepickerI18n = class CustomDatepickerI18n extends NgbDatepickerI18n {
    constructor(_i18n) {
        super();
        this._i18n = _i18n;
    }
    getDayAriaLabel(date) {
        throw new Error('Method not implemented.'); // TODO: implement this
    }
    getWeekdayShortName(weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    }
    getMonthShortName(month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    }
    getMonthFullName(month) {
        return this.getMonthShortName(month);
    }
};
CustomDatepickerI18n = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [I18n])
], CustomDatepickerI18n);
export { CustomDatepickerI18n };
let DatepickerComponent = class DatepickerComponent {
    constructor(calendar, config) {
        this.displayMonths = 2;
        this.navigation = 'select';
        this.showWeekNumbers = false;
        this.thirdModel = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.disabled = true;
        this.isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
        this.isInside = date => after(date, this.fromDate) && before(date, this.toDate);
        this.isFrom = date => equals(date, this.fromDate);
        this.isTo = date => equals(date, this.toDate);
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        // customize default values of datepickers used by this component tree
        config.minDate = { year: 1900, month: 1, day: 1 };
        config.maxDate = { year: 2099, month: 12, day: 31 };
        // days that don't belong to current month are not visible
        config.outsideDays = 'hidden';
        // weekends are disabled
        config.markDisabled = (date) => {
            const d = new Date(date.year, date.month - 1, date.day);
            return d.getDay() === 0 || d.getDay() === 6;
        };
    }
    ngOnInit() {
        this.exampleBasicDatepicker = basicDatepicker;
        this.exampleDatepickerInAPopup = datepickerInAPopup;
        this.exampleMultipleMonths = multipleMonths;
        this.exampleRangeSelection = rangeSelection;
        this.exampleDisabledDatepicker = disabledDatepicker;
        this.exampleCustomDateAdapter = customDateAdapter;
        this.exampleInternationalizationOfDatepickers = iternationalizationOfDatepickers;
        this.exampleCustomDayView = customDayView;
        this.exampleAlternativeCalendar = alternativeCalendars;
        this.exampleGlobalConfigurationOfDatepickers = globalConfigurationOfDatepickers;
    }
    selectToday() {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    }
    get today() {
        return new Date();
    }
    isWeekend(date) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }
    isDisabled(date, current) {
        return date.month !== current.month;
    }
    onDateChange(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
};
DatepickerComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-datepicker',
        templateUrl: './datepicker.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [`
    select.custom-select {
      margin-right: 0.5rem;
      width: auto;
	}
	.custom-day {
		text-align: center;
		padding: 0.185rem 0.25rem;
		display: inline-block;
		height: 2rem;
		width: 2rem;
	  }
	  .custom-day.focused {
		background-color: #e6e6e6;
	  }
	  .custom-day.range, .custom-day:hover {
		background-color: rgb(2, 117, 216);
		color: white;
	  }
	  .custom-day.faded {
		background-color: rgba(2, 117, 216, 0.5);
	  }
	  .weekend {
		background-color: #f0ad4e;
		border-radius: 1rem;
		color: white;
	  }
	  .hidden {
		display: none;
	  }
  `],
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof NgbCalendar !== "undefined" && NgbCalendar) === "function" ? _a : Object, typeof (_b = typeof NgbDatepickerConfig !== "undefined" && NgbDatepickerConfig) === "function" ? _b : Object])
], DatepickerComponent);
export { DatepickerComponent };
//# sourceMappingURL=datepicker.component.js.map