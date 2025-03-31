import {
  PolymorpheusOutlet,
  TUI_ICON_END,
  TUI_ICON_START,
  TUI_IS_MOBILE,
  TUI_NOTHING_FOUND_MESSAGE,
  TuiDropdownDirective,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsNativeFocused,
  tuiIsNativeFocusedIn,
  tuiMoveFocus,
  tuiTakeUntilDestroyed,
  tuiZonefree
} from "./chunk-KYGQM5F2.js";
import {
  EMPTY_QUERY,
  toSignal,
  tuiCreateToken,
  tuiIsPresent,
  tuiProvide,
  tuiWithStyles
} from "./chunk-HUC4OT3S.js";
import {
  NgIf
} from "./chunk-2REAV3OW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  Input,
  NgZone,
  ViewEncapsulation$1,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IASHH3I3.js";
import {
  timer
} from "./chunk-565WYVFV.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-icons.mjs
var TuiIconsStyles = class _TuiIconsStyles {
  static {
    this.ɵfac = function TuiIconsStyles_Factory(t) {
      return new (t || _TuiIconsStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiIconsStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-icons"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiIconsStyles_Template(rf, ctx) {
      },
      styles: ['[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-icon-start) no-repeat center / contain;mask:var(--t-icon-start) no-repeat center / contain}[tuiIcons]:after{display:var(--t-icon-end);-webkit-mask:var(--t-icon-end) no-repeat center / contain;mask:var(--t-icon-end) no-repeat center / contain}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconsStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-icons"
      },
      styles: ['[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-icon-start) no-repeat center / contain;mask:var(--t-icon-start) no-repeat center / contain}[tuiIcons]:after{display:var(--t-icon-end);-webkit-mask:var(--t-icon-end) no-repeat center / contain;mask:var(--t-icon-end) no-repeat center / contain}\n']
    }]
  }], null, null);
})();
var TuiIcons = class _TuiIcons {
  constructor() {
    this.nothing = tuiWithStyles(TuiIconsStyles);
    this.resolver = tuiInjectIconResolver();
    this.iconStart = inject(TUI_ICON_START, {
      self: true,
      optional: true
    }) || "";
    this.iconEnd = inject(TUI_ICON_END, {
      self: true,
      optional: true
    }) || "";
  }
  static {
    this.ɵfac = function TuiIcons_Factory(t) {
      return new (t || _TuiIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiIcons,
      hostAttrs: ["tuiIcons", ""],
      hostVars: 4,
      hostBindings: function TuiIcons_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-icon-start", ctx.iconStart ? "url(" + ctx.resolver(ctx.iconStart.toString()) + ")" : null)("--t-icon-end", ctx.iconEnd ? "url(" + ctx.resolver(ctx.iconEnd) + ")" : null);
        }
      },
      inputs: {
        iconStart: "iconStart",
        iconEnd: "iconEnd"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcons, [{
    type: Directive,
    args: [{
      standalone: true,
      host: {
        tuiIcons: "",
        "[style.--t-icon-start]": 'iconStart ? "url(" + resolver(iconStart.toString()) + ")" : null',
        "[style.--t-icon-end]": 'iconEnd ? "url(" + resolver(iconEnd) + ")" : null'
      }
    }]
  }], null, {
    iconStart: [{
      type: Input
    }],
    iconEnd: [{
      type: Input
    }]
  });
})();
var TuiWithIcons = class _TuiWithIcons {
  static {
    this.ɵfac = function TuiWithIcons_Factory(t) {
      return new (t || _TuiWithIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithIcons,
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiIcons,
        inputs: ["iconStart", "iconStart", "iconEnd", "iconEnd"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithIcons, [{
    type: Directive,
    args: [{
      standalone: true,
      hostDirectives: [{
        directive: TuiIcons,
        inputs: ["iconStart", "iconEnd"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-data-list.mjs
var _c0 = ["tuiOption", ""];
var _c1 = ["*"];
var _c2 = (a0) => ({
  $implicit: a0
});
function TuiOption_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiOption_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function TuiDataListComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiDataListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiDataListComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.emptyContent || ctx_r1.fallback());
  }
}
var TUI_OPTION_CONTENT = tuiCreateToken();
function tuiAsOptionContent(useValue) {
  return {
    provide: TUI_OPTION_CONTENT,
    useValue
  };
}
var TUI_DATA_LIST_ACCESSOR = tuiCreateToken();
function tuiAsDataListAccessor(accessor) {
  return tuiProvide(TUI_DATA_LIST_ACCESSOR, accessor);
}
var TUI_DATA_LIST_HOST = tuiCreateToken();
function tuiAsDataListHost(host) {
  return tuiProvide(TUI_DATA_LIST_HOST, host);
}
var TuiOption = class _TuiOption {
  constructor() {
    this.isMobile = inject(TUI_IS_MOBILE);
    this.el = tuiInjectElement();
    this.dataList = inject(forwardRef(() => TuiDataListComponent), {
      optional: true
    });
    this.host = inject(TUI_DATA_LIST_HOST, {
      optional: true
    });
    this.content = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
    this.dropdown = inject(TuiDropdownDirective, {
      self: true,
      optional: true
    })?.ref;
    this.disabled = false;
  }
  // Preventing focus loss upon focused option removal
  ngOnDestroy() {
    this.dataList?.handleFocusLossIfNecessary(this.el);
  }
  onClick() {
    if (this.host?.handleOption && this.value !== void 0) {
      this.host.handleOption(this.value);
    }
  }
  onMouseMove() {
    if (!this.isMobile && !tuiIsNativeFocused(this.el) && this.dataList && this.el.closest("[tuiDataListDropdownManager]")) {
      this.el.focus({
        preventScroll: true
      });
    }
  }
  static {
    this.ɵfac = function TuiOption_Factory(t) {
      return new (t || _TuiOption)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiOption,
      selectors: [["button", "tuiOption", ""], ["a", "tuiOption", ""], ["label", "tuiOption", ""]],
      hostAttrs: ["type", "button", "role", "option"],
      hostVars: 3,
      hostBindings: function TuiOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiOption_click_HostBindingHandler() {
            return ctx.onClick();
          })("mousemove.zoneless", function TuiOption_mousemove_zoneless_HostBindingHandler() {
            return ctx.onMouseMove();
          });
        }
        if (rf & 2) {
          ɵɵattribute("disabled", ctx.disabled || null);
          ɵɵclassProp("_with-dropdown", ctx.dropdown == null ? null : ctx.dropdown());
        }
      },
      inputs: {
        disabled: "disabled",
        value: "value"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([TuiWithIcons]), ɵɵStandaloneFeature],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 3,
      vars: 4,
      consts: [["t", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiOption_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiOption_ng_container_0_Template, 2, 1, "ng-container", 1)(1, TuiOption_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const t_r2 = ɵɵreference(2);
          ɵɵproperty("polymorpheusOutlet", ctx.content || t_r2)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c2, t_r2));
        }
      },
      dependencies: [PolymorpheusOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOption, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "button[tuiOption], a[tuiOption], label[tuiOption]",
      imports: [PolymorpheusOutlet],
      template: `
        <ng-container *polymorpheusOutlet="content || t as text; context: {$implicit: t}">
            {{ text }}
        </ng-container>
        <ng-template #t>
            <ng-content />
        </ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiWithIcons],
      host: {
        type: "button",
        role: "option",
        "[attr.disabled]": "disabled || null",
        "[class._with-dropdown]": "dropdown?.()",
        "(click)": "onClick()",
        "(mousemove.zoneless)": "onMouseMove()"
      }
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
function tuiInjectDataListSize() {
  const sizes = ["s", "m", "l"];
  const size = inject(TUI_DATA_LIST_HOST, {
    optional: true
  })?.size;
  return size && sizes.includes(size) ? size : "l";
}
var TuiDataListComponent = class _TuiDataListComponent {
  constructor() {
    this.options = EMPTY_QUERY;
    this.ngZone = inject(NgZone);
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.fallback = toSignal(inject(TUI_NOTHING_FOUND_MESSAGE));
    this.empty = signal(false);
    this.size = tuiInjectDataListSize();
  }
  onKeyDownArrow(current, step) {
    const {
      elements
    } = this;
    tuiMoveFocus(elements.indexOf(current), elements, step);
  }
  handleFocusLossIfNecessary(element = this.el) {
    if (tuiIsNativeFocusedIn(element)) {
      this.origin?.focus({
        preventScroll: true
      });
    }
  }
  // TODO: Refactor to :has after Safari support bumped to 15
  ngAfterContentChecked() {
    timer(0).pipe(tuiZonefree(this.ngZone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.empty.set(!this.elements.length);
      this.cdr.detectChanges();
    });
  }
  getOptions(includeDisabled = false) {
    return this.options.filter(({
      disabled
    }) => includeDisabled || !disabled).map(({
      value
    }) => value).filter(tuiIsPresent);
  }
  onFocusIn(relatedTarget, currentTarget) {
    if (!currentTarget.contains(relatedTarget) && !this.origin) {
      this.origin = relatedTarget;
    }
  }
  get elements() {
    return Array.from(this.el.querySelectorAll("a[tuiOption],button[tuiOption],label[tuiOption]"));
  }
  static {
    this.ɵfac = function TuiDataListComponent_Factory(t) {
      return new (t || _TuiDataListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListComponent,
      selectors: [["tui-data-list"]],
      contentQueries: function TuiDataListComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiOption, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.options = _t);
        }
      },
      hostAttrs: ["role", "listbox"],
      hostVars: 1,
      hostBindings: function TuiDataListComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiDataListComponent_focusin_HostBindingHandler($event) {
            return ctx.onFocusIn($event.relatedTarget, $event.currentTarget);
          })("mousedown.prevent", function TuiDataListComponent_mousedown_prevent_HostBindingHandler() {
            return 0;
          })("wheel.zoneless.passive", function TuiDataListComponent_wheel_zoneless_passive_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("mouseleave", function TuiDataListComponent_mouseleave_HostBindingHandler($event) {
            return ctx.handleFocusLossIfNecessary($event.target);
          })("keydown.tab", function TuiDataListComponent_keydown_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("keydown.shift.tab", function TuiDataListComponent_keydown_shift_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("keydown.arrowDown.prevent", function TuiDataListComponent_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowUp.prevent", function TuiDataListComponent_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        emptyContent: "emptyContent",
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListComponent)]), ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 1,
      consts: [["class", "t-empty", 4, "ngIf"], [1, "t-empty"], [4, "polymorpheusOutlet"]],
      template: function TuiDataListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiDataListComponent_div_1_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.empty());
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet],
      styles: ['tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-tertiary)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-size=s]{--tui-data-list-margin: 0rem}tui-data-list[data-size=s]>.t-empty,tui-data-list[data-size=s] [tuiOption]{--t-option-padding-inline: .5rem;font:var(--tui-font-text-s);min-block-size:2rem;padding-top:.3125rem;padding-bottom:.3125rem}tui-data-list[data-size=s]>.t-empty:before,tui-data-list[data-size=s] [tuiOption]:before{font-size:1rem}tui-data-list[data-size=m]>.t-empty,tui-data-list[data-size=m] [tuiOption]{--t-option-padding-inline: .5rem;font:var(--tui-font-text-s);min-block-size:2.5rem;padding-top:.375rem;padding-bottom:.375rem}tui-data-list[data-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-size=l]>.t-empty,tui-data-list[data-size=l] [tuiOption]{--t-option-padding-inline: .625rem;font:var(--tui-font-text-m);min-block-size:2.75rem;padding-top:.375rem;padding-bottom:.375rem}tui-data-list>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0}tui-data-list [tuiOption]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;justify-content:space-between;text-align:start;color:var(--tui-text-primary);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}tui-data-list [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default;pointer-events:none}tui-data-list [tuiOption]:hover,tui-data-list [tuiOption]:focus-within,tui-data-list [tuiOption]._with-dropdown{background-color:var(--tui-background-neutral-1)}tui-data-list [tuiOption]:before{margin-inline-end:.5rem}tui-data-list [tuiOption]:after{font-size:1rem;margin:0 -.75rem 0 auto;border-left:.5rem solid;border-right:.5rem solid}tui-data-list>.t-empty,tui-data-list [tuiOption]{padding-left:var(--t-option-padding-inline);padding-right:var(--t-option-padding-inline)}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);font-weight:700;color:var(--tui-text-primary);flex-direction:column;line-height:1rem}tui-data-list[data-size=l] tui-opt-group{font:var(--tui-font-text-s);font-weight:700;line-height:1.25rem}tui-data-list[data-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);block-size:1px;background:var(--tui-border-normal)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=""]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:""}tui-opt-group[data-label=""]:before,tui-opt-group:not([data-label]):before{content:"";padding:0;margin:0}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list",
      imports: [NgIf, PolymorpheusOutlet],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListComponent)],
      host: {
        role: "listbox",
        "[attr.data-size]": "size",
        "(focusin)": "onFocusIn($event.relatedTarget, $event.currentTarget)",
        "(mousedown.prevent)": "(0)",
        "(wheel.zoneless.passive)": "handleFocusLossIfNecessary()",
        "(mouseleave)": "handleFocusLossIfNecessary($event.target)",
        "(keydown.tab)": "handleFocusLossIfNecessary()",
        "(keydown.shift.tab)": "handleFocusLossIfNecessary()",
        "(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)"
      },
      template: '<ng-content />\n<div\n    *ngIf="empty()"\n    class="t-empty"\n>\n    <ng-container *polymorpheusOutlet="emptyContent || fallback() as text">\n        {{ text }}\n    </ng-container>\n</div>\n',
      styles: ['tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-tertiary)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-size=s]{--tui-data-list-margin: 0rem}tui-data-list[data-size=s]>.t-empty,tui-data-list[data-size=s] [tuiOption]{--t-option-padding-inline: .5rem;font:var(--tui-font-text-s);min-block-size:2rem;padding-top:.3125rem;padding-bottom:.3125rem}tui-data-list[data-size=s]>.t-empty:before,tui-data-list[data-size=s] [tuiOption]:before{font-size:1rem}tui-data-list[data-size=m]>.t-empty,tui-data-list[data-size=m] [tuiOption]{--t-option-padding-inline: .5rem;font:var(--tui-font-text-s);min-block-size:2.5rem;padding-top:.375rem;padding-bottom:.375rem}tui-data-list[data-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-size=l]>.t-empty,tui-data-list[data-size=l] [tuiOption]{--t-option-padding-inline: .625rem;font:var(--tui-font-text-m);min-block-size:2.75rem;padding-top:.375rem;padding-bottom:.375rem}tui-data-list>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0}tui-data-list [tuiOption]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;justify-content:space-between;text-align:start;color:var(--tui-text-primary);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}tui-data-list [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default;pointer-events:none}tui-data-list [tuiOption]:hover,tui-data-list [tuiOption]:focus-within,tui-data-list [tuiOption]._with-dropdown{background-color:var(--tui-background-neutral-1)}tui-data-list [tuiOption]:before{margin-inline-end:.5rem}tui-data-list [tuiOption]:after{font-size:1rem;margin:0 -.75rem 0 auto;border-left:.5rem solid;border-right:.5rem solid}tui-data-list>.t-empty,tui-data-list [tuiOption]{padding-left:var(--t-option-padding-inline);padding-right:var(--t-option-padding-inline)}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);font-weight:700;color:var(--tui-text-primary);flex-direction:column;line-height:1rem}tui-data-list[data-size=l] tui-opt-group{font:var(--tui-font-text-s);font-weight:700;line-height:1.25rem}tui-data-list[data-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);block-size:1px;background:var(--tui-border-normal)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=""]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:""}tui-opt-group[data-label=""]:before,tui-opt-group:not([data-label]):before{content:"";padding:0;margin:0}\n']
    }]
  }], null, {
    options: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiOption), {
        descendants: true
      }]
    }],
    emptyContent: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var TuiDataListDirective = class _TuiDataListDirective {
  static {
    this.ɵfac = function TuiDataListDirective_Factory(t) {
      return new (t || _TuiDataListDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDataListDirective,
      selectors: [["ng-template", "tuiDataList", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDataList]"
    }]
  }], null, null);
})();
function tuiAsDataList(list) {
  return tuiProvide(TuiDataListDirective, list);
}
var TuiOptGroup = class _TuiOptGroup {
  static {
    this.ɵfac = function TuiOptGroup_Factory(t) {
      return new (t || _TuiOptGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptGroup,
      selectors: [["tui-opt-group"]],
      hostAttrs: ["role", "group"],
      hostVars: 1,
      hostBindings: function TuiOptGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-label", ctx.label);
        }
      },
      inputs: {
        label: "label"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptGroup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-opt-group",
      host: {
        role: "group",
        "[attr.data-label]": "label"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }]
  });
})();
var TuiDataList = [TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-label.mjs
var TuiLabelStyles = class _TuiLabelStyles {
  static {
    this.ɵfac = function TuiLabelStyles_Factory(t) {
      return new (t || _TuiLabelStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLabelStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-label"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiLabelStyles_Template(rf, ctx) {
      },
      styles: ["[tuiLabel]{display:flex;gap:.25rem;flex-direction:column;font:var(--tui-font-text-s);color:var(--tui-text-primary)}[tuiLabel]:not([data-orientation=vertical]){flex-direction:row;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-m)}[tuiLabel]:has(tui-textfield),[tuiLabel]:has(tui-primitive-textfield),[tuiLabel]:has(tui-textarea){flex-direction:column!important;inline-size:auto!important;font:var(--tui-font-text-s)!important}[tuiLabel] input[type=checkbox],[tuiLabel] input[type=radio]{margin-inline-end:.5rem}[tuiLabel] input[type=checkbox][data-size=s],[tuiLabel] input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-top:.125rem}[tuiLabel] small{font:var(--tui-font-text-s)}[tuiLabel] [tuiTitle]{margin-top:.125rem}[tuiLabel] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabelStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-label"
      },
      styles: ["[tuiLabel]{display:flex;gap:.25rem;flex-direction:column;font:var(--tui-font-text-s);color:var(--tui-text-primary)}[tuiLabel]:not([data-orientation=vertical]){flex-direction:row;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-m)}[tuiLabel]:has(tui-textfield),[tuiLabel]:has(tui-primitive-textfield),[tuiLabel]:has(tui-textarea){flex-direction:column!important;inline-size:auto!important;font:var(--tui-font-text-s)!important}[tuiLabel] input[type=checkbox],[tuiLabel] input[type=radio]{margin-inline-end:.5rem}[tuiLabel] input[type=checkbox][data-size=s],[tuiLabel] input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-top:.125rem}[tuiLabel] small{font:var(--tui-font-text-s)}[tuiLabel] [tuiTitle]{margin-top:.125rem}[tuiLabel] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"]
    }]
  }], null, null);
})();
var TuiLabel = class _TuiLabel {
  constructor() {
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiLabelStyles);
    this.parent = inject(forwardRef(() => TUI_DATA_LIST_HOST), {
      optional: true
    });
  }
  static {
    this.ɵfac = function TuiLabel_Factory(t) {
      return new (t || _TuiLabel)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLabel,
      selectors: [["label", "tuiLabel", ""]],
      contentQueries: function TuiLabel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TUI_DATA_LIST_HOST, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function TuiLabel_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("for", ctx.el.htmlFor || (ctx.parent == null ? null : ctx.parent.id))("data-orientation", ctx.textfield ? "vertical" : "horizontal");
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabel, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "label[tuiLabel]",
      host: {
        "[attr.for]": "el.htmlFor || parent?.id",
        "[attr.data-orientation]": 'textfield ? "vertical" : "horizontal"'
      }
    }]
  }], null, {
    textfield: [{
      type: ContentChild,
      args: [forwardRef(() => TUI_DATA_LIST_HOST)]
    }]
  });
})();

export {
  TuiIcons,
  TuiWithIcons,
  TUI_OPTION_CONTENT,
  tuiAsOptionContent,
  TUI_DATA_LIST_ACCESSOR,
  tuiAsDataListAccessor,
  TUI_DATA_LIST_HOST,
  tuiAsDataListHost,
  TuiOption,
  tuiInjectDataListSize,
  TuiDataListComponent,
  TuiDataListDirective,
  tuiAsDataList,
  TuiOptGroup,
  TuiDataList,
  TuiLabel
};
//# sourceMappingURL=chunk-ZDHFV4K6.js.map
