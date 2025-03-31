import {
  TUI_IS_MOBILE,
  tuiInjectElement,
  tuiIsElement,
  tuiTypedFromEvent,
  tuiWatch,
  tuiZoneOptimized
} from "./chunk-KYGQM5F2.js";
import {
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  toSignal
} from "./chunk-HUC4OT3S.js";
import {
  Directive,
  Injectable,
  NgZone,
  Output,
  inject,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable
} from "./chunk-IASHH3I3.js";
import {
  Observable,
  distinctUntilChanged,
  filter,
  map,
  merge,
  of
} from "./chunk-565WYVFV.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-hovered.mjs
function movedOut({
  currentTarget,
  relatedTarget
}) {
  return !tuiIsElement(relatedTarget) || !tuiIsElement(currentTarget) || !currentTarget.contains(relatedTarget);
}
var TuiHoveredService = class _TuiHoveredService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.stream$ = merge(
      tuiTypedFromEvent(this.el, "mouseenter").pipe(map(TUI_TRUE_HANDLER)),
      tuiTypedFromEvent(this.el, "mouseleave").pipe(map(TUI_FALSE_HANDLER)),
      // Hello, Safari
      tuiTypedFromEvent(this.el, "mouseout").pipe(filter(movedOut), map(TUI_FALSE_HANDLER))
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
  }
  static {
    this.ɵfac = function TuiHoveredService_Factory(t) {
      return new (t || _TuiHoveredService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiHoveredService,
      factory: _TuiHoveredService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
function tuiHovered() {
  return toSignal(inject(TUI_IS_MOBILE) ? of(false) : inject(TuiHoveredService).pipe(tuiWatch()), {
    initialValue: false
  });
}
var TuiHovered = class _TuiHovered {
  constructor() {
    this.tuiHoveredChange = inject(TuiHoveredService);
  }
  static {
    this.ɵfac = function TuiHovered_Factory(t) {
      return new (t || _TuiHovered)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHovered,
      selectors: [["", "tuiHoveredChange", ""]],
      outputs: {
        tuiHoveredChange: "tuiHoveredChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiHoveredService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHovered, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHoveredChange]",
      providers: [TuiHoveredService]
    }]
  }], null, {
    tuiHoveredChange: [{
      type: Output
    }]
  });
})();

export {
  TuiHoveredService,
  tuiHovered,
  TuiHovered
};
//# sourceMappingURL=chunk-ATP3OCRR.js.map
