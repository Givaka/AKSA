import {
  TUI_CALENDAR_DATE_STREAM,
  TUI_CALENDAR_MONTHS,
  TUI_ITEMS_HANDLERS,
  TUI_OTHER_DATE_TEXT
} from "./chunk-SEG2I76I.js";
import {
  TuiCalendar,
  TuiCalendarYear,
  TuiLoader,
  TuiRepeatTimes,
  TuiSpinButton,
  tuiCalendarSheetOptionsProvider
} from "./chunk-NSLG33YN.js";
import {
  TuiLet
} from "./chunk-6DF62NVO.js";
import {
  TuiHovered
} from "./chunk-ATP3OCRR.js";
import {
  TuiLink
} from "./chunk-K4IVBCE7.js";
import {
  TuiMapperPipe
} from "./chunk-OL6PQ5ZF.js";
import {
  TuiIcon,
  tuiAsAuxiliary
} from "./chunk-4BHFHEOY.js";
import {
  TuiDataList,
  TuiDataListComponent,
  TuiDataListDirective,
  TuiOptGroup,
  TuiOption,
  tuiAsDataListAccessor,
  tuiInjectDataListSize
} from "./chunk-ZDHFV4K6.js";
import {
  PolymorpheusOutlet,
  TUI_COMMON_ICONS,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TuiControl,
  TuiDay,
  TuiDayRange,
  TuiMonth,
  TuiMonthRange,
  TuiScrollbar,
  TuiYear,
  coerceBooleanProperty,
  tuiControlValue,
  tuiCreateOptions,
  tuiFallbackValueProvider,
  tuiInjectElement,
  tuiIsNativeFocused,
  tuiTypedFromEvent,
  tuiWatch
} from "./chunk-KYGQM5F2.js";
import {
  EMPTY_QUERY,
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  takeUntilDestroyed,
  toSignal,
  tuiClamp,
  tuiCreateToken,
  tuiIsPresent,
  tuiIsString,
  tuiNullableSame,
  tuiProvideOptions,
  tuiPure,
  tuiQuantize,
  tuiRound
} from "./chunk-HUC4OT3S.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControl,
  NgControlStatus,
  NgModel,
  RangeValueAccessor
} from "./chunk-4HPDDB75.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgForOf,
  NgIf
} from "./chunk-2REAV3OW.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  INJECTOR$1,
  Input,
  Output,
  Pipe,
  ViewChildren,
  computed,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵpipeBindV,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IASHH3I3.js";
