import {
  TuiAppearance,
  TuiNativeValidator
} from "./chunk-4BHFHEOY.js";
import {
  tuiControlValue,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiWatch
} from "./chunk-KYGQM5F2.js";
import {
  takeUntilDestroyed,
  tuiCreateToken,
  tuiIsString,
  tuiProvideOptions
} from "./chunk-HUC4OT3S.js";
import {
  NgControl,
  NgModel
} from "./chunk-4HPDDB75.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵhostProperty,
  ɵɵstyleProp
} from "./chunk-IASHH3I3.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-checkbox.mjs
var _c0 = ["type", "checkbox", "tuiCheckbox", ""];
var TUI_CHECKBOX_DEFAULT_OPTIONS = {
  size: "m",
  appearance: (el) => el.checked || el.indeterminate ? "primary" : "outline-grayscale",
  icons: {
    checked: "@tui.check",
    indeterminate: "@tui.minus"
  }
};
var TUI_CHECKBOX_OPTIONS = tuiCreateToken(TUI_CHECKBOX_DEFAULT_OPTIONS);
function tuiCheckboxOptionsProvider(options) {
  return tuiProvideOptions(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}
var TuiCheckbox = class _TuiCheckbox {
  constructor() {
    this.appearance = inject(TuiAppearance);
    this.options = inject(TUI_CHECKBOX_OPTIONS);
    this.cdr = inject(ChangeDetectorRef);
    this.resolver = tuiInjectIconResolver();
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.size = this.options.size;
    this.control = inject(NgControl, {
      optional: true,
      self: true
    });
  }
  ngOnInit() {
    if (!this.control?.valueChanges) {
      return;
    }
    tuiControlValue(this.control).pipe(tuiWatch(this.cdr), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      const fix = this.control instanceof NgModel && value === null ? this.control.model : value;
      this.el.indeterminate = fix === null;
    });
  }
  ngDoCheck() {
    this.appearance.tuiAppearance = tuiIsString(this.options.appearance) ? this.options.appearance : this.options.appearance(this.el);
  }
  getIcon(state) {
    const option = this.options.icons[state];
    const icon = tuiIsString(option) ? option : option(this.size);
    return icon && `url(${this.resolver(icon)})`;
  }
  static {
    this.ɵfac = function TuiCheckbox_Factory(t) {
      return new (t || _TuiCheckbox)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCheckbox,
      selectors: [["input", "type", "checkbox", "tuiCheckbox", ""]],
      hostVars: 8,
      hostBindings: function TuiCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("disabled", !ctx.control || ctx.control.disabled);
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--t-checked-icon", ctx.getIcon("checked"))("--t-indeterminate-icon", ctx.getIcon("indeterminate"));
          ɵɵclassProp("_readonly", !ctx.control);
        }
      },
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
      }, TuiNativeValidator]), ɵɵStandaloneFeature],
      attrs: _c0,
      decls: 0,
      vars: 0,
      template: function TuiCheckbox_Template(rf, ctx) {
      },
      styles: [`[tuiCheckbox]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:before{position:absolute;top:0;left:0;bottom:0;right:0;content:"";inline-size:1rem;block-size:1rem;margin:auto;background:currentColor;-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:disabled._readonly{opacity:1;pointer-events:none}[tuiCheckbox]:checked:before,[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate-icon);mask-image:var(--t-indeterminate-icon)}[tuiCheckbox][data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}[tuiCheckbox][data-size=s]:before{inline-size:.875rem;block-size:.875rem}[tuiCheckbox]:invalid:not([data-mode]),[tuiCheckbox][data-mode~=invalid]{color:#fff}
`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckbox, [{
    type: Component,
    args: [{
      standalone: true,
      selector: 'input[type="checkbox"][tuiCheckbox]',
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }, TuiNativeValidator],
      host: {
        "[disabled]": "!control || control.disabled",
        "[attr.data-size]": "size",
        "[class._readonly]": "!control",
        "[style.--t-checked-icon]": 'getIcon("checked")',
        "[style.--t-indeterminate-icon]": 'getIcon("indeterminate")'
      },
      styles: [`[tuiCheckbox]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:before{position:absolute;top:0;left:0;bottom:0;right:0;content:"";inline-size:1rem;block-size:1rem;margin:auto;background:currentColor;-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:disabled._readonly{opacity:1;pointer-events:none}[tuiCheckbox]:checked:before,[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate-icon);mask-image:var(--t-indeterminate-icon)}[tuiCheckbox][data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}[tuiCheckbox][data-size=s]:before{inline-size:.875rem;block-size:.875rem}[tuiCheckbox]:invalid:not([data-mode]),[tuiCheckbox][data-mode~=invalid]{color:#fff}
`]
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

export {
  TUI_CHECKBOX_DEFAULT_OPTIONS,
  TUI_CHECKBOX_OPTIONS,
  tuiCheckboxOptionsProvider,
  TuiCheckbox
};
//# sourceMappingURL=chunk-JWUKXRK4.js.map