import {
  __decorate,
  combineLatest,
  filter,
  map,
  merge,
  repeat,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  timer
} from "./chunk-565WYVFV.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-calendar-month.mjs
function TuiCalendarMonth_tui_scrollbar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-scrollbar", 2)(1, "tui-calendar-year", 3);
    ɵɵlistener("yearClick", function TuiCalendarMonth_tui_scrollbar_0_Template_tui_calendar_year_yearClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickerYearClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("initialItem", ctx_r1.year.year)("max", ctx_r1.max().year)("min", ctx_r1.min().year)("value", ctx_r1.value());
  }
}
function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template_div_click_0_listener() {
      const item_r5 = ɵɵrestoreView(_r4).tuiLet;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onItemClick(item_r5));
    })("tuiHoveredChange", function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      const item_r5 = ɵɵrestoreView(_r4).tuiLet;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onItemHovered($event, item_r5));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r5 = ctx.tuiLet;
    const column_r6 = ɵɵnextContext().$implicit;
    const row_r7 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("t-cell_disabled", ctx_r1.disabledItemHandlerWithMinMax(item_r5))("t-cell_today", ctx_r1.isItemToday(item_r5));
    ɵɵattribute("data-range", ctx_r1.getItemRange(item_r5));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", (tmp_11_0 = ctx_r1.months()) == null ? null : tmp_11_0[row_r7 * 4 + column_r6], " ");
  }
}
function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template, 2, 6, "div", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const row_r7 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("tuiLet", ctx_r1.getTuiMonth(row_r7 * 4 + column_r6, ctx_r1.year.year));
  }
}
function TuiCalendarMonth_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, TuiCalendarMonth_ng_template_1_div_3_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", 4);
  }
}
function TuiCalendarMonth_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-spin-button", 4);
    ɵɵlistener("leftClick", function TuiCalendarMonth_ng_template_1_Template_tui_spin_button_leftClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPreviousYear());
    })("rightClick", function TuiCalendarMonth_ng_template_1_Template_tui_spin_button_rightClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNextYear());
    });
    ɵɵelementStart(1, "button", 5);
    ɵɵlistener("click", function TuiCalendarMonth_ng_template_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onYearClick());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
    ɵɵtemplate(3, TuiCalendarMonth_ng_template_1_div_3_Template, 2, 1, "div", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("focusable", false)("leftDisabled", ctx_r1.year.yearSameOrBefore(ctx_r1.min()))("rightDisabled", ctx_r1.year.yearSameOrAfter(ctx_r1.max()));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.year.formattedYear, " ");
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", 3);
  }
}
var TUI_CALENDAR_MONTH_DEFAULT_OPTIONS = {
  rangeMode: false
};
var [TUI_CALENDAR_MONTH_OPTIONS, tuiCalendarMonthOptionsProvider] = tuiCreateOptions(TUI_CALENDAR_MONTH_DEFAULT_OPTIONS);
var TODAY = TuiDay.currentLocal();
var TuiCalendarMonth = class _TuiCalendarMonth {
  constructor() {
    this.isYearPickerShown = false;
    this.months = toSignal(inject(TUI_CALENDAR_MONTHS));
    this.isRangePicking = computed((x = this.value()) => !this.options.rangeMode && x instanceof TuiMonthRange && x.isSingleMonth || // TODO(v5): remove this condition
    this.options.rangeMode && x instanceof TuiMonth);
    this.year = TODAY;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.minLength = null;
    this.maxLength = null;
    this.monthClick = new EventEmitter();
    this.hoveredItemChange = new EventEmitter();
    this.yearChange = new EventEmitter();
    this.options = inject(TUI_CALENDAR_MONTH_OPTIONS);
    this.min = signal(TUI_FIRST_DAY);
    this.max = signal(TUI_LAST_DAY);
    this.value = signal(null);
    this.hoveredItem = null;
  }
  // TODO(v5): use signal inputs
  set minSetter(x) {
    this.min.set(x);
  }
  // TODO(v5): use signal inputs
  set maxSetter(x) {
    this.max.set(x);
  }
  // TODO(v5): use signal inputs
  set valueSetter(x) {
    this.value.set(x);
  }
  onNextYear() {
    this.updateActiveYear(this.year.append({
      year: 1
    }));
  }
  onPreviousYear() {
    this.updateActiveYear(this.year.append({
      year: -1
    }));
  }
  getItemRange(item) {
    const value = this.value();
    const {
      hoveredItem
    } = this;
    if (!value) {
      return null;
    }
    if (!this.options.rangeMode && value instanceof TuiMonth) {
      return value?.monthSame(item) ? "active" : null;
    }
    const selectedRange = value instanceof TuiMonth ? new TuiMonthRange(value, value) : value;
    const months = item.month + item.year * 12;
    const hovered = hoveredItem ? hoveredItem.month + hoveredItem.year * 12 : null;
    const from = selectedRange.from.month + selectedRange.from.year * 12;
    const to = selectedRange.to.month + selectedRange.to.year * 12;
    const picking = this.isRangePicking() ? hovered : null;
    const min = Math.min(from, to, picking ?? from);
    const max = Math.max(from, to, picking ?? from);
    if (min === max && min === months) {
      return "active";
    }
    if (min === months) {
      return "start";
    }
    if (max === months) {
      return "end";
    }
    return min < months && months < max ? "middle" : null;
  }
  get disabledItemHandlerWithMinMax() {
    return this.calculateDisabledItemHandlerWithMinMax(this.disabledItemHandler, this.value(), this.isRangePicking(), this.min(), this.max(), this.minLength, this.maxLength);
  }
  getTuiMonth(monthNumber, yearNumber) {
    return new TuiMonth(yearNumber, monthNumber);
  }
  isItemToday(item) {
    return TODAY.monthSame(item);
  }
  onPickerYearClick(year) {
    this.isYearPickerShown = false;
    if (this.year.year !== year) {
      this.updateActiveYear(new TuiYear(year));
    }
  }
  onItemClick(month) {
    if (!this.disabledItemHandlerWithMinMax(month)) {
      this.monthClick.emit(month);
    }
  }
  onYearClick() {
    this.isYearPickerShown = true;
  }
  onItemHovered(hovered, item) {
    this.updateHoveredItem(hovered ? item : null);
  }
  // eslint-disable-next-line @typescript-eslint/max-params,max-params
  calculateDisabledItemHandlerWithMinMax(disabledItemHandler, value, isRangePicking, min, max, minLength, maxLength) {
    return (item) => {
      const selectedMonth = value instanceof TuiMonthRange ? value.from : value;
      const delta = isRangePicking && selectedMonth ? Math.abs(item.year * 12 + item.month - selectedMonth.year * 12 - selectedMonth.month) : 0;
      const tooLong = delta && maxLength && delta > maxLength;
      const tooShort = delta && minLength && delta < minLength;
      return tooLong || tooShort || item.monthBefore(min) || item.monthAfter(max) || disabledItemHandler(item);
    };
  }
  updateHoveredItem(month) {
    if (tuiNullableSame(this.hoveredItem, month, (a, b) => a.monthSame(b))) {
      return;
    }
    this.hoveredItem = month;
    this.hoveredItemChange.emit(month);
  }
  updateActiveYear(year) {
    this.year = year;
    this.yearChange.emit(year);
  }
  static {
    this.ɵfac = function TuiCalendarMonth_Factory(t) {
      return new (t || _TuiCalendarMonth)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarMonth,
      selectors: [["tui-calendar-month"]],
      hostVars: 2,
      hostBindings: function TuiCalendarMonth_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isRangePicking());
        }
      },
      inputs: {
        year: "year",
        disabledItemHandler: "disabledItemHandler",
        minLength: "minLength",
        maxLength: "maxLength",
        minSetter: [2, "min", "minSetter", (x) => x ?? TUI_FIRST_DAY],
        maxSetter: [2, "max", "maxSetter", (x) => x ?? TUI_LAST_DAY],
        valueSetter: [0, "value", "valueSetter"]
      },
      outputs: {
        monthClick: "monthClick",
        hoveredItemChange: "hoveredItemChange",
        yearChange: "yearChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiCalendarMonth)]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [["monthSelect", ""], ["class", "t-scrollbar", 4, "ngIf", "ngIfElse"], [1, "t-scrollbar"], [3, "yearClick", "initialItem", "max", "min", "value"], [1, "t-spin", 3, "leftClick", "rightClick", "focusable", "leftDisabled", "rightDisabled"], ["automation-id", "tui-calendar-month__active-year", "tabIndex", "-1", "tuiLink", "", "type", "button", 3, "click"], ["class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["class", "t-cell", 3, "t-cell_disabled", "t-cell_today", "click", "tuiHoveredChange", 4, "tuiLet"], [1, "t-cell", 3, "click", "tuiHoveredChange"]],
      template: function TuiCalendarMonth_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiCalendarMonth_tui_scrollbar_0_Template, 2, 4, "tui-scrollbar", 1)(1, TuiCalendarMonth_ng_template_1_Template, 4, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const monthSelect_r8 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.isYearPickerShown)("ngIfElse", monthSelect_r8);
        }
      },
      dependencies: [NgIf, TuiCalendarYear, TuiHovered, TuiLet, TuiLink, TuiRepeatTimes, TuiScrollbar, TuiSpinButton],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{right:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{left:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}[_nghost-%COMP%]{display:block;block-size:12rem;inline-size:16rem;padding:1.125rem;box-sizing:content-box}.t-spin[_ngcontent-%COMP%]{margin-block-end:1rem}.t-cell[_ngcontent-%COMP%]{inline-size:4rem;border-block-start-width:.75rem;border-block-end-width:.75rem}.t-scrollbar[_ngcontent-%COMP%]{block-size:inherit;inline-size:inherit}`],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiCalendarMonth.prototype, "calculateDisabledItemHandlerWithMinMax", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarMonth, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-month",
      imports: [NgIf, TuiCalendarYear, TuiHovered, TuiLet, TuiLink, TuiRepeatTimes, TuiScrollbar, TuiSpinButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiCalendarMonth)],
      host: {
        "[class._picking]": "isRangePicking()"
      },
      template: '<tui-scrollbar\n    *ngIf="isYearPickerShown; else monthSelect"\n    class="t-scrollbar"\n>\n    <tui-calendar-year\n        [initialItem]="year.year"\n        [max]="max().year"\n        [min]="min().year"\n        [value]="value()"\n        (yearClick)="onPickerYearClick($event)"\n    />\n</tui-scrollbar>\n<ng-template #monthSelect>\n    <tui-spin-button\n        class="t-spin"\n        [focusable]="false"\n        [leftDisabled]="year.yearSameOrBefore(min())"\n        [rightDisabled]="year.yearSameOrAfter(max())"\n        (leftClick)="onPreviousYear()"\n        (rightClick)="onNextYear()"\n    >\n        <button\n            automation-id="tui-calendar-month__active-year"\n            tabIndex="-1"\n            tuiLink\n            type="button"\n            (click)="onYearClick()"\n        >\n            {{ year.formattedYear }}\n        </button>\n    </tui-spin-button>\n    <div\n        *tuiRepeatTimes="let row of 3"\n        class="t-row"\n    >\n        <ng-container *tuiRepeatTimes="let column of 4">\n            <div\n                *tuiLet="getTuiMonth(row * 4 + column, year.year) as item"\n                class="t-cell"\n                [attr.data-range]="getItemRange(item)"\n                [class.t-cell_disabled]="disabledItemHandlerWithMinMax(item)"\n                [class.t-cell_today]="isItemToday(item)"\n                (click)="onItemClick(item)"\n                (tuiHoveredChange)="onItemHovered($event, item)"\n            >\n                {{ months()?.[row * 4 + column] }}\n            </div>\n        </ng-container>\n    </div>\n</ng-template>\n',
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;block-size:12rem;inline-size:16rem;padding:1.125rem;box-sizing:content-box}.t-spin{margin-block-end:1rem}.t-cell{inline-size:4rem;border-block-start-width:.75rem;border-block-end-width:.75rem}.t-scrollbar{block-size:inherit;inline-size:inherit}
`]
    }]
  }], null, {
    year: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    minLength: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    monthClick: [{
      type: Output
    }],
    hoveredItemChange: [{
      type: Output
    }],
    yearChange: [{
      type: Output
    }],
    minSetter: [{
      type: Input,
      args: [{
        alias: "min",
        transform: (x) => x ?? TUI_FIRST_DAY
      }]
    }],
    maxSetter: [{
      type: Input,
      args: [{
        alias: "max",
        transform: (x) => x ?? TUI_LAST_DAY
      }]
    }],
    valueSetter: [{
      type: Input,
      args: ["value"]
    }],
    calculateDisabledItemHandlerWithMinMax: []
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-calendar-range.mjs
var _c0 = (a0, a1, a2, a3) => [a0, a1, a2, a3, false];
var _c1 = (a0, a1, a2, a3) => [a0, a1, a2, a3, true];
var _c2 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function TuiCalendarRange_tui_calendar_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar", 3);
    ɵɵpipe(1, "tuiMapper");
    ɵɵpipe(2, "tuiMapper");
    ɵɵpipe(3, "tuiMapper");
    ɵɵpipe(4, "tuiMapper");
    ɵɵtwoWayListener("hoveredItemChange", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_hoveredItemChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.hoveredItem, $event) || (ctx_r2.hoveredItem = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("dayClick", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_dayClick_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDayClick($event));
    })("monthChange", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_monthChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMonthChange($event.append({
        month: -1
      })));
    })("mousedown.prevent.zoneless", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_mousedown_prevent_zoneless_0_listener() {
      ɵɵrestoreView(_r2);
      return ɵɵresetView(0);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r2.calculatedDisabledItemHandler)("markerHandler", ctx_r2.markerHandler)("max", ɵɵpipeBindV(1, 9, ɵɵpureFunction4(29, _c0, ctx_r2.max, ctx_r2.capsMapper, ctx_r2.value, ctx_r2.maxLength)))("min", ɵɵpipeBindV(2, 15, ɵɵpureFunction4(34, _c1, ctx_r2.min, ctx_r2.capsMapper, ctx_r2.value, ctx_r2.maxLength)))("minViewedMonth", ɵɵpipeBind3(3, 21, ctx_r2.defaultViewedMonth, ctx_r2.monthOffset, 1))("month", ɵɵpipeBind3(4, 25, ctx_r2.defaultViewedMonth, ctx_r2.monthOffset, 1))("showAdjacent", false)("value", ctx_r2.value);
    ɵɵtwoWayProperty("hoveredItem", ctx_r2.hoveredItem);
  }
}
function TuiCalendarRange_ng_template_5_button_1_tui_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 8);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵstyleProp("font-size", 1, "rem");
    ɵɵproperty("icon", ctx_r2.icons.check);
  }
}
function TuiCalendarRange_ng_template_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function TuiCalendarRange_ng_template_5_button_1_Template_button_click_0_listener() {
      const item_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onItemSelect(item_r5));
    })("mousedown.prevent.zoneless", function TuiCalendarRange_ng_template_5_button_1_Template_button_mousedown_prevent_zoneless_0_listener() {
      ɵɵrestoreView(_r4);
      return ɵɵresetView(0);
    });
    ɵɵtext(1);
    ɵɵtemplate(2, TuiCalendarRange_ng_template_5_button_1_tui_icon_2_Template, 1, 3, "tui-icon", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("aria-checked", ctx_r2.isItemActive(item_r5));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r5, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemActive(item_r5));
  }
}
function TuiCalendarRange_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 4);
    ɵɵtemplate(1, TuiCalendarRange_ng_template_5_button_1_Template, 3, 3, "button", 5);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "tuiMapper");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("flex", 1);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBindV(3, 5, ɵɵpureFunction6(12, _c2, ctx_r2.items, ctx_r2.mapper, ctx_r2.min, ctx_r2.max, ctx_r2.minLength, ɵɵpipeBind1(2, 3, ctx_r2.otherDateText$))));
  }
}
var calculateDisabledItemHandler = (disabledItemHandler, value, minLength) => (item) => {
  if (!value || value instanceof TuiDayRange || !minLength) {
    return disabledItemHandler(item);
  }
  const negativeMinLength = Object.fromEntries(Object.entries(minLength).map(([key, value2]) => [key, -value2]));
  const disabledBefore = value.append(negativeMinLength).append({
    day: 1
  });
  const disabledAfter = value.append(minLength).append({
    day: -1
  });
  const inDisabledRange = disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);
  return inDisabledRange || disabledItemHandler(item);
};
var TUI_DAY_CAPS_MAPPER = (current, value, maxLength, backwards) => {
  if (value instanceof TuiDay || !value?.isSingleDay || !maxLength) {
    return backwards ? current || TUI_FIRST_DAY : current || TUI_LAST_DAY;
  }
  const negativeMaxLength = Object.fromEntries(Object.entries(maxLength).map(([key, value2]) => [key, -value2]));
  const dateShift = value.from.append(backwards ? negativeMaxLength : maxLength).append({
    day: !backwards ? -1 : 1
  });
  if (backwards) {
    return dateShift.dayBefore(current || TUI_FIRST_DAY) ? current || TUI_FIRST_DAY : dateShift;
  }
  if (!current) {
    return dateShift;
  }
  return dateShift.dayAfter(current) ? current : dateShift;
};
var TuiCalendarRange = class _TuiCalendarRange {
  constructor() {
    this.selectedPeriod = null;
    this.value = null;
    this.previousValue = null;
    this.hoveredItem = null;
    this.month = TuiMonth.currentLocal();
    this.otherDateText$ = inject(TUI_OTHER_DATE_TEXT);
    this.icons = inject(TUI_COMMON_ICONS);
    this.capsMapper = TUI_DAY_CAPS_MAPPER;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.markerHandler = null;
    this.items = [];
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.minLength = null;
    this.maxLength = null;
    this.item = null;
    this.valueChange = new EventEmitter();
    this.itemChange = new EventEmitter();
    this.monthOffset = (value, month) => value.append({
      month
    });
    this.mapper = (items, min, max, minLength, otherDateText) => [...items.filter((item) => (minLength === null || item.range.from.append(minLength).append({
      day: -1
    }).daySameOrBefore(item.range.to)) && (min === null || item.range.to.daySameOrAfter(min)) && (max === null || item.range.from.daySameOrBefore(max))), otherDateText || ""];
    inject(TUI_CALENDAR_DATE_STREAM, {
      optional: true
    })?.pipe(tuiWatch(), takeUntilDestroyed()).subscribe((value) => {
      this.value = value;
      this.initDefaultViewedMonth();
    });
  }
  set valueSetter(value) {
    this.value = value;
  }
  set defaultViewedMonth(month) {
    if (!this.value) {
      this.month = month;
    }
  }
  get defaultViewedMonth() {
    return this.month;
  }
  /**
   * @deprecated use `item`
   */
  get selectedActivePeriod() {
    return this.selectedPeriod;
  }
  /**
   * @deprecated use `item`
   */
  set selectedActivePeriod(period) {
    this.selectedPeriod = period;
  }
  ngOnChanges() {
    if (!this.value) {
      this.initDefaultViewedMonth();
    }
  }
  ngOnInit() {
    this.initDefaultViewedMonth();
  }
  get calculatedDisabledItemHandler() {
    return this.calculateDisabledItemHandler(this.disabledItemHandler, this.value, this.minLength);
  }
  onEsc(event) {
    if (event.key !== "Escape" || !(this.value instanceof TuiDay)) {
      return;
    }
    event.stopPropagation();
    this.value = this.previousValue;
  }
  isItemActive(item) {
    const {
      activePeriod
    } = this;
    return tuiIsString(item) && activePeriod === null || activePeriod === item || activePeriod?.toString() === item.toString();
  }
  onItemSelect(item) {
    if (!tuiIsString(item)) {
      this.selectedActivePeriod = item;
      this.updateValue(item.range.dayLimit(this.min, this.max));
      this.itemChange.emit(item);
    } else if (this.activePeriod !== null) {
      this.selectedActivePeriod = null;
      this.updateValue(null);
      this.itemChange.emit(null);
    }
    this.initDefaultViewedMonth();
  }
  onMonthChange(month) {
    this.month = month;
  }
  onDayClick(day) {
    this.previousValue = this.value;
    this.selectedActivePeriod = null;
    if (this.value instanceof TuiDay) {
      const range = TuiDayRange.sort(this.value, day);
      this.value = range;
      this.updateValue(range);
      this.itemChange.emit(this.findItemByDayRange(range));
    } else {
      this.value = day;
    }
  }
  updateValue(value) {
    this.value = value;
    this.valueChange.emit(value);
  }
  get activePeriod() {
    return this.item ?? this.selectedActivePeriod ?? (this.items.find((item) => tuiNullableSame(this.value instanceof TuiDay ? new TuiDayRange(this.value, this.value) : this.value, item.range, (a, b) => a.from.daySame(b.from.dayLimit(this.min, this.max)) && a.to.daySame(b.to.dayLimit(this.min, this.max)))) || null);
  }
  calculateDisabledItemHandler(disabledItemHandler, value, minLength) {
    return calculateDisabledItemHandler(disabledItemHandler, value, minLength);
  }
  initDefaultViewedMonth() {
    if (this.value instanceof TuiDay) {
      this.month = this.value;
    } else if (this.value) {
      this.month = this.items.length ? this.value.to : this.value.from;
    } else if (this.max && this.month.monthSameOrAfter(this.max)) {
      this.month = this.items.length ? this.max : this.max.append({
        month: -1
      });
    } else if (this.min && this.month.monthSameOrBefore(this.min)) {
      this.month = this.min;
    }
  }
  findItemByDayRange(dayRange) {
    return this.items.find((item) => dayRange.daySame(item.range)) ?? null;
  }
  static {
    this.ɵfac = function TuiCalendarRange_Factory(t) {
      return new (t || _TuiCalendarRange)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarRange,
      selectors: [["tui-calendar-range"]],
      hostBindings: function TuiCalendarRange_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.capture", function TuiCalendarRange_keydown_capture_HostBindingHandler($event) {
            return ctx.onEsc($event);
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        disabledItemHandler: "disabledItemHandler",
        markerHandler: "markerHandler",
        items: "items",
        min: "min",
        max: "max",
        minLength: "minLength",
        maxLength: "maxLength",
        item: "item",
        valueSetter: [0, "value", "valueSetter"],
        defaultViewedMonth: "defaultViewedMonth"
      },
      outputs: {
        valueChange: "valueChange",
        itemChange: "itemChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiCalendarSheetOptionsProvider({
        rangeMode: true
      })]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 7,
      vars: 37,
      consts: [["presets", ""], ["automation-id", "tui-calendar-range__calendar", 1, "t-calendar", 3, "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.zoneless", "disabledItemHandler", "markerHandler", "max", "maxViewedMonth", "min", "month", "showAdjacent", "value", "hoveredItem"], [3, "disabledItemHandler", "markerHandler", "max", "min", "minViewedMonth", "month", "showAdjacent", "value", "hoveredItem", "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.zoneless", 4, "ngIf", "ngIfElse"], [3, "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.zoneless", "disabledItemHandler", "markerHandler", "max", "min", "minViewedMonth", "month", "showAdjacent", "value", "hoveredItem"], ["automation-id", "tui-calendar-range__menu", "role", "menu"], ["automation-id", "tui-calendar-range__menu__item", "role", "menuitemradio", "tuiOption", "", "type", "button", 3, "click", "mousedown.prevent.zoneless", 4, "ngFor", "ngForOf"], ["automation-id", "tui-calendar-range__menu__item", "role", "menuitemradio", "tuiOption", "", "type", "button", 3, "click", "mousedown.prevent.zoneless"], ["automation-id", "tui-calendar-range__checkmark", 3, "icon", "font-size", 4, "ngIf"], ["automation-id", "tui-calendar-range__checkmark", 3, "icon"]],
      template: function TuiCalendarRange_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "tui-calendar", 1);
          ɵɵpipe(1, "tuiMapper");
          ɵɵpipe(2, "tuiMapper");
          ɵɵpipe(3, "tuiMapper");
          ɵɵtwoWayListener("hoveredItemChange", function TuiCalendarRange_Template_tui_calendar_hoveredItemChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.hoveredItem, $event) || (ctx.hoveredItem = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("dayClick", function TuiCalendarRange_Template_tui_calendar_dayClick_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onDayClick($event));
          })("monthChange", function TuiCalendarRange_Template_tui_calendar_monthChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onMonthChange($event));
          })("mousedown.prevent.zoneless", function TuiCalendarRange_Template_tui_calendar_mousedown_prevent_zoneless_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(0);
          });
          ɵɵelementEnd();
          ɵɵtemplate(4, TuiCalendarRange_tui_calendar_4_Template, 5, 39, "tui-calendar", 2)(5, TuiCalendarRange_ng_template_5_Template, 4, 19, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const presets_r6 = ɵɵreference(6);
          ɵɵproperty("disabledItemHandler", ctx.calculatedDisabledItemHandler)("markerHandler", ctx.markerHandler)("max", ɵɵpipeBindV(1, 11, ɵɵpureFunction4(27, _c0, ctx.max, ctx.capsMapper, ctx.value, ctx.maxLength)))("maxViewedMonth", ctx.items.length ? null : ɵɵpipeBind3(2, 17, ctx.defaultViewedMonth, ctx.monthOffset, -1))("min", ɵɵpipeBindV(3, 21, ɵɵpureFunction4(32, _c1, ctx.min, ctx.capsMapper, ctx.value, ctx.maxLength)))("month", ctx.defaultViewedMonth)("showAdjacent", !!ctx.items.length)("value", ctx.value);
          ɵɵtwoWayProperty("hoveredItem", ctx.hoveredItem);
          ɵɵadvance(4);
          ɵɵproperty("ngIf", !ctx.items.length)("ngIfElse", presets_r6);
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, TuiCalendar, TuiDataListComponent, TuiOption, TuiIcon, TuiMapperPipe],
      styles: ["[_nghost-%COMP%]{display:flex;min-inline-size:30rem}.t-calendar[_ngcontent-%COMP%]{border-inline-end:1px solid var(--tui-border-normal)}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiCalendarRange.prototype, "calculateDisabledItemHandler", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarRange, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-range",
      imports: [AsyncPipe, NgForOf, NgIf, TuiCalendar, TuiDataList, TuiIcon, TuiMapperPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiCalendarSheetOptionsProvider({
        rangeMode: true
      })],
      host: {
        "(document:keydown.capture)": "onEsc($event)"
      },
      template: '<tui-calendar\n    automation-id="tui-calendar-range__calendar"\n    class="t-calendar"\n    [disabledItemHandler]="calculatedDisabledItemHandler"\n    [markerHandler]="markerHandler"\n    [max]="max | tuiMapper: capsMapper : value : maxLength : false"\n    [maxViewedMonth]="items.length ? null : (defaultViewedMonth | tuiMapper: monthOffset : -1)"\n    [min]="min | tuiMapper: capsMapper : value : maxLength : true"\n    [month]="defaultViewedMonth"\n    [showAdjacent]="!!items.length"\n    [value]="value"\n    [(hoveredItem)]="hoveredItem"\n    (dayClick)="onDayClick($event)"\n    (monthChange)="onMonthChange($event)"\n    (mousedown.prevent.zoneless)="(0)"\n/>\n<tui-calendar\n    *ngIf="!items.length; else presets"\n    [disabledItemHandler]="calculatedDisabledItemHandler"\n    [markerHandler]="markerHandler"\n    [max]="max | tuiMapper: capsMapper : value : maxLength : false"\n    [min]="min | tuiMapper: capsMapper : value : maxLength : true"\n    [minViewedMonth]="defaultViewedMonth | tuiMapper: monthOffset : 1"\n    [month]="defaultViewedMonth | tuiMapper: monthOffset : 1"\n    [showAdjacent]="false"\n    [value]="value"\n    [(hoveredItem)]="hoveredItem"\n    (dayClick)="onDayClick($event)"\n    (monthChange)="onMonthChange($event.append({month: -1}))"\n    (mousedown.prevent.zoneless)="(0)"\n/>\n<ng-template #presets>\n    <tui-data-list\n        automation-id="tui-calendar-range__menu"\n        role="menu"\n        [style.flex]="1"\n    >\n        <button\n            *ngFor="let item of items | tuiMapper: mapper : min : max : minLength : (otherDateText$ | async)"\n            automation-id="tui-calendar-range__menu__item"\n            role="menuitemradio"\n            tuiOption\n            type="button"\n            [attr.aria-checked]="isItemActive(item)"\n            (click)="onItemSelect(item)"\n            (mousedown.prevent.zoneless)="(0)"\n        >\n            {{ item }}\n            <tui-icon\n                *ngIf="isItemActive(item)"\n                automation-id="tui-calendar-range__checkmark"\n                [icon]="icons.check"\n                [style.font-size.rem]="1"\n            />\n        </button>\n    </tui-data-list>\n</ng-template>\n',
      styles: [":host{display:flex;min-inline-size:30rem}.t-calendar{border-inline-end:1px solid var(--tui-border-normal)}\n"]
    }]
  }], function() {
    return [];
  }, {
    disabledItemHandler: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    minLength: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    itemChange: [{
      type: Output
    }],
    valueSetter: [{
      type: Input,
      args: ["value"]
    }],
    defaultViewedMonth: [{
      type: Input
    }],
    calculateDisabledItemHandler: []
  });
})();
var TuiDayRangePeriod = class {
  constructor(range, name, content) {
    this.range = range;
    this.name = name;
    this.content = content;
  }
  toString() {
    return this.name;
  }
};
function tuiCreateDefaultDayRangePeriods(periodTitles = ["For all the time", "Today", "Yesterday", "Current week", "Current month", "Previous month"]) {
  const today = TuiDay.currentLocal();
  const yesterday = today.append({
    day: -1
  });
  const startOfWeek = today.append({
    day: -today.dayOfWeek()
  });
  const endOfWeek = startOfWeek.append({
    day: 6
  });
  const startOfMonth = today.append({
    day: 1 - today.day
  });
  const endOfMonth = startOfMonth.append({
    month: 1,
    day: -1
  });
  const startOfLastMonth = startOfMonth.append({
    month: -1
  });
  return [new TuiDayRangePeriod(new TuiDayRange(TUI_FIRST_DAY, today), periodTitles[0]), new TuiDayRangePeriod(new TuiDayRange(today, today), periodTitles[1]), new TuiDayRangePeriod(new TuiDayRange(yesterday, yesterday), periodTitles[2]), new TuiDayRangePeriod(new TuiDayRange(startOfWeek, endOfWeek), periodTitles[3]), new TuiDayRangePeriod(new TuiDayRange(startOfMonth, endOfMonth), periodTitles[4]), new TuiDayRangePeriod(new TuiDayRange(startOfLastMonth, startOfMonth.append({
    day: -1
  })), periodTitles[5])];
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-element.mjs
var TuiElement = class _TuiElement {
  constructor() {
    this.nativeElement = tuiInjectElement();
    return new ElementRef(this.nativeElement);
  }
  static {
    this.ɵfac = function TuiElement_Factory(t) {
      return new (t || _TuiElement)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiElement,
      selectors: [["", "tuiElement", ""]],
      exportAs: ["elementRef"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElement, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiElement]",
      exportAs: "elementRef"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-data-list-wrapper.mjs
function TuiDataListWrapperComponent_tui_data_list_0_button_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiDataListWrapperComponent_tui_data_list_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5, 1);
    ɵɵlistener("click", function TuiDataListWrapperComponent_tui_data_list_0_button_1_Template_button_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.itemClick.emit(item_r2));
    });
    ɵɵelementStart(2, "span", 6);
    ɵɵtemplate(3, TuiDataListWrapperComponent_tui_data_list_0_button_1_ng_container_3_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const elementRef_r5 = ɵɵreference(1);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r2.disabledItemHandler(item_r2))("value", item_r2);
    ɵɵadvance(3);
    ɵɵproperty("polymorpheusOutlet", ctx_r2.itemContent)("polymorpheusOutletContext", ctx_r2.getContext(item_r2, elementRef_r5));
  }
}
function TuiDataListWrapperComponent_tui_data_list_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 3);
    ɵɵtemplate(1, TuiDataListWrapperComponent_tui_data_list_0_button_1_Template, 4, 4, "button", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("emptyContent", ctx_r2.emptyContent)("size", ctx_r2.size);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.$cast(ctx_r2.items));
  }
}
function TuiDataListWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 8);
  }
}
var _c02 = ["labels", ""];
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7, 1);
    ɵɵlistener("click", function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template_button_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.itemClick.emit(item_r2));
    });
    ɵɵtemplate(2, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const elementRef_r5 = ɵɵreference(1);
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r2.disabledItemHandler(item_r2))("value", item_r2);
    ɵɵadvance(2);
    ɵɵproperty("polymorpheusOutlet", ctx_r2.itemContent)("polymorpheusOutletContext", ctx_r2.getContext(item_r2, elementRef_r5));
  }
}
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-opt-group", 5);
    ɵɵtemplate(1, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template, 3, 4, "button", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("label", ctx_r2.labels[index_r7]);
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r6);
  }
}
function TuiDataListGroupWrapperComponent_tui_data_list_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 3);
    ɵɵtemplate(1, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_Template, 2, 2, "tui-opt-group", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("emptyContent", ctx_r2.emptyContent)("size", ctx_r2.size);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.items);
  }
}
function TuiDataListGroupWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 9);
  }
}
var _c12 = "[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}";
var TuiDataListWrapperComponent = class _TuiDataListWrapperComponent {
  constructor() {
    this.itemsHandlers = inject(TUI_ITEMS_HANDLERS);
    this.optionsQuery = EMPTY_QUERY;
    this.items = [];
    this.disabledItemHandler = this.itemsHandlers.disabledItemHandler;
    this.size = tuiInjectDataListSize();
    this.itemClick = new EventEmitter();
    this.itemContent = ({
      $implicit
    }) => this.itemsHandlers.stringify($implicit);
  }
  getContext($implicit, {
    nativeElement
  }) {
    return {
      $implicit,
      active: tuiIsNativeFocused(nativeElement)
    };
  }
  getOptions(includeDisabled = false) {
    return this.optionsQuery.filter(({
      disabled
    }) => includeDisabled || !disabled).map(({
      value
    }) => value).filter(tuiIsPresent);
  }
  $cast(items) {
    return items;
  }
  static {
    this.ɵfac = function TuiDataListWrapperComponent_Factory(t) {
      return new (t || _TuiDataListWrapperComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListWrapperComponent,
      selectors: [["tui-data-list-wrapper", 3, "labels", ""]],
      viewQuery: function TuiDataListWrapperComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiOption, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionsQuery = _t);
        }
      },
      inputs: {
        items: "items",
        disabledItemHandler: "disabledItemHandler",
        emptyContent: "emptyContent",
        size: "size",
        itemContent: "itemContent"
      },
      outputs: {
        itemClick: "itemClick"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListWrapperComponent)]), ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [["loading", ""], ["elementRef", "elementRef"], [3, "emptyContent", "size", 4, "ngIf", "ngIfElse"], [3, "emptyContent", "size"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "disabled", "value", "click", 4, "ngFor", "ngForOf"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "click", "disabled", "value"], [1, "t-content"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-data-list-wrapper__loader", 1, "t-loader"]],
      template: function TuiDataListWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDataListWrapperComponent_tui_data_list_0_Template, 2, 3, "tui-data-list", 2)(1, TuiDataListWrapperComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r6 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.items)("ngIfElse", loading_r6);
        }
      },
      dependencies: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataListComponent, TuiOption, TuiElement, TuiLoader],
      styles: ["[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListWrapperComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list-wrapper:not([labels])",
      imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListWrapperComponent)],
      template: '<tui-data-list\n    *ngIf="items; else loading"\n    [emptyContent]="emptyContent"\n    [size]="size"\n>\n    <button\n        *ngFor="let item of $cast(items)"\n        #elementRef="elementRef"\n        automation-id="tui-data-list-wrapper__option"\n        tuiElement\n        tuiOption\n        type="button"\n        [disabled]="disabledItemHandler(item)"\n        [value]="item"\n        (click)="itemClick.emit(item)"\n    >\n        <span class="t-content">\n            <ng-container *polymorpheusOutlet="itemContent as text; context: getContext(item, elementRef)">\n                {{ text }}\n            </ng-container>\n        </span>\n    </button>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader\n        automation-id="tui-data-list-wrapper__loader"\n        class="t-loader"\n    />\n</ng-template>\n',
      styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"]
    }]
  }], null, {
    optionsQuery: [{
      type: ViewChildren,
      args: [forwardRef(() => TuiOption)]
    }],
    items: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    emptyContent: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemContent: [{
      type: Input
    }]
  });
})();
var TuiDataListGroupWrapperComponent = class _TuiDataListGroupWrapperComponent extends TuiDataListWrapperComponent {
  constructor() {
    super(...arguments);
    this.labels = [];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDataListGroupWrapperComponent_BaseFactory;
      return function TuiDataListGroupWrapperComponent_Factory(t) {
        return (ɵTuiDataListGroupWrapperComponent_BaseFactory || (ɵTuiDataListGroupWrapperComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiDataListGroupWrapperComponent)))(t || _TuiDataListGroupWrapperComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListGroupWrapperComponent,
      selectors: [["tui-data-list-wrapper", "labels", ""]],
      inputs: {
        labels: "labels"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListGroupWrapperComponent)]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      attrs: _c02,
      decls: 3,
      vars: 2,
      consts: [["loading", ""], ["elementRef", "elementRef"], [3, "emptyContent", "size", 4, "ngIf", "ngIfElse"], [3, "emptyContent", "size"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "disabled", "value", "click", 4, "ngFor", "ngForOf"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "click", "disabled", "value"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-loader"]],
      template: function TuiDataListGroupWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDataListGroupWrapperComponent_tui_data_list_0_Template, 2, 3, "tui-data-list", 2)(1, TuiDataListGroupWrapperComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r8 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.items)("ngIfElse", loading_r8);
        }
      },
      dependencies: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataListComponent, TuiOption, TuiOptGroup, TuiElement, TuiLoader],
      styles: [_c12],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListGroupWrapperComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list-wrapper[labels]",
      imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListGroupWrapperComponent)],
      template: '<tui-data-list\n    *ngIf="items; else loading"\n    [emptyContent]="emptyContent"\n    [size]="size"\n>\n    <tui-opt-group\n        *ngFor="let group of items; let index = index"\n        [label]="labels[index]"\n    >\n        <button\n            *ngFor="let item of group"\n            #elementRef="elementRef"\n            automation-id="tui-data-list-wrapper__option"\n            tuiElement\n            tuiOption\n            type="button"\n            [disabled]="disabledItemHandler(item)"\n            [value]="item"\n            (click)="itemClick.emit(item)"\n        >\n            <ng-container *polymorpheusOutlet="itemContent as text; context: getContext(item, elementRef)">\n                {{ text }}\n            </ng-container>\n        </button>\n    </tui-opt-group>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader class="t-loader" />\n</ng-template>\n',
      styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"]
    }]
  }], null, {
    labels: [{
      type: Input
    }]
  });
})();
var TuiDataListWrapper = [TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent, TuiDataListDirective];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-slider.mjs
var _c03 = ["type", "range", "tuiSlider", ""];
var _c13 = ["tuiSliderThumbLabel", ""];
var _c22 = ["*", [["input", "type", "range"]]];
var _c3 = ["*", "input[type=range]"];
function TuiSliderThumbLabel_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var TUI_FLOATING_PRECISION = 7;
function tuiFindKeyStepsBoundariesByFn(keySteps, fn) {
  const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));
  const lowerStep = keySteps[keyStepUpperIndex - 1] || keySteps[0];
  const upperStep = keySteps[keyStepUpperIndex] || keySteps[keySteps.length - 1] || [0, 0];
  return [lowerStep, upperStep];
}
function tuiPercentageToKeyStepValue(valuePercentage, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage);
  const ratio = (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
  const controlValue = (upperStepValue - lowerStepValue) * ratio + lowerStepValue;
  return tuiRound(controlValue, TUI_FLOATING_PRECISION);
}
function tuiKeyStepValueToPercentage(value, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([_, keyStepValue]) => value <= keyStepValue);
  const ratio = (value - lowerStepValue) / (upperStepValue - lowerStepValue) || 0;
  return (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;
}
function tuiCreateKeyStepsTransformer(keySteps, slider) {
  return new class {
    fromControlValue(controlValue) {
      const newValuePercentage = tuiKeyStepValueToPercentage(controlValue, keySteps);
      return newValuePercentage * (slider.max - slider.min) / 100 + slider.min;
    }
    toControlValue(nativeValue) {
      const valueRatio = (nativeValue - slider.min) / (slider.max - slider.min) || 0;
      return tuiPercentageToKeyStepValue(valueRatio * 100, keySteps);
    }
  }();
}
var TUI_SLIDER_DEFAULT_OPTIONS = {
  size: "m",
  trackColor: "var(--tui-background-neutral-2)"
};
var TUI_SLIDER_OPTIONS = tuiCreateToken(TUI_SLIDER_DEFAULT_OPTIONS);
function tuiSliderOptionsProvider(options) {
  return tuiProvideOptions(TUI_SLIDER_OPTIONS, options, TUI_SLIDER_DEFAULT_OPTIONS);
}
var TuiSliderComponent = class _TuiSliderComponent {
  constructor() {
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.options = inject(TUI_SLIDER_OPTIONS);
    this.size = this.options.size;
    this.segments = 1;
    this.el = tuiInjectElement();
    this.keySteps = inject(TuiSliderKeyStepsBase, {
      self: true,
      optional: true
    });
    if (this.control instanceof NgModel) {
      this.control.valueChanges?.pipe(tuiWatch(), take(1)).subscribe();
    }
  }
  get valueRatio() {
    return (this.value - this.min) / (this.max - this.min) || 0;
  }
  get min() {
    return Number(this.el.min);
  }
  set min(x) {
    this.el.min = String(x);
  }
  get max() {
    return Number(this.el.max || 100);
  }
  set max(x) {
    this.el.max = String(x);
  }
  get step() {
    return Number(this.el.step) || 1;
  }
  set step(x) {
    this.el.step = String(x);
  }
  get value() {
    if (!this.keySteps && this.control instanceof NgModel) {
      return this.control.viewModel;
    }
    return Number(this.el.value) || 0;
  }
  set value(newValue) {
    this.el.value = `${newValue}`;
  }
  get segmentWidth() {
    return 100 / Math.max(1, this.segments);
  }
  static {
    this.ɵfac = function TuiSliderComponent_Factory(t) {
      return new (t || _TuiSliderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSliderComponent,
      selectors: [["input", "type", "range", "tuiSlider", ""]],
      hostVars: 7,
      hostBindings: function TuiSliderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiSliderComponent_input_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--tui-slider-track-color", ctx.options.trackColor)("--tui-slider-segment-width", ctx.segmentWidth, "%")("--tui-slider-fill-ratio", ctx.valueRatio);
        }
      },
      inputs: {
        size: "size",
        segments: "segments"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiSliderComponent)]), ɵɵStandaloneFeature],
      attrs: _c03,
      decls: 0,
      vars: 0,
      template: function TuiSliderComponent_Template(rf, ctx) {
      },
      styles: ['[_nghost-%COMP%]{position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:.125rem;padding:.4375rem 0;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}[data-size=s][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .5rem);inline-size:.5rem;block-size:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=s][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[data-size=m][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .75rem);inline-size:.75rem;block-size:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=m][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[_nghost-%COMP%]::-webkit-slider-container{border-radius:inherit}[data-size=m][_nghost-%COMP%]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.25rem,0;background-size:calc(100% - .75rem),calc(100% - .75rem),auto}[data-size=s][_nghost-%COMP%]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.125rem,0;background-size:calc(100% - .5rem),calc(100% - .5rem),auto}[data-size=m][_nghost-%COMP%]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.25rem;background-size:calc(100% - .75rem)}[data-size=s][_nghost-%COMP%]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.125rem;background-size:calc(100% - .5rem)}[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb:hover, :active:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb:hover, :active:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=m][_nghost-%COMP%]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb:hover, :active:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[data-size=m][_nghost-%COMP%]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=s][_nghost-%COMP%]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb:hover, :active:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[data-size=s][_nghost-%COMP%]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[_nghost-%COMP%]::-moz-range-progress{border-radius:inherit}[_nghost-%COMP%]::-moz-range-progress{block-size:.125rem;background:currentColor;border-top-right-radius:0;border-bottom-right-radius:0}tui-textfield   [type="range"][_nghost-%COMP%]{--tui-radius: var(--tui-radius-m);position:absolute;top:100%;left:calc(var(--tui-radius) / 2);right:0;inline-size:calc(100% - calc(var(--tui-radius) / 2));box-sizing:border-box;block-size:1rem;margin:-.5625rem 0 0;padding:0;border-top-left-radius:0;border-bottom-left-radius:calc(var(--tui-radius) * 10) calc(var(--tui-radius) * 2);pointer-events:auto}tui-textfield[data-size="l"]   [type="range"][_nghost-%COMP%]{--tui-radius: var(--tui-radius-l)}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "input[type=range][tuiSlider]",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiSliderComponent)],
      host: {
        /**
         * For change detection.
         * Webkit does not have built-in method for customization of filling progress (as Firefox).
         * We draw filling of progress by `background: linear-gradient(...)` of the track.
         * This function triggers change detection (for {@link valueRatio} getter) when we drag thumb of the input.
         */
        "(input)": "0",
        "[style.--tui-slider-track-color]": "options.trackColor",
        "[style.--tui-slider-segment-width.%]": "segmentWidth",
        "[style.--tui-slider-fill-ratio]": "valueRatio",
        "[attr.data-size]": "size"
      },
      styles: [':host{position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:.125rem;padding:.4375rem 0;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m)}:host:active{cursor:ew-resize}:host:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}:host[data-size=s]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .5rem);inline-size:.5rem;block-size:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=s]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host[data-size=m]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .75rem);inline-size:.75rem;block-size:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=m]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host::-webkit-slider-container{border-radius:inherit}:host[data-size=m]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.25rem,0;background-size:calc(100% - .75rem),calc(100% - .75rem),auto}:host[data-size=s]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.125rem,0;background-size:calc(100% - .5rem),calc(100% - .5rem),auto}:host[data-size=m]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.25rem;background-size:calc(100% - .75rem)}:host[data-size=s]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.125rem;background-size:calc(100% - .5rem)}:host[data-size=m]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled):host[data-size=m]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=m]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled):host[data-size=s]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=s]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=m]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=m]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=m]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=s]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=s]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host::-moz-range-progress{border-radius:inherit}:host::-moz-range-progress{block-size:.125rem;background:currentColor;border-top-right-radius:0;border-bottom-right-radius:0}:host-context(tui-textfield) :host([type="range"]){--tui-radius: var(--tui-radius-m);position:absolute;top:100%;left:calc(var(--tui-radius) / 2);right:0;inline-size:calc(100% - calc(var(--tui-radius) / 2));box-sizing:border-box;block-size:1rem;margin:-.5625rem 0 0;padding:0;border-top-left-radius:0;border-bottom-left-radius:calc(var(--tui-radius) * 10) calc(var(--tui-radius) * 2);pointer-events:auto}:host-context(tui-textfield[data-size="l"]) :host([type="range"]){--tui-radius: var(--tui-radius-l)}\n']
    }]
  }], function() {
    return [];
  }, {
    size: [{
      type: Input
    }],
    segments: [{
      type: Input
    }]
  });
})();
var TuiSliderKeyStepsBase = class _TuiSliderKeyStepsBase {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.step = 1;
    this.transformer = signal(null);
    this.value = toSignal(timer(0).pipe(switchMap(() => tuiControlValue(this.control))));
  }
  get slider() {
    return this.injector.get(TuiSliderComponent);
  }
  set keySteps(steps) {
    this.transformer.set(steps && tuiCreateKeyStepsTransformer(steps, this.slider));
    this.min = steps?.[0][1];
    this.max = steps?.[steps.length - 1]?.[1];
  }
  /**
   * TODO(v5): standardize logic between `TuiSlider` & `TuiInputSlider` (for non-linear slider `step` means percentage)
   * Add these host-bindings to `TuiSliderKeyStepsBase`:
   * ```
   * host: {
   *     '[attr.min]': '0',
   *     '[attr.step]': '1',
   *     '[attr.max]': 'totalSteps',
   * },
   * ```
   */
  get totalSteps() {
    return this.step ? Math.round(100 / this.step) : Infinity;
  }
  takeStep(coefficient) {
    const newValue = this.slider.value + coefficient;
    return this.transformer()?.toControlValue(this.slider.value + coefficient) ?? newValue;
  }
  static {
    this.ɵfac = function TuiSliderKeyStepsBase_Factory(t) {
      return new (t || _TuiSliderKeyStepsBase)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderKeyStepsBase,
      selectors: [["input", "tuiSlider", "", "keySteps", ""]],
      hostVars: 3,
      hostBindings: function TuiSliderKeyStepsBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value());
        }
      },
      inputs: {
        step: [2, "step", "step", (x) => x === "any" ? null : x],
        keySteps: "keySteps"
      },
      standalone: true,
      features: [ɵɵInputTransformsFeature]
    });
  }
};
__decorate([tuiPure], TuiSliderKeyStepsBase.prototype, "slider", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeyStepsBase, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiSlider][keySteps]",
      host: {
        "[attr.aria-valuemin]": "min",
        "[attr.aria-valuemax]": "max",
        "[attr.aria-valuenow]": "value()"
      }
    }]
  }], null, {
    step: [{
      type: Input,
      args: [{
        transform: (x) => x === "any" ? null : x
      }]
    }],
    slider: [],
    keySteps: [{
      type: Input
    }]
  });
})();
var TuiSliderKeySteps = class _TuiSliderKeySteps extends TuiControl {
  constructor() {
    super(...arguments);
    this.slider = inject(forwardRef(() => TuiSliderComponent));
  }
  set keySteps(steps) {
    this.transformer = tuiCreateKeyStepsTransformer(steps, this.slider);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSliderKeySteps_BaseFactory;
      return function TuiSliderKeySteps_Factory(t) {
        return (ɵTuiSliderKeySteps_BaseFactory || (ɵTuiSliderKeySteps_BaseFactory = ɵɵgetInheritedFactory(_TuiSliderKeySteps)))(t || _TuiSliderKeySteps);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderKeySteps,
      selectors: [["input", "tuiSlider", "", "keySteps", "", "ngModel", ""], ["input", "tuiSlider", "", "keySteps", "", "formControl", ""], ["input", "tuiSlider", "", "keySteps", "", "formControlName", ""]],
      hostVars: 2,
      hostBindings: function TuiSliderKeySteps_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("blur", function TuiSliderKeySteps_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("input", function TuiSliderKeySteps_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("change", function TuiSliderKeySteps_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("value", ctx.value())("disabled", ctx.disabled());
        }
      },
      inputs: {
        keySteps: "keySteps"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider(0)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeySteps, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiSlider][keySteps][ngModel],input[tuiSlider][keySteps][formControl],input[tuiSlider][keySteps][formControlName]",
      providers: [tuiFallbackValueProvider(0)],
      host: {
        "[value]": "this.value()",
        "[disabled]": "disabled()",
        "(blur)": "onTouched()",
        "(input)": "onChange($event.target.value)",
        "(change)": "onChange($event.target.value)"
      }
    }]
  }], null, {
    keySteps: [{
      type: Input
    }]
  });
})();
var SLIDER_INTERACTION_KEYS = /* @__PURE__ */ new Set(["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp"]);
var TuiSliderReadonly = class _TuiSliderReadonly {
  constructor() {
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.readonly = true;
    const touchStart$ = tuiTypedFromEvent(this.el, "touchstart", {
      passive: false
    });
    const touchMove$ = tuiTypedFromEvent(this.doc, "touchmove", {
      passive: false
    });
    const touchEnd$ = tuiTypedFromEvent(this.doc, "touchend", {
      passive: true
    });
    const shouldPreventMove$ = merge(touchStart$.pipe(tap((e) => this.preventEvent(e)), map(TUI_TRUE_HANDLER)), touchEnd$.pipe(map(TUI_FALSE_HANDLER)));
    combineLatest([touchMove$, shouldPreventMove$]).pipe(filter(([_, shouldPreventMove]) => shouldPreventMove), takeUntilDestroyed()).subscribe(([moveEvent]) => this.preventEvent(moveEvent));
  }
  preventEvent(event) {
    if (event.cancelable && this.readonly) {
      event.preventDefault();
    }
  }
  preventKeyboardInteraction(event) {
    if (SLIDER_INTERACTION_KEYS.has(event.key)) {
      this.preventEvent(event);
    }
  }
  static {
    this.ɵfac = function TuiSliderReadonly_Factory(t) {
      return new (t || _TuiSliderReadonly)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderReadonly,
      selectors: [["input", "tuiSlider", "", "readonly", ""]],
      hostBindings: function TuiSliderReadonly_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function TuiSliderReadonly_keydown_HostBindingHandler($event) {
            return ctx.preventKeyboardInteraction($event);
          })("mousedown", function TuiSliderReadonly_mousedown_HostBindingHandler($event) {
            return ctx.preventEvent($event);
          });
        }
      },
      inputs: {
        readonly: [2, "readonly", "readonly", coerceBooleanProperty]
      },
      standalone: true,
      features: [ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderReadonly, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiSlider][readonly]",
      host: {
        "(keydown)": "preventKeyboardInteraction($event)",
        "(mousedown)": "preventEvent($event)"
      }
    }]
  }], function() {
    return [];
  }, {
    readonly: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }]
  });
})();
var TuiSliderThumbLabel = class _TuiSliderThumbLabel {
  ngAfterContentInit() {
    ngDevMode && console.assert(Boolean(this.control?.valueChanges), '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\nUse [(ngModel)] or [formControl] or formControlName for correct work.');
  }
  get size() {
    return this.slider?.size || "m";
  }
  get ratio() {
    return this.slider?.valueRatio || 0;
  }
  get ghostLeft() {
    return this.ratio * (this.slider?.el.offsetWidth || 0);
  }
  static {
    this.ɵfac = function TuiSliderThumbLabel_Factory(t) {
      return new (t || _TuiSliderThumbLabel)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSliderThumbLabel,
      selectors: [["", "tuiSliderThumbLabel", ""]],
      contentQueries: function TuiSliderThumbLabel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiSliderComponent, 5);
          ɵɵcontentQuery(dirIndex, NgControl, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slider = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c13,
      ngContentSelectors: _c3,
      decls: 5,
      vars: 8,
      consts: [[4, "ngIf"], [1, "t-ghost"]],
      template: function TuiSliderThumbLabel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c22);
          ɵɵtemplate(0, TuiSliderThumbLabel_ng_container_0_Template, 1, 0, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "div", 1);
          ɵɵprojection(3);
          ɵɵelementEnd();
          ɵɵprojection(4, 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 6, ctx.control == null ? null : ctx.control.valueChanges));
          ɵɵadvance(2);
          ɵɵstyleProp("--tui-slider-thumb-ratio", ctx.ratio)("left", ctx.ghostLeft, "px");
          ɵɵattribute("data-size", ctx.size);
        }
      },
      dependencies: [AsyncPipe, NgIf],
      styles: ["[_nghost-%COMP%]{position:relative}.t-ghost[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;margin:auto;border-radius:50%;pointer-events:none}.t-ghost[data-size=s][_ngcontent-%COMP%]{inline-size:.5rem;block-size:.5rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.5rem))}.t-ghost[data-size=m][_ngcontent-%COMP%]{inline-size:.75rem;block-size:.75rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.75rem))}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderThumbLabel, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "[tuiSliderThumbLabel]",
      imports: [AsyncPipe, NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="control?.valueChanges | async" />\n\n<div\n    class="t-ghost"\n    [attr.data-size]="size"\n    [style.--tui-slider-thumb-ratio]="ratio"\n    [style.left.px]="ghostLeft"\n>\n    <ng-content />\n</div>\n\n<ng-content select="input[type=range]" />\n',
      styles: [":host{position:relative}.t-ghost{position:absolute;top:0;bottom:0;margin:auto;border-radius:50%;pointer-events:none}.t-ghost[data-size=s]{inline-size:.5rem;block-size:.5rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.5rem))}.t-ghost[data-size=m]{inline-size:.75rem;block-size:.75rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.75rem))}\n"]
    }]
  }], null, {
    slider: [{
      type: ContentChild,
      args: [TuiSliderComponent]
    }],
    control: [{
      type: ContentChild,
      args: [NgControl]
    }]
  });
})();
var TuiSlider = [TuiSliderComponent, TuiSliderThumbLabel, TuiSliderKeyStepsBase, TuiSliderKeySteps, TuiSliderReadonly];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-range.mjs
var _c04 = () => ({
  standalone: true
});
var TuiRangeChange = class _TuiRangeChange {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.range = inject(TuiRange);
    this.pointerDown$ = tuiTypedFromEvent(this.el, "pointerdown", {
      passive: true,
      capture: true
    });
    this.pointerMove$ = merge(tuiTypedFromEvent(this.doc, "touchmove").pipe(filter(({
      touches
    }) => touches.length === 1), map(({
      touches
    }) => touches[0]), filter((event) => !!event)), tuiTypedFromEvent(this.doc, "mousemove"));
    this.pointerUp$ = merge(tuiTypedFromEvent(this.doc, "touchend", {
      passive: true
    }), tuiTypedFromEvent(this.doc, "mouseup", {
      passive: true
    }));
    this.activeThumbChange = new EventEmitter();
    let activeThumb;
    this.pointerDown$.pipe(tap(({
      clientX,
      target
    }) => {
      activeThumb = this.detectActiveThumb(clientX, target);
      this.activeThumbChange.emit(activeThumb);
      if (this.range.focusable) {
        this.el.focus();
      }
    }), switchMap((event) => this.pointerMove$.pipe(startWith(event))), map(({
      clientX
    }) => this.getFractionFromEvents(clientX ?? 0)), takeUntil(this.pointerUp$), repeat(), takeUntilDestroyed()).subscribe((fraction) => {
      const value = this.range.toValue(fraction);
      this.range.processValue(value, activeThumb === "right");
    });
  }
  getFractionFromEvents(clickClientX) {
    const hostRect = this.el.getBoundingClientRect();
    const value = clickClientX - hostRect.left;
    const total = hostRect.width;
    return tuiClamp(tuiRound(value / total, TUI_FLOATING_PRECISION), 0, 1);
  }
  detectActiveThumb(clientX, target) {
    const [leftSliderRef, rightSliderRef] = this.range.slidersRefs;
    switch (target) {
      case leftSliderRef?.nativeElement:
        return "left";
      case rightSliderRef?.nativeElement:
        return "right";
      default:
        return this.findNearestActiveThumb(clientX);
    }
  }
  findNearestActiveThumb(clientX) {
    const fraction = this.getFractionFromEvents(clientX);
    const deltaLeft = fraction * 100 - this.range.left();
    const deltaRight = fraction * 100 - 100 + this.range.right();
    return Math.abs(deltaLeft) > Math.abs(deltaRight) || deltaRight > 0 || this.range.left() === 0 && this.range.right() === 100 ? "right" : "left";
  }
  static {
    this.ɵfac = function TuiRangeChange_Factory(t) {
      return new (t || _TuiRangeChange)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRangeChange,
      outputs: {
        activeThumbChange: "activeThumbChange"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRangeChange, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], function() {
    return [];
  }, {
    activeThumbChange: [{
      type: Output
    }]
  });
})();
var TuiRange = class _TuiRange extends TuiControl {
  constructor() {
    super(...arguments);
    this.changes = signal(1);
    this.el = tuiInjectElement();
    this.options = inject(TUI_SLIDER_OPTIONS);
    this.lastActiveThumb = "right";
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.size = this.options.size;
    this.segments = 1;
    this.keySteps = null;
    this.focusable = true;
    this.margin = 0;
    this.limit = Infinity;
    this.slidersRefs = EMPTY_QUERY;
    this.left = computed(() => this.toPercent(this.value()[0]));
    this.right = computed(() => 100 - this.toPercent(this.value()[1]));
  }
  ngOnChanges() {
    this.changes.set(this.changes() + 1);
  }
  processValue(value, right) {
    if (right) {
      this.updateEnd(value);
    } else {
      this.updateStart(value);
    }
    this.lastActiveThumb = right ? "right" : "left";
  }
  toValue(fraction) {
    return tuiPercentageToKeyStepValue(tuiClamp(tuiQuantize(fraction, this.fractionStep), 0, 1) * 100, this.computedKeySteps);
  }
  get fractionStep() {
    return this.step / (this.max - this.min);
  }
  get computedKeySteps() {
    return this.computePureKeySteps(this.keySteps, this.min, this.max);
  }
  get segmentWidthRatio() {
    return 1 / this.segments;
  }
  changeByStep(coefficient, target) {
    const [sliderLeftRef, sliderRightRef] = this.slidersRefs;
    const leftThumbElement = sliderLeftRef?.nativeElement;
    const rightThumbElement = sliderRightRef?.nativeElement;
    const isRightThumb = target === this.el ? this.lastActiveThumb === "right" : target === rightThumbElement;
    const activeThumbElement = isRightThumb ? rightThumbElement : leftThumbElement;
    const previousValue = isRightThumb ? this.value()[1] : this.value()[0];
    const previousFraction = this.toPercent(previousValue) / 100;
    const newFractionValue = previousFraction + coefficient * this.fractionStep;
    this.processValue(this.toValue(newFractionValue), isRightThumb);
    activeThumbElement?.focus();
  }
  toPercent(value) {
    return this.changes() && tuiKeyStepValueToPercentage(value, this.computedKeySteps);
  }
  computePureKeySteps(keySteps, min, max) {
    return keySteps || [[0, min], [100, max]];
  }
  updateStart(value) {
    const newValue = Math.min(value, this.value()[1]);
    const distance = this.value()[1] - newValue;
    if (!this.checkDistance(distance)) {
      return;
    }
    this.onChange([newValue, this.value()[1]]);
  }
  updateEnd(value) {
    const newValue = Math.max(value, this.value()[0]);
    const distance = newValue - this.value()[0];
    if (!this.checkDistance(distance)) {
      return;
    }
    this.onChange([this.value()[0], newValue]);
  }
  checkDistance(distance) {
    return tuiClamp(distance, this.margin, this.limit) === distance;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiRange_BaseFactory;
      return function TuiRange_Factory(t) {
        return (ɵTuiRange_BaseFactory || (ɵTuiRange_BaseFactory = ɵɵgetInheritedFactory(_TuiRange)))(t || _TuiRange);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRange,
      selectors: [["tui-range"]],
      viewQuery: function TuiRange_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiSliderComponent, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slidersRefs = _t);
        }
      },
      hostVars: 11,
      hostBindings: function TuiRange_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout", function TuiRange_focusout_HostBindingHandler() {
            return ctx.onTouched();
          })("keydown.arrowUp.prevent", function TuiRange_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(1, $event.target);
          })("keydown.arrowRight.prevent", function TuiRange_keydown_arrowRight_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(1, $event.target);
          })("keydown.arrowLeft.prevent", function TuiRange_keydown_arrowLeft_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(-1, $event.target);
          })("keydown.arrowDown.prevent", function TuiRange_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(-1, $event.target);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size)("tabindex", -1)("aria-disabled", ctx.disabled());
          ɵɵstyleProp("--t-left", ctx.left(), "%")("--t-right", ctx.right(), "%")("background", ctx.options.trackColor);
          ɵɵclassProp("_disabled", ctx.disabled());
        }
      },
      inputs: {
        min: "min",
        max: "max",
        step: "step",
        size: "size",
        segments: "segments",
        keySteps: "keySteps",
        focusable: "focusable",
        margin: "margin",
        limit: "limit"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider([0, 0])]), ɵɵHostDirectivesFeature([{
        directive: TuiRangeChange,
        outputs: ["activeThumbChange", "activeThumbChange"]
      }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 22,
      consts: [[1, "t-track"], ["automation-id", "tui-range__left", "readonly", "", "step", "any", "tuiSlider", "", "type", "range", 1, "t-thumb", 3, "disabled", "keySteps", "max", "min", "ngModel", "ngModelOptions", "size", "tabIndex"], ["automation-id", "tui-range__right", "readonly", "", "step", "any", "tuiSlider", "", "type", "range", 1, "t-thumb", 3, "disabled", "keySteps", "max", "min", "ngModel", "ngModelOptions", "size", "tabIndex"]],
      template: function TuiRange_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵelement(1, "input", 1)(2, "input", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵstyleProp("--t-bg-size-ratio", 1 - ctx.segmentWidthRatio)("--t-segment-width", ctx.segmentWidthRatio * 100, "%");
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled())("keySteps", ctx.computedKeySteps)("max", ctx.max)("min", ctx.min)("ngModel", ctx.value()[0])("ngModelOptions", ɵɵpureFunction0(20, _c04))("size", ctx.size)("tabIndex", ctx.focusable ? 0 : -1);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled())("keySteps", ctx.computedKeySteps)("max", ctx.max)("min", ctx.min)("ngModel", ctx.value()[1])("ngModelOptions", ɵɵpureFunction0(21, _c04))("size", ctx.size)("tabIndex", ctx.focusable ? 0 : -1);
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, TuiSliderComponent, TuiSliderKeyStepsBase, TuiSliderKeySteps, TuiSliderReadonly],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;block-size:.125rem;border-radius:var(--tui-radius-m);background:var(--tui-border-normal);cursor:pointer;outline:none;margin:.4375rem 0;touch-action:pan-x}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:after{content:"";position:absolute;top:-.4375rem;bottom:-.4375rem;inline-size:100%}._disabled[_nghost-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}[data-size=s][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]{position:relative;margin:0 .25rem;block-size:100%}[data-size=s][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:max(calc(var(--t-left) - 1px),1px);right:max(var(--t-right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.25rem}[data-size=s][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.125rem;right:.375rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--t-segment-width) / var(--t-bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--t-bg-size-ratio))}[data-size=m][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]{position:relative;margin:0 .375rem;block-size:100%}[data-size=m][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:max(calc(var(--t-left) - 1px),1px);right:max(var(--t-right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.375rem}[data-size=m][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.25rem;right:.5rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--t-segment-width) / var(--t-bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--t-bg-size-ratio))}.t-thumb[_ngcontent-%COMP%]{pointer-events:none;position:absolute;top:.0625rem;left:0;right:0;z-index:1;transform:translateY(-50%)}.t-thumb[_ngcontent-%COMP%]::-webkit-slider-thumb{pointer-events:all}.t-thumb[_ngcontent-%COMP%]::-moz-range-thumb{pointer-events:all}input[type=range].t-thumb[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-moz-range-track{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-moz-range-progress{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-ms-track{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-ms-fill-lower{background:transparent}.t-thumb[_ngcontent-%COMP%]:last-of-type{--tui-slider-thumb-transform: translateX(50%) translateX(1px)}.t-thumb[_ngcontent-%COMP%]:first-of-type{--tui-slider-thumb-transform: translateX(-50%) translateX(-1px)}._disabled[_nghost-%COMP%]   .t-thumb[_ngcontent-%COMP%]{opacity:1}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiRange.prototype, "computePureKeySteps", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRange, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-range",
      imports: [FormsModule, TuiSlider],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiFallbackValueProvider([0, 0])],
      hostDirectives: [{
        directive: TuiRangeChange,
        outputs: ["activeThumbChange"]
      }],
      host: {
        "[attr.data-size]": "size",
        "[attr.tabindex]": "-1",
        "[attr.aria-disabled]": "disabled()",
        "[style.--t-left.%]": "left()",
        "[style.--t-right.%]": "right()",
        "[style.background]": "options.trackColor",
        "[class._disabled]": "disabled()",
        "(focusout)": "onTouched()",
        "(keydown.arrowUp.prevent)": "changeByStep(1, $event.target)",
        "(keydown.arrowRight.prevent)": "changeByStep(1, $event.target)",
        "(keydown.arrowLeft.prevent)": "changeByStep(-1, $event.target)",
        "(keydown.arrowDown.prevent)": "changeByStep(-1, $event.target)"
      },
      template: '<div\n    class="t-track"\n    [style.--t-bg-size-ratio]="1 - segmentWidthRatio"\n    [style.--t-segment-width.%]="segmentWidthRatio * 100"\n>\n    <input\n        automation-id="tui-range__left"\n        readonly\n        step="any"\n        tuiSlider\n        type="range"\n        class="t-thumb"\n        [disabled]="disabled()"\n        [keySteps]="computedKeySteps"\n        [max]="max"\n        [min]="min"\n        [ngModel]="value()[0]"\n        [ngModelOptions]="{standalone: true}"\n        [size]="size"\n        [tabIndex]="focusable ? 0 : -1"\n    />\n    <input\n        automation-id="tui-range__right"\n        readonly\n        step="any"\n        tuiSlider\n        type="range"\n        class="t-thumb"\n        [disabled]="disabled()"\n        [keySteps]="computedKeySteps"\n        [max]="max"\n        [min]="min"\n        [ngModel]="value()[1]"\n        [ngModelOptions]="{standalone: true}"\n        [size]="size"\n        [tabIndex]="focusable ? 0 : -1"\n    />\n</div>\n',
      styles: [':host{position:relative;display:block;block-size:.125rem;border-radius:var(--tui-radius-m);background:var(--tui-border-normal);cursor:pointer;outline:none;margin:.4375rem 0;touch-action:pan-x}:host:active{cursor:ew-resize}:host:after{content:"";position:absolute;top:-.4375rem;bottom:-.4375rem;inline-size:100%}:host._disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}:host[data-size=s] .t-track{position:relative;margin:0 .25rem;block-size:100%}:host[data-size=s] .t-track:before{content:"";position:absolute;top:0;left:max(calc(var(--t-left) - 1px),1px);right:max(var(--t-right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.25rem}:host[data-size=s] .t-track:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.125rem;right:.375rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--t-segment-width) / var(--t-bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--t-bg-size-ratio))}:host[data-size=m] .t-track{position:relative;margin:0 .375rem;block-size:100%}:host[data-size=m] .t-track:before{content:"";position:absolute;top:0;left:max(calc(var(--t-left) - 1px),1px);right:max(var(--t-right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.375rem}:host[data-size=m] .t-track:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.25rem;right:.5rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--t-segment-width) / var(--t-bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--t-bg-size-ratio))}.t-thumb{pointer-events:none;position:absolute;top:.0625rem;left:0;right:0;z-index:1;transform:translateY(-50%)}.t-thumb::-webkit-slider-thumb{pointer-events:all}.t-thumb::-moz-range-thumb{pointer-events:all}input[type=range].t-thumb::-webkit-slider-runnable-track{background:transparent}input[type=range].t-thumb::-moz-range-track{background:transparent}input[type=range].t-thumb::-moz-range-progress{background:transparent}input[type=range].t-thumb::-ms-track{background:transparent}input[type=range].t-thumb::-ms-fill-lower{background:transparent}.t-thumb:last-of-type{--tui-slider-thumb-transform: translateX(50%) translateX(1px)}.t-thumb:first-of-type{--tui-slider-thumb-transform: translateX(-50%) translateX(-1px)}:host._disabled .t-thumb{opacity:1}\n']
    }]
  }], null, {
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    segments: [{
      type: Input
    }],
    keySteps: [{
      type: Input
    }],
    focusable: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    limit: [{
      type: Input
    }],
    slidersRefs: [{
      type: ViewChildren,
      args: [TuiSliderComponent, {
        read: ElementRef
      }]
    }],
    computePureKeySteps: []
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-pipes-stringify-content.mjs
var TuiStringifyContentPipe = class _TuiStringifyContentPipe {
  transform(stringify) {
    return ({
      $implicit
    }) => stringify($implicit);
  }
  static {
    this.ɵfac = function TuiStringifyContentPipe_Factory(t) {
      return new (t || _TuiStringifyContentPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiStringifyContent",
      type: _TuiStringifyContentPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStringifyContentPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiStringifyContent"
    }]
  }], null, null);
})();

export {
  TUI_CALENDAR_MONTH_DEFAULT_OPTIONS,
  TUI_CALENDAR_MONTH_OPTIONS,
  tuiCalendarMonthOptionsProvider,
  TuiCalendarMonth,
  calculateDisabledItemHandler,
  TUI_DAY_CAPS_MAPPER,
  TuiCalendarRange,
  TuiDayRangePeriod,
  tuiCreateDefaultDayRangePeriods,
  TuiDataListWrapperComponent,
  TuiDataListGroupWrapperComponent,
  TuiDataListWrapper,
  TUI_FLOATING_PRECISION,
  tuiPercentageToKeyStepValue,
  tuiKeyStepValueToPercentage,
  tuiCreateKeyStepsTransformer,
  TUI_SLIDER_DEFAULT_OPTIONS,
  TUI_SLIDER_OPTIONS,
  tuiSliderOptionsProvider,
  TuiSliderComponent,
  TuiSliderKeyStepsBase,
  TuiSliderKeySteps,
  TuiSliderReadonly,
  TuiSliderThumbLabel,
  TuiSlider,
  TuiRangeChange,
  TuiRange,
  TuiStringifyContentPipe
};
//# sourceMappingURL=chunk-Z7JB6L5Y.js.map
