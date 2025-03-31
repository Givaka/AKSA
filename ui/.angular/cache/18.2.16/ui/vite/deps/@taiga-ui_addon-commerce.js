import {
  MaskitoDirective,
  maskitoDateOptionsGenerator,
  tuiMaskito
} from "./chunk-PX5TNPDL.js";
import {
  TuiLet
} from "./chunk-6DF62NVO.js";
import {
  TuiHoveredService,
  tuiHovered
} from "./chunk-ATP3OCRR.js";
import {
  TuiChevron
} from "./chunk-7Y2PXZRN.js";
import {
  TuiMapperPipe
} from "./chunk-OL6PQ5ZF.js";
import {
  TUI_TEXTFIELD_OPTIONS,
  TuiAppearance,
  TuiIcon,
  TuiIconPipe,
  TuiTextfieldContent,
  TuiWithTextfield,
  TuiWithTextfieldDropdown,
  WaResizeObserver,
  tuiAppearance,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  tuiAppearanceState,
  tuiInjectId
} from "./chunk-4BHFHEOY.js";
import {
  tuiAsDataListHost
} from "./chunk-ZDHFV4K6.js";
import {
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  TUI_COMMON_ICONS,
  TUI_IS_WEBKIT,
  TUI_MEDIA,
  TUI_NUMBER_FORMAT,
  TuiActiveZone,
  TuiControl,
  TuiDropdownDirective,
  TuiValidationError,
  TuiWithDropdownOpen,
  tuiAsControl,
  tuiControlValue,
  tuiDropdownOpen,
  tuiDropdownOptionsProvider,
  tuiFormatNumber,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsElement,
  tuiIsInput,
  tuiIsNativeFocused,
  tuiIsNativeFocusedIn,
  tuiTypedFromEvent
} from "./chunk-KYGQM5F2.js";
import {
  CHAR_MINUS,
  CHAR_NO_BREAK_SPACE,
  CHAR_PLUS,
  TUI_DIGIT_REGEXP,
  TUI_NON_DIGITS_REGEXP,
  TUI_NON_DIGIT_REGEXP,
  WA_WINDOW,
  takeUntilDestroyed,
  toObservable,
  toSignal,
  tuiClamp,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiExtractI18n,
  tuiIsString,
  tuiProvideOptions,
  tuiPure
} from "./chunk-HUC4OT3S.js";
import "./chunk-OJB7JBNO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControl,
  NgControlStatus,
  NgModel
} from "./chunk-4HPDDB75.js";
import "./chunk-6HW5XFU2.js";
import "./chunk-PL5KKZU7.js";
import "./chunk-WK5RQMCA.js";
import "./chunk-YGFZQ3ZV.js";
import {
  NgIf
} from "./chunk-2REAV3OW.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  EventEmitter,
  INJECTOR$1,
  Injector,
  Input,
  Output,
  Pipe,
  ViewChild,
  ViewEncapsulation$1,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵelement,
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
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-IASHH3I3.js";
import {
  EMPTY,
  Subject,
  __decorate,
  combineLatest,
  distinctUntilChanged,
  map,
  merge,
  of,
  skip,
  startWith,
  switchMap,
  timer
} from "./chunk-565WYVFV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-types.mjs
var TuiCurrency;
(function(TuiCurrency2) {
  TuiCurrency2["ArmenianDram"] = "AMD";
  TuiCurrency2["AustralianDollar"] = "AUD";
  TuiCurrency2["AzerbaijaniManat"] = "AZN";
  TuiCurrency2["Baht"] = "THB";
  TuiCurrency2["BahrainiDinar"] = "BHD";
  TuiCurrency2["BelarusianRuble"] = "BYN";
  TuiCurrency2["BrazilianReal"] = "BRL";
  TuiCurrency2["CanadianDollar"] = "CAD";
  TuiCurrency2["CzechKoruna"] = "CZK";
  TuiCurrency2["Dirham"] = "AED";
  TuiCurrency2["Dollar"] = "USD";
  TuiCurrency2["EastCaribbeanDollar"] = "XCD";
  TuiCurrency2["Euro"] = "EUR";
  TuiCurrency2["Forint"] = "HUF";
  TuiCurrency2["GeorgianLari"] = "GEL";
  TuiCurrency2["HongKongDollar"] = "HKD";
  TuiCurrency2["Hryvnia"] = "UAH";
  TuiCurrency2["IndianRupee"] = "INR";
  TuiCurrency2["IndonesianRupiah"] = "IDR";
  TuiCurrency2["IranianRial"] = "IRR";
  TuiCurrency2["IsraeliShekel"] = "ILS";
  TuiCurrency2["KyrgyzstanSom"] = "KGS";
  TuiCurrency2["MalaysianRinggit"] = "MYR";
  TuiCurrency2["MexicanPeso"] = "MXN";
  TuiCurrency2["MoldovanLeu"] = "MDL";
  TuiCurrency2["MongolianTugrik"] = "MNT";
  TuiCurrency2["NewTurkmenManat"] = "TMT";
  TuiCurrency2["PolandZloty"] = "PLN";
  TuiCurrency2["Pound"] = "GBP";
  TuiCurrency2["Ruble"] = "RUB";
  TuiCurrency2["SaudiRiyal"] = "SAR";
  TuiCurrency2["SerbianDinar"] = "RSD";
  TuiCurrency2["SingaporeDollar"] = "SGD";
  TuiCurrency2["SouthAfricanRand"] = "ZAR";
  TuiCurrency2["SriLankanRupee"] = "LKR";
  TuiCurrency2["SwissFranc"] = "CHF";
  TuiCurrency2["TajikistaniSomoni"] = "TJS";
  TuiCurrency2["Tenge"] = "KZT";
  TuiCurrency2["TurkishLira"] = "TRY";
  TuiCurrency2["UzbekSum"] = "UZS";
  TuiCurrency2["VietnameseDong"] = "VND";
  TuiCurrency2["Won"] = "KRW";
  TuiCurrency2["Yen"] = "JPY";
  TuiCurrency2["YuanRenminbi"] = "CNY";
})(TuiCurrency || (TuiCurrency = {}));
var TuiCurrencyCode;
(function(TuiCurrencyCode2) {
  TuiCurrencyCode2["ArmenianDram"] = "051";
  TuiCurrencyCode2["AustralianDollar"] = "036";
  TuiCurrencyCode2["AzerbaijaniManat"] = "944";
  TuiCurrencyCode2["Baht"] = "764";
  TuiCurrencyCode2["BahrainiDinar"] = "048";
  TuiCurrencyCode2["BelarusianRuble"] = "933";
  TuiCurrencyCode2["BrazilianReal"] = "986";
  TuiCurrencyCode2["CanadianDollar"] = "124";
  TuiCurrencyCode2["CzechKoruna"] = "203";
  TuiCurrencyCode2["Dirham"] = "784";
  TuiCurrencyCode2["Dollar"] = "840";
  TuiCurrencyCode2["EastCaribbeanDollar"] = "951";
  TuiCurrencyCode2["Euro"] = "978";
  TuiCurrencyCode2["Forint"] = "348";
  TuiCurrencyCode2["GeorgianLari"] = "981";
  TuiCurrencyCode2["HongKongDollar"] = "344";
  TuiCurrencyCode2["Hryvnia"] = "980";
  TuiCurrencyCode2["IndianRupee"] = "356";
  TuiCurrencyCode2["IndonesianRupiah"] = "360";
  TuiCurrencyCode2["IranianRial"] = "364";
  TuiCurrencyCode2["IsraeliShekel"] = "376";
  TuiCurrencyCode2["KyrgyzstanSom"] = "417";
  TuiCurrencyCode2["MalaysianRinggit"] = "458";
  TuiCurrencyCode2["MexicanPeso"] = "484";
  TuiCurrencyCode2["MoldovanLeu"] = "498";
  TuiCurrencyCode2["MongolianTugrik"] = "496";
  TuiCurrencyCode2["NewTurkmenManat"] = "934";
  TuiCurrencyCode2["PolandZloty"] = "985";
  TuiCurrencyCode2["Pound"] = "826";
  TuiCurrencyCode2["Ruble"] = "643";
  TuiCurrencyCode2["SaudiRiyal"] = "682";
  TuiCurrencyCode2["SerbianDinar"] = "941";
  TuiCurrencyCode2["SingaporeDollar"] = "702";
  TuiCurrencyCode2["SouthAfricanRand"] = "710";
  TuiCurrencyCode2["SriLankanRupee"] = "144";
  TuiCurrencyCode2["SwissFranc"] = "756";
  TuiCurrencyCode2["TajikistaniSomoni"] = "972";
  TuiCurrencyCode2["Tenge"] = "398";
  TuiCurrencyCode2["TurkishLira"] = "949";
  TuiCurrencyCode2["UzbekSum"] = "860";
  TuiCurrencyCode2["VietnameseDong"] = "704";
  TuiCurrencyCode2["Won"] = "410";
  TuiCurrencyCode2["Yen"] = "392";
  TuiCurrencyCode2["YuanRenminbi"] = "156";
})(TuiCurrencyCode || (TuiCurrencyCode = {}));

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-utils.mjs
function tuiGetCurrencySymbol(currency) {
  switch (currency) {
    case TuiCurrency.ArmenianDram:
    case TuiCurrencyCode.ArmenianDram:
      return "֏";
    case TuiCurrency.AustralianDollar:
    case TuiCurrencyCode.AustralianDollar:
      return "A$";
    case TuiCurrency.AzerbaijaniManat:
    case TuiCurrencyCode.AzerbaijaniManat:
      return "₼";
    case TuiCurrency.BahrainiDinar:
    case TuiCurrencyCode.BahrainiDinar:
      return "BD";
    case TuiCurrency.Baht:
    case TuiCurrencyCode.Baht:
      return "฿";
    case TuiCurrency.BelarusianRuble:
    case TuiCurrencyCode.BelarusianRuble:
      return "Br";
    case TuiCurrency.BrazilianReal:
    case TuiCurrencyCode.BrazilianReal:
      return "R$";
    case TuiCurrency.CanadianDollar:
    case TuiCurrencyCode.CanadianDollar:
      return "C$";
    case TuiCurrency.CzechKoruna:
    case TuiCurrencyCode.CzechKoruna:
      return "Kč";
    case TuiCurrency.Dirham:
    case TuiCurrencyCode.Dirham:
      return "Dh";
    case TuiCurrency.Dollar:
    case TuiCurrency.MexicanPeso:
    case TuiCurrencyCode.Dollar:
    case TuiCurrencyCode.MexicanPeso:
      return "$";
    case TuiCurrency.EastCaribbeanDollar:
    case TuiCurrencyCode.EastCaribbeanDollar:
      return "EC$";
    case TuiCurrency.Euro:
    case TuiCurrencyCode.Euro:
      return "€";
    case TuiCurrency.Forint:
    case TuiCurrencyCode.Forint:
      return "Ft";
    case TuiCurrency.GeorgianLari:
    case TuiCurrencyCode.GeorgianLari:
      return "₾";
    case TuiCurrency.HongKongDollar:
    case TuiCurrencyCode.HongKongDollar:
      return "HK$";
    case TuiCurrency.Hryvnia:
    case TuiCurrencyCode.Hryvnia:
      return "₴";
    case TuiCurrency.IndianRupee:
    case TuiCurrencyCode.IndianRupee:
      return "₹";
    case TuiCurrency.IndonesianRupiah:
    case TuiCurrencyCode.IndonesianRupiah:
      return "Rp";
    case TuiCurrency.IranianRial:
    case TuiCurrencyCode.IranianRial:
      return "IR";
    case TuiCurrency.IsraeliShekel:
    case TuiCurrencyCode.IsraeliShekel:
      return "₪";
    case TuiCurrency.KyrgyzstanSom:
    case TuiCurrencyCode.KyrgyzstanSom:
      return "c";
    case TuiCurrency.MalaysianRinggit:
    case TuiCurrencyCode.MalaysianRinggit:
      return "RM";
    case TuiCurrency.MoldovanLeu:
    case TuiCurrencyCode.MoldovanLeu:
      return "L";
    case TuiCurrency.MongolianTugrik:
    case TuiCurrencyCode.MongolianTugrik:
      return "₮";
    case TuiCurrency.NewTurkmenManat:
    case TuiCurrencyCode.NewTurkmenManat:
      return "TMT";
    case TuiCurrency.PolandZloty:
    case TuiCurrencyCode.PolandZloty:
      return "zł";
    case TuiCurrency.Pound:
    case TuiCurrencyCode.Pound:
      return "£";
    case TuiCurrency.Ruble:
    case TuiCurrencyCode.Ruble:
      return "₽";
    case TuiCurrency.SaudiRiyal:
    case TuiCurrencyCode.SaudiRiyal:
      return "SR";
    case TuiCurrency.SerbianDinar:
    case TuiCurrencyCode.SerbianDinar:
      return "DIN";
    case TuiCurrency.SingaporeDollar:
    case TuiCurrencyCode.SingaporeDollar:
      return "S$";
    case TuiCurrency.SouthAfricanRand:
    case TuiCurrencyCode.SouthAfricanRand:
      return "R";
    case TuiCurrency.SriLankanRupee:
    case TuiCurrencyCode.SriLankanRupee:
      return "Rs.";
    case TuiCurrency.SwissFranc:
    case TuiCurrencyCode.SwissFranc:
      return "₣";
    case TuiCurrency.TajikistaniSomoni:
    case TuiCurrencyCode.TajikistaniSomoni:
      return "SM";
    case TuiCurrency.Tenge:
    case TuiCurrencyCode.Tenge:
      return "₸";
    case TuiCurrency.TurkishLira:
    case TuiCurrencyCode.TurkishLira:
      return "₺";
    case TuiCurrency.UzbekSum:
    case TuiCurrencyCode.UzbekSum:
      return "So'm";
    case TuiCurrency.VietnameseDong:
    case TuiCurrencyCode.VietnameseDong:
      return "đ";
    case TuiCurrency.Won:
    case TuiCurrencyCode.Won:
      return "₩";
    case TuiCurrency.Yen:
    case TuiCurrencyCode.Yen:
      return "¥";
    case TuiCurrency.YuanRenminbi:
    case TuiCurrencyCode.YuanRenminbi:
      return "CN¥";
    default:
      return null;
  }
}
function stringifyCurrency(currency) {
  return currency === null || tuiIsString(currency) ? currency || "" : String(currency).padStart(3, "0");
}
function tuiFormatCurrency(currency) {
  const stringifiedCurrency = stringifyCurrency(currency);
  return tuiGetCurrencySymbol(stringifiedCurrency) || stringifiedCurrency;
}
var TUI_CODE_DICTIONARY = {
  [TuiCurrency.Ruble]: TuiCurrencyCode.Ruble,
  [TuiCurrency.Dollar]: TuiCurrencyCode.Dollar,
  [TuiCurrency.MexicanPeso]: TuiCurrencyCode.MexicanPeso,
  [TuiCurrency.MoldovanLeu]: TuiCurrencyCode.MoldovanLeu,
  [TuiCurrency.PolandZloty]: TuiCurrencyCode.PolandZloty,
  [TuiCurrency.SingaporeDollar]: TuiCurrencyCode.SingaporeDollar,
  [TuiCurrency.AustralianDollar]: TuiCurrencyCode.AustralianDollar,
  [TuiCurrency.HongKongDollar]: TuiCurrencyCode.HongKongDollar,
  [TuiCurrency.CanadianDollar]: TuiCurrencyCode.CanadianDollar,
  [TuiCurrency.CzechKoruna]: TuiCurrencyCode.CzechKoruna,
  [TuiCurrency.EastCaribbeanDollar]: TuiCurrencyCode.EastCaribbeanDollar,
  [TuiCurrency.Euro]: TuiCurrencyCode.Euro,
  [TuiCurrency.Forint]: TuiCurrencyCode.Forint,
  [TuiCurrency.Pound]: TuiCurrencyCode.Pound,
  [TuiCurrency.Baht]: TuiCurrencyCode.Baht,
  [TuiCurrency.BahrainiDinar]: TuiCurrencyCode.BahrainiDinar,
  [TuiCurrency.TurkishLira]: TuiCurrencyCode.TurkishLira,
  [TuiCurrency.YuanRenminbi]: TuiCurrencyCode.YuanRenminbi,
  [TuiCurrency.Yen]: TuiCurrencyCode.Yen,
  [TuiCurrency.IsraeliShekel]: TuiCurrencyCode.IsraeliShekel,
  [TuiCurrency.IndianRupee]: TuiCurrencyCode.IndianRupee,
  [TuiCurrency.SwissFranc]: TuiCurrencyCode.SwissFranc,
  [TuiCurrency.ArmenianDram]: TuiCurrencyCode.ArmenianDram,
  [TuiCurrency.Won]: TuiCurrencyCode.Won,
  [TuiCurrency.Tenge]: TuiCurrencyCode.Tenge,
  [TuiCurrency.Hryvnia]: TuiCurrencyCode.Hryvnia,
  [TuiCurrency.UzbekSum]: TuiCurrencyCode.UzbekSum,
  [TuiCurrency.KyrgyzstanSom]: TuiCurrencyCode.KyrgyzstanSom,
  [TuiCurrency.Dirham]: TuiCurrencyCode.Dirham,
  [TuiCurrency.TajikistaniSomoni]: TuiCurrencyCode.TajikistaniSomoni,
  [TuiCurrency.MalaysianRinggit]: TuiCurrencyCode.MalaysianRinggit,
  [TuiCurrency.BelarusianRuble]: TuiCurrencyCode.BelarusianRuble,
  [TuiCurrency.GeorgianLari]: TuiCurrencyCode.GeorgianLari,
  [TuiCurrency.AzerbaijaniManat]: TuiCurrencyCode.AzerbaijaniManat,
  [TuiCurrency.SriLankanRupee]: TuiCurrencyCode.SriLankanRupee,
  [TuiCurrency.SerbianDinar]: TuiCurrencyCode.SerbianDinar,
  [TuiCurrency.SaudiRiyal]: TuiCurrencyCode.SaudiRiyal,
  [TuiCurrency.MongolianTugrik]: TuiCurrencyCode.MongolianTugrik,
  [TuiCurrency.SouthAfricanRand]: TuiCurrencyCode.SouthAfricanRand,
  [TuiCurrency.IranianRial]: TuiCurrencyCode.IranianRial,
  [TuiCurrency.IndonesianRupiah]: TuiCurrencyCode.IndonesianRupiah,
  [TuiCurrency.VietnameseDong]: TuiCurrencyCode.VietnameseDong,
  [TuiCurrency.NewTurkmenManat]: TuiCurrencyCode.NewTurkmenManat,
  [TuiCurrency.BrazilianReal]: TuiCurrencyCode.BrazilianReal
};
function tuiGetCodeByCurrency(code) {
  return TUI_CODE_DICTIONARY[code] ?? null;
}
var TUI_CURRENCY_DICTIONARY = {
  [TuiCurrencyCode.Ruble]: TuiCurrency.Ruble,
  [TuiCurrencyCode.Dollar]: TuiCurrency.Dollar,
  [TuiCurrencyCode.MexicanPeso]: TuiCurrency.MexicanPeso,
  [TuiCurrencyCode.MoldovanLeu]: TuiCurrency.MoldovanLeu,
  [TuiCurrencyCode.PolandZloty]: TuiCurrency.PolandZloty,
  [TuiCurrencyCode.SingaporeDollar]: TuiCurrency.SingaporeDollar,
  [TuiCurrencyCode.AustralianDollar]: TuiCurrency.AustralianDollar,
  [TuiCurrencyCode.HongKongDollar]: TuiCurrency.HongKongDollar,
  [TuiCurrencyCode.CanadianDollar]: TuiCurrency.CanadianDollar,
  [TuiCurrencyCode.CzechKoruna]: TuiCurrency.CzechKoruna,
  [TuiCurrencyCode.EastCaribbeanDollar]: TuiCurrency.EastCaribbeanDollar,
  [TuiCurrencyCode.Euro]: TuiCurrency.Euro,
  [TuiCurrencyCode.Forint]: TuiCurrency.Forint,
  [TuiCurrencyCode.Pound]: TuiCurrency.Pound,
  [TuiCurrencyCode.Baht]: TuiCurrency.Baht,
  [TuiCurrencyCode.BahrainiDinar]: TuiCurrency.BahrainiDinar,
  [TuiCurrencyCode.TurkishLira]: TuiCurrency.TurkishLira,
  [TuiCurrencyCode.YuanRenminbi]: TuiCurrency.YuanRenminbi,
  [TuiCurrencyCode.Yen]: TuiCurrency.Yen,
  [TuiCurrencyCode.IsraeliShekel]: TuiCurrency.IsraeliShekel,
  [TuiCurrencyCode.IndianRupee]: TuiCurrency.IndianRupee,
  [TuiCurrencyCode.SwissFranc]: TuiCurrency.SwissFranc,
  [TuiCurrencyCode.ArmenianDram]: TuiCurrency.ArmenianDram,
  [TuiCurrencyCode.Won]: TuiCurrency.Won,
  [TuiCurrencyCode.Tenge]: TuiCurrency.Tenge,
  [TuiCurrencyCode.Hryvnia]: TuiCurrency.Hryvnia,
  [TuiCurrencyCode.UzbekSum]: TuiCurrency.UzbekSum,
  [TuiCurrencyCode.KyrgyzstanSom]: TuiCurrency.KyrgyzstanSom,
  [TuiCurrencyCode.Dirham]: TuiCurrency.Dirham,
  [TuiCurrencyCode.TajikistaniSomoni]: TuiCurrency.TajikistaniSomoni,
  [TuiCurrencyCode.MalaysianRinggit]: TuiCurrency.MalaysianRinggit,
  [TuiCurrencyCode.BelarusianRuble]: TuiCurrency.BelarusianRuble,
  [TuiCurrencyCode.GeorgianLari]: TuiCurrency.GeorgianLari,
  [TuiCurrencyCode.AzerbaijaniManat]: TuiCurrency.AzerbaijaniManat,
  [TuiCurrencyCode.SriLankanRupee]: TuiCurrency.SriLankanRupee,
  [TuiCurrencyCode.SerbianDinar]: TuiCurrency.SerbianDinar,
  [TuiCurrencyCode.SaudiRiyal]: TuiCurrency.SaudiRiyal,
  [TuiCurrencyCode.MongolianTugrik]: TuiCurrency.MongolianTugrik,
  [TuiCurrencyCode.SouthAfricanRand]: TuiCurrency.SouthAfricanRand,
  [TuiCurrencyCode.IranianRial]: TuiCurrency.IranianRial,
  [TuiCurrencyCode.IndonesianRupiah]: TuiCurrency.IndonesianRupiah,
  [TuiCurrencyCode.VietnameseDong]: TuiCurrency.VietnameseDong,
  [TuiCurrencyCode.NewTurkmenManat]: TuiCurrency.NewTurkmenManat,
  [TuiCurrencyCode.BrazilianReal]: TuiCurrency.BrazilianReal
};
function tuiGetCurrencyByCode(currency) {
  return TUI_CURRENCY_DICTIONARY[currency] ?? null;
}
var TUI_BIN_TABLE = [["mir", 2200, 2204], ["mastercard", 2221, 2720], ["jcb", 3528, 3589], ["amex", 34], ["amex", 37], ["dinersclub", 36], ["electron", 4026], ["electron", 4175], ["electron", 4405], ["electron", 4508], ["electron", 4844], ["electron", 4913], ["electron", 4917], ["visa", 4], ["verve", 506099, 506198], ["verve", 507865, 507964], ["maestro", 5018], ["maestro", 5020], ["maestro", 5038], ["maestro", 5090], ["maestro", 5890], ["maestro", 5893], ["rupay", 508], ["maestro", 50], ["mastercard", 51, 55], ["maestro", 56], ["maestro", 58], ["mastercard", 5], ["maestro", 6e3], ["maestro", 6304], ["maestro", 6759, 6763], ["verve", 650002, 650027], ["maestro", 676770], ["maestro", 676774], ["discover", 644, 649], ["discover", 6011], ["rupay", 60], ["unionpay", 62], ["discover", 65], ["maestro", 6], ["rupay", 81, 82], ["uzcard", 8600], ["humo", 9860]];
function tuiGetPaymentSystem(cardNumber, supported) {
  if (!cardNumber) {
    return null;
  }
  const row = TUI_BIN_TABLE.find(([paymentSystem, start, end = start]) => {
    const cardNumberNumeric = Number.parseInt(cardNumber.slice(0, String(start).length), 10);
    const match = cardNumberNumeric >= start && cardNumberNumeric <= end;
    return match && (!supported?.length || supported.includes(paymentSystem));
  });
  return row?.[0] ?? null;
}
function tuiIsMaestro(three, two, one) {
  if (one === 6) {
    return true;
  }
  if (two === 50 || two > 55 && two < 59) {
    return true;
  }
  if (three < 500) {
    return false;
  }
  return three < 510;
}
function tuiIsMastercard(four, two, one) {
  if (one === 5) {
    return true;
  }
  if (two < 10) {
    return false;
  }
  if (two > 50 && two < 56) {
    return true;
  }
  if (four < 1e3) {
    return false;
  }
  return four > 2220 && four < 2721;
}
function tuiIsMir(four) {
  return four > 2199 && four < 2205;
}
function tuiIsElectron(four) {
  switch (four) {
    case 4026:
    case 4175:
    case 4405:
    case 4508:
    case 4844:
    case 4913:
    case 4917:
      return true;
    default:
      return false;
  }
}
function tuiIsVisa(one) {
  return one === 4;
}
function tuiIsCardLengthValid(cardNumber) {
  const {
    length
  } = cardNumber;
  const paymentSystem = tuiGetPaymentSystem(cardNumber);
  switch (paymentSystem) {
    case "electron":
      return length === 16;
    case "maestro":
      return length > 11 && length < 20;
    case "mastercard":
    case "mir":
      return length > 15 && length < 20;
    case "visa":
      return length > 12 && length < 20;
    default:
      return length > 8 && length < 20;
  }
}
function tuiIsCardNumberValid(value) {
  const cardNumber = String(value).replace(TUI_NON_DIGITS_REGEXP, "");
  const {
    length
  } = cardNumber;
  const arr = cardNumber.split("").map((char, index) => {
    const digit = parseInt(char, 10);
    if ((index + length) % 2 === 0) {
      const digitX2 = digit * 2;
      return digitX2 > 9 ? digitX2 - 9 : digitX2;
    }
    return digit;
  });
  return !(arr.reduce((a, b) => a + b, 0) % 10);
}
function tuiIsExpireValid(expire, today = /* @__PURE__ */ new Date()) {
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear() - 2e3;
  const expireMonth = tuiClamp(parseInt(expire.slice(0, 2), 10), 1, 12);
  const expireYear = tuiClamp(parseInt(expire.slice(-2), 10), 0, 99);
  return expireYear > currentYear || currentYear === expireYear && expireMonth >= currentMonth;
}

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-constants.mjs
var tuiDefaultCardValidator = (card) => card.length > 11 && tuiIsCardLengthValid(card) && tuiIsCardNumberValid(card);
var TUI_MASK_CARD = {
  mask: [TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, " ", TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, " ", TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, " ", TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, " ", TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP]
};
var MAP = {
  А: "F",
  В: "D",
  Г: "U",
  Д: "L",
  Е: "T",
  З: "P",
  И: "B",
  Й: "Q",
  К: "R",
  Л: "K",
  М: "V",
  Н: "Y",
  О: "J",
  П: "G",
  Р: "H",
  С: "C",
  Т: "N",
  У: "E",
  Ф: "A",
  Ц: "W",
  Ч: "X",
  Ш: "I",
  Щ: "O",
  Ы: "S",
  Ь: "M",
  Я: "Z"
};
function toEnglishUppercase(value) {
  return value.toUpperCase().split("").map((char) => MAP[char] || char).join("");
}
var TUI_MASK_CARD_HOLDER = {
  mask: /^[a-z\s]+$/i,
  preprocessors: [({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    return {
      elementState: {
        selection,
        value: toEnglishUppercase(value)
      },
      data: toEnglishUppercase(data)
    };
  }]
};
var TUI_MASK_CVC = (length) => ({
  mask: new Array(length).fill(TUI_DIGIT_REGEXP)
});
var TUI_MASK_EXPIRE = maskitoDateOptionsGenerator({
  mode: "mm/yy",
  separator: "/"
});

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-tokens.mjs
var TUI_CARD_NUMBER_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("cardNumber"));
var TUI_CARD_EXPIRY_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("cardExpiry"));
var TUI_CARD_CVC_TEXTS = tuiCreateToken(of(["CVC", "CVC/CVV"]));
var TUI_PAYMENT_SYSTEM_ICONS = tuiCreateToken({
  mir: "@tui.mir",
  visa: "@tui.visa",
  electron: "@tui.electron",
  mastercard: "@tui.mastercard",
  maestro: "@tui.maestro",
  amex: "@tui.amex",
  dinersclub: "@tui.diners-club",
  discover: "@tui.discover",
  humo: "@tui.humo",
  jcb: "@tui.jcb",
  rupay: "@tui.ru-pay",
  unionpay: "@tui.union-pay",
  uzcard: "@tui.uzcard",
  verve: "@tui.verve"
});

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-components-input-card.mjs
var _c0 = ["tuiInputCard", ""];
function TuiInputCard_img_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hidden", !ctx_r0.image())("src", ctx_r0.image(), ɵɵsanitizeUrl);
  }
}
var TUI_INPUT_CARD_DEFAULT_OPTIONS = {
  icon: null,
  paymentSystemHandler: tuiGetPaymentSystem,
  autocomplete: false
};
var TUI_INPUT_CARD_OPTIONS = tuiCreateToken(TUI_INPUT_CARD_DEFAULT_OPTIONS);
function tuiInputCardOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_CARD_OPTIONS, options, TUI_INPUT_CARD_DEFAULT_OPTIONS);
}
var TuiInputCard = class _TuiInputCard {
  constructor() {
    this.icons = inject(TUI_PAYMENT_SYSTEM_ICONS);
    this.options = inject(TUI_INPUT_CARD_OPTIONS);
    this.resolver = tuiInjectIconResolver();
    this.control = inject(NgControl);
    this.value = toSignal(timer(0).pipe(switchMap(() => tuiControlValue(this.control))), {
      initialValue: ""
    });
    this.icon = signal(this.options.icon);
    this.accessor = inject(DefaultValueAccessor, {
      self: true,
      optional: true
    });
    this.mask = tuiMaskito(TUI_MASK_CARD);
    this.image = computed(() => {
      const system = this.options.paymentSystemHandler(this.value());
      const icon = system && this.icons[system] && this.resolver(this.icons[system]);
      const url = this.icon() || icon;
      return url && this.icon() !== "" ? url : null;
    });
    this.autocomplete = this.options.autocomplete;
    this.binChange = toObservable(this.value).pipe(map((value) => value.length < 6 ? null : value.replace(" ", "").slice(0, 6)), startWith(null), distinctUntilChanged(), skip(1));
  }
  set iconValue(icon) {
    this.icon.set(icon);
  }
  ngOnInit() {
    if (!this.accessor) {
      return;
    }
    const onChanges = this.accessor.onChange.bind(this.accessor);
    this.accessor.onChange = (value) => onChanges(value.replaceAll(" ", ""));
  }
  static {
    this.ɵfac = function TuiInputCard_Factory(t) {
      return new (t || _TuiInputCard)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputCard,
      selectors: [["input", "tuiInputCard", ""]],
      hostAttrs: ["inputmode", "numeric", "placeholder", "0000 0000 0000 0000"],
      hostVars: 1,
      hostBindings: function TuiInputCard_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("autocomplete", ctx.autocomplete ? "cc-number" : "off");
        }
      },
      inputs: {
        autocomplete: "autocomplete",
        iconValue: [0, "icon", "iconValue"]
      },
      outputs: {
        binChange: "binChange"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([MaskitoDirective, TuiWithTextfield]), ɵɵStandaloneFeature],
      attrs: _c0,
      decls: 1,
      vars: 0,
      consts: [["alt", "", "class", "t-payment-system", 3, "hidden", "src", 4, "tuiTextfieldContent"], ["alt", "", 1, "t-payment-system", 3, "hidden", "src"]],
      template: function TuiInputCard_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiInputCard_img_0_Template, 1, 2, "img", 0);
        }
      },
      dependencies: [TuiTextfieldContent],
      styles: ["tui-textfield .t-payment-system{order:-1;inline-size:1.5rem}tui-textfield[data-size=l] .t-payment-system{inline-size:2rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputCard, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "input[tuiInputCard]",
      imports: [TuiTextfieldContent],
      template: `
        <img
            *tuiTextfieldContent
            alt=""
            class="t-payment-system"
            [hidden]="!image()"
            [src]="image()"
        />
    `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [MaskitoDirective, TuiWithTextfield],
      host: {
        inputmode: "numeric",
        placeholder: "0000 0000 0000 0000",
        "[autocomplete]": 'autocomplete ? "cc-number" : "off"'
      },
      styles: ["tui-textfield .t-payment-system{order:-1;inline-size:1.5rem}tui-textfield[data-size=l] .t-payment-system{inline-size:2rem}\n"]
    }]
  }], null, {
    autocomplete: [{
      type: Input
    }],
    binChange: [{
      type: Output
    }],
    iconValue: [{
      type: Input,
      args: ["icon"]
    }]
  });
})();

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-pipes-amount.mjs
var TUI_AMOUNT_DEFAULT_OPTIONS = {
  currency: null,
  currencyAlign: "left",
  sign: "negative-only"
};
var TUI_AMOUNT_OPTIONS = tuiCreateToken(TUI_AMOUNT_DEFAULT_OPTIONS);
function tuiAmountOptionsProvider(options) {
  return tuiProvideOptions(TUI_AMOUNT_OPTIONS, options, TUI_AMOUNT_DEFAULT_OPTIONS);
}
function tuiFormatSignSymbol(value, sign) {
  if (sign === "never" || !value || sign === "negative-only" && value > 0) {
    return "";
  }
  if (sign === "force-negative" || value < 0 && sign !== "force-positive") {
    return CHAR_MINUS;
  }
  return CHAR_PLUS;
}
var DEFAULT_PRECISION = 2;
var TuiAmountPipe = class _TuiAmountPipe {
  constructor() {
    this.options = inject(TUI_AMOUNT_OPTIONS);
    this.format = inject(TUI_NUMBER_FORMAT);
  }
  transform(value, currency = this.options.currency, currencyAlign = this.options.currencyAlign) {
    return this.format.pipe(map((format) => {
      const currencySymbol = tuiFormatCurrency(currency);
      const formatted = tuiFormatNumber(Math.abs(value), __spreadProps(__spreadValues({}, format), {
        precision: Number.isNaN(format.precision) ? DEFAULT_PRECISION : format.precision
      }));
      const sign = formatted === "0" ? "" : tuiFormatSignSymbol(value, this.options.sign);
      const space = currencySymbol && (currencySymbol?.length > 1 || currencyAlign === "right") ? CHAR_NO_BREAK_SPACE : "";
      return currencyAlign === "right" ? `${sign}${formatted}${space}${currencySymbol}` : `${sign}${currencySymbol}${space}${formatted}`;
    }));
  }
  static {
    this.ɵfac = function TuiAmountPipe_Factory(t) {
      return new (t || _TuiAmountPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiAmount",
      type: _TuiAmountPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAmountPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiAmount"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-pipes-currency.mjs
var TuiCurrencyPipe = class _TuiCurrencyPipe {
  transform(currency) {
    return tuiFormatCurrency(currency);
  }
  static {
    this.ɵfac = function TuiCurrencyPipe_Factory(t) {
      return new (t || _TuiCurrencyPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiCurrency",
      type: _TuiCurrencyPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCurrencyPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiCurrency"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-pipes-decimal.mjs
var TuiDecimalPipe = class _TuiDecimalPipe {
  constructor() {
    this.format = inject(TUI_NUMBER_FORMAT);
    this.amountPipe = Injector.create({
      providers: [{
        provide: TuiAmountPipe
      }],
      parent: inject(INJECTOR$1)
    }).get(TuiAmountPipe);
  }
  transform(value, currency = "") {
    return this.format.pipe(switchMap((format) => this.amountPipe.transform(value, currency).pipe(map((value2) => {
      const [, decimal] = value2.split(format.decimalSeparator);
      return decimal ? `${format.decimalSeparator}${decimal}` : "";
    }))));
  }
  static {
    this.ɵfac = function TuiDecimalPipe_Factory(t) {
      return new (t || _TuiDecimalPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiDecimal",
      type: _TuiDecimalPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDecimalPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiDecimal"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-pipes-format-card.mjs
var TuiFormatCardPipe = class _TuiFormatCardPipe {
  transform(value = "", cardPrefilled = false) {
    return value && !cardPrefilled ? value.split("").map((char, index) => index && index % 4 === 0 ? ` ${char}` : char).join("") : "";
  }
  static {
    this.ɵfac = function TuiFormatCardPipe_Factory(t) {
      return new (t || _TuiFormatCardPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFormatCard",
      type: _TuiFormatCardPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatCardPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFormatCard"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-components-input-card-group.mjs
var _c02 = ["inputCard"];
var _c1 = ["inputExpire"];
var _c2 = ["inputCVC"];
var _c3 = () => ({
  standalone: true
});
function TuiInputCardGroup_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 7);
    ɵɵlistener("click.zoneless.prevent", function TuiInputCardGroup_label_1_Template_label_click_zoneless_prevent_0_listener() {
      ɵɵrestoreView(_r2);
      return ɵɵresetView(0);
    });
    ɵɵelementStart(1, "input", 16, 2);
    ɵɵpipe(3, "tuiMapper");
    ɵɵlistener("focus", function TuiInputCardGroup_label_1_Template_input_focus_1_listener() {
      ɵɵrestoreView(_r2);
      return ɵɵresetView(0);
    })("ngModelChange", function TuiInputCardGroup_label_1_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onCardChange($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 17);
    ɵɵlistener("waResizeObserver", function TuiInputCardGroup_label_1_Template_span_waResizeObserver_4_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onResize());
    });
    ɵɵelement(5, "span", 18, 3);
    ɵɵelementStart(7, "span", 19)(8, "span", 20);
    ɵɵtext(9);
    ɵɵelementEnd()()();
    ɵɵelementStart(10, "div", 9);
    ɵɵtext(11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_24_0;
    const formattedCard_r4 = ctx.tuiLet;
    const ghost_r5 = ɵɵreference(6);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("t-input_filled", ctx_r2.card.length)("t-input_inert", ctx_r2.cardPrefilled);
    ɵɵproperty("autocomplete", ctx_r2.autocomplete ? "cc-number" : "off")("disabled", ctx_r2.disabled())("maskito", ctx_r2.maskCard)("ngModel", formattedCard_r4)("ngModelOptions", ɵɵpureFunction0(27, _c3))("placeholder", ctx_r2.cardPrefilled ? "" : ctx_r2.placeholder || ctx_r2.exampleText)("readOnly", ctx_r2.readOnly())("tabIndex", ctx_r2.cardFocusable ? 0 : -1);
    ɵɵattribute("aria-invalid", !ctx_r2.cardPrefilled && !ɵɵpipeBind2(3, 24, ctx_r2.card, ctx_r2.cardValidator))("id", ctx_r2.id + "_card");
    ɵɵadvance(3);
    ɵɵclassProp("t-collapsed_enable-mask", ctx_r2.cardCollapsed);
    ɵɵattribute("data-before", ctx_r2.masked);
    ɵɵadvance();
    ɵɵproperty("textContent", formattedCard_r4.slice(-ctx_r2.tailLength));
    ɵɵadvance(3);
    ɵɵstyleProp("transform", ctx_r2.transform(ghost_r5));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", formattedCard_r4, " ");
    ɵɵadvance();
    ɵɵclassProp("t-label_raised", ctx_r2.labelRaised());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", (tmp_24_0 = ctx_r2.texts()) == null ? null : tmp_24_0.cardNumberText, " ");
  }
}
function TuiInputCardGroup_div_16_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 23);
    ɵɵpipe(1, "tuiIcon");
  }
  if (rf & 2) {
    const src_r6 = ctx.polymorpheusOutlet;
    ɵɵproperty("src", ɵɵpipeBind1(1, 1, src_r6), ɵɵsanitizeUrl);
  }
}
function TuiInputCardGroup_div_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, TuiInputCardGroup_div_16_img_1_Template, 2, 3, "img", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.content);
  }
}
function TuiInputCardGroup_tui_icon_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-icon", 24);
    ɵɵlistener("click", function TuiInputCardGroup_tui_icon_17_Template_tui_icon_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r2.icons.close);
  }
}
function TuiInputCardGroup_tui_icon_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-icon", 25);
    ɵɵlistener("click", function TuiInputCardGroup_tui_icon_18_Template_tui_icon_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.toggle());
    });
    ɵɵelementEnd();
  }
}
var TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS = __spreadProps(__spreadValues({}, TUI_INPUT_CARD_DEFAULT_OPTIONS), {
  cardValidator: tuiDefaultCardValidator,
  exampleText: "0000 0000 0000 0000",
  exampleTextCVC: "000",
  cvcHidden: true,
  inputs: {
    cvc: true,
    expire: true
  }
});
var TUI_INPUT_CARD_GROUP_OPTIONS = tuiCreateToken(TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS);
function tuiInputCardGroupOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_CARD_GROUP_OPTIONS, options, TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS);
}
var TUI_INPUT_CARD_GROUP_TEXTS = tuiCreateTokenFromFactory(() => {
  const win = inject(WA_WINDOW);
  const cardNumberTexts = inject(TUI_CARD_NUMBER_TEXTS);
  const expiryTexts = inject(TUI_CARD_EXPIRY_TEXTS);
  const cvcTexts = inject(TUI_CARD_CVC_TEXTS);
  const {
    desktopSmall
  } = inject(TUI_MEDIA);
  const media = win.matchMedia(`screen and (min-width: ${(desktopSmall - 1) / 16}em)`);
  return tuiTypedFromEvent(media, "change").pipe(startWith(null), switchMap(() => combineLatest([of(Number(media.matches)), cardNumberTexts, expiryTexts, cvcTexts])), map(([index, cardNumber, expiry, cvcTexts2]) => ({
    cardNumberText: cardNumber[index] ?? "",
    expiryText: expiry[index] ?? "",
    cvcText: cvcTexts2[index] ?? ""
  })));
});
var TuiInputCardGroup = class _TuiInputCardGroup extends TuiControl {
  constructor() {
    super(...arguments);
    this.focus$ = new Subject();
    this.expirePrefilled = false;
    this.paymentSystems = inject(TUI_PAYMENT_SYSTEM_ICONS);
    this.options = inject(TUI_INPUT_CARD_GROUP_OPTIONS);
    this.el = tuiInjectElement();
    this.hover = tuiHovered();
    this.focusedIn = toSignal(merge(tuiTypedFromEvent(this.el, "focusin"), tuiTypedFromEvent(this.el, "focusout")).pipe(map(() => tuiIsNativeFocusedIn(this.el))), {
      initialValue: false
    });
    this.exampleTextCVC = this.options.exampleTextCVC;
    this.cvcHidden = this.options.cvcHidden;
    this.maskCVC = TUI_MASK_CVC(3);
    this.dropdown = inject(TuiDropdownDirective);
    this.maskCard = TUI_MASK_CARD;
    this.maskExpire = TUI_MASK_EXPIRE;
    this.icons = inject(TUI_COMMON_ICONS);
    this.texts = toSignal(inject(TUI_INPUT_CARD_GROUP_TEXTS));
    this.open = tuiDropdownOpen();
    this.$ = inject(TUI_IS_WEBKIT) ? this.focus$.pipe(switchMap(() => timer(100)), takeUntilDestroyed()).subscribe(() => this.expire ? this.focusCVC() : this.focusExpire()) : EMPTY;
    this.m = tuiAppearanceMode(this.mode);
    this.appearance = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
    this.state = tuiAppearanceState(
      // eslint-disable-next-line no-nested-ternary
      computed(() => this.disabled() ? "disabled" : this.hover() ? "hover" : null)
    );
    this.focus = tuiAppearanceFocus(computed(() => this.open() || this.focusedIn()));
    this.labelRaised = computed(() => this.focus() && !this.readOnly() || !!this.value()?.card);
    this.hasCleaner = computed(() => !!this.value()?.card && this.interactive());
    this.exampleText = this.options.exampleText;
    this.placeholder = this.options.exampleText;
    this.inputs = this.options.inputs;
    this.cardValidator = this.options.cardValidator;
    this.icon = this.options.icon;
    this.id = tuiInjectId();
    this.autocomplete = this.options.autocomplete;
    this.binChange = new EventEmitter();
  }
  set codeLength(length) {
    this.exampleTextCVC = "0".repeat(length);
    this.maskCVC = TUI_MASK_CVC(length);
  }
  get bin() {
    return this.card.length < 6 ? null : this.card.slice(0, 6);
  }
  writeValue(value) {
    const {
      bin
    } = this;
    super.writeValue(value);
    this.updateBin(bin);
    this.expirePrefilled = !!this.expire && this.cardPrefilled;
  }
  /** Public API for manual focus management */
  focusCard() {
    this.inputCard?.nativeElement.focus({
      preventScroll: true
    });
  }
  focusExpire() {
    if (this.inputs.expire) {
      this.inputExpire?.nativeElement.focus({
        preventScroll: true
      });
    } else {
      this.inputCVC?.nativeElement.focus({
        preventScroll: true
      });
    }
  }
  focusCVC() {
    this.inputCVC?.nativeElement.focus({
      preventScroll: true
    });
  }
  handleOption(option) {
    const {
      card = "",
      expire = "",
      cvc = ""
    } = option || {};
    const {
      bin
    } = this;
    const element = !card && this.inputCard?.nativeElement || !expire && this.inputExpire?.nativeElement || this.inputCVC?.nativeElement;
    this.onChange({
      card,
      expire,
      cvc
    });
    this.updateBin(bin);
    this.open.set(false);
    this.expirePrefilled = !!expire;
    element?.focus();
  }
  clear() {
    this.expirePrefilled = false;
    [this.inputCVC, this.inputExpire, this.inputCard].forEach((e) => {
      e?.nativeElement.focus();
      e?.nativeElement.select();
      e?.nativeElement.ownerDocument.execCommand("delete");
    });
    this.onChange(null);
  }
  onResize() {
    this.cdr.detectChanges();
  }
  get content() {
    const system = this.getPaymentSystem(this.card);
    return this.icon || system && this.paymentSystems[system];
  }
  get card() {
    return this.value()?.card || "";
  }
  get expire() {
    return this.value()?.expire || "";
  }
  get cvc() {
    return this.value()?.cvc || "";
  }
  get cardCollapsed() {
    return this.isFocusable(this.card) && !tuiIsNativeFocused(this.inputCard?.nativeElement);
  }
  get tailLength() {
    return this.card.length % 4 > 0 ? 5 : 4;
  }
  get cardPrefilled() {
    return !!this.card.match(TUI_NON_DIGIT_REGEXP);
  }
  get cvcPrefilled() {
    return !this.inputs.cvc || !!this.cvc.match(TUI_NON_DIGIT_REGEXP);
  }
  get cardFocusable() {
    return !this.cardPrefilled;
  }
  get expireFocusable() {
    return this.isFocusable(this.card) && !this.expirePrefilled;
  }
  get cvcFocusable() {
    return this.isFocusable(this.card);
  }
  get masked() {
    return this.cardPrefilled ? `*${this.card.slice(-4)}` : "*";
  }
  onCardChange(card) {
    const {
      value,
      bin
    } = this;
    const parsed = card.split(" ").join("");
    if (value()?.card === parsed) {
      return;
    }
    this.updateProperty(parsed, "card");
    this.updateBin(bin);
    if (this.cardValidator(this.card) && !value()?.expire && this.inputExpire) {
      this.focusExpire();
      this.focus$.next();
    }
  }
  onExpireChange(expire) {
    this.updateProperty(expire, "expire");
    if (Number(this.inputExpire?.nativeElement.selectionStart) === 5) {
      this.focusCVC();
    }
  }
  onCVCChange(cvc) {
    this.updateProperty(cvc, "cvc");
  }
  transform({
    offsetWidth
  }) {
    return this.cardCollapsed ? `translate3d(${offsetWidth}px, 0, 0)` : "";
  }
  onMouseDown(event) {
    if (tuiIsElement(event.target) && tuiIsInput(event.target)) {
      return;
    }
    event.preventDefault();
    this.focusInput();
  }
  toggle() {
    this.open.set(!this.open());
  }
  isFocusable(card) {
    return this.cardValidator(card) || this.cardPrefilled;
  }
  getPaymentSystem(value) {
    return this.options.paymentSystemHandler(value);
  }
  updateBin(oldBin) {
    const {
      bin
    } = this;
    if (bin !== oldBin && !this.cardPrefilled) {
      this.binChange.emit(bin);
    }
  }
  updateProperty(value, propName) {
    const {
      card = "",
      expire = "",
      cvc = ""
    } = this.value() || {};
    const newValue = {
      card,
      expire,
      cvc
    };
    newValue[propName] = value;
    this.onChange(newValue.expire || newValue.cvc || newValue.card ? newValue : null);
  }
  focusInput() {
    const element = this.cardFocusable && this.inputCard?.nativeElement || this.expireFocusable && this.inputExpire?.nativeElement || this.inputCVC?.nativeElement;
    element?.focus();
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputCardGroup_BaseFactory;
      return function TuiInputCardGroup_Factory(t) {
        return (ɵTuiInputCardGroup_BaseFactory || (ɵTuiInputCardGroup_BaseFactory = ɵɵgetInheritedFactory(_TuiInputCardGroup)))(t || _TuiInputCardGroup);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputCardGroup,
      selectors: [["tui-input-card-group"]],
      viewQuery: function TuiInputCardGroup_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c02, 5);
          ɵɵviewQuery(_c1, 5);
          ɵɵviewQuery(_c2, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputCard = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputExpire = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputCVC = _t.first);
        }
      },
      hostAttrs: ["data-size", "l"],
      hostBindings: function TuiInputCardGroup_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown", function TuiInputCardGroup_mousedown_HostBindingHandler($event) {
            return ctx.onMouseDown($event);
          })("scroll.zoneless", function TuiInputCardGroup_scroll_zoneless_HostBindingHandler($event) {
            return $event.target.scrollLeft = 0;
          });
        }
      },
      inputs: {
        exampleText: "exampleText",
        placeholder: "placeholder",
        inputs: "inputs",
        cardValidator: "cardValidator",
        icon: "icon",
        id: "id",
        autocomplete: "autocomplete",
        codeLength: "codeLength"
      },
      outputs: {
        binChange: "binChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListHost(_TuiInputCardGroup), tuiAsControl(_TuiInputCardGroup), tuiDropdownOptionsProvider({
        limitWidth: "fixed"
      }), TuiHoveredService]), ɵɵHostDirectivesFeature([TuiAppearance, TuiDropdownDirective, TuiWithTextfieldDropdown, TuiWithDropdownOpen]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 19,
      vars: 46,
      consts: [["inputExpire", ""], ["inputCVC", ""], ["inputCard", ""], ["ghost", ""], [1, "t-wrapper"], [3, "click.zoneless.prevent", 4, "tuiLet"], [1, "t-wrapper", "t-wrapper_expire"], [3, "click.zoneless.prevent"], ["automation-id", "tui-input-card-group__expire", "inputmode", "numeric", "maxlength", "5", "translate", "no", 1, "t-input", 3, "focus", "ngModelChange", "autocomplete", "disabled", "maskito", "ngModel", "ngModelOptions", "placeholder", "readOnly", "tabIndex"], [1, "t-label"], [1, "t-wrapper", "t-wrapper_cvc"], ["automation-id", "tui-input-card-group__cvc", "inputmode", "numeric", "translate", "no", "type", "text", 1, "t-input", 3, "focus", "ngModelChange", "autocomplete", "disabled", "maskito", "ngModel", "ngModelOptions", "placeholder", "readOnly", "tabIndex"], [1, "t-icons"], ["class", "t-icon-outlet", 4, "ngIf"], ["automation-id", "tui-input-card-group__cleaner", "tuiAppearance", "icon", "class", "t-icon", 3, "icon", "click", 4, "ngIf"], ["automation-id", "tui-input-card-group__dropdown", "tuiAppearance", "icon", "tuiChevron", "", 3, "click", 4, "ngIf"], ["automation-id", "tui-input-card-group__card", "inputmode", "numeric", "translate", "no", "type", "text", 1, "t-input", "t-input_card", 3, "focus", "ngModelChange", "autocomplete", "disabled", "maskito", "ngModel", "ngModelOptions", "placeholder", "readOnly", "tabIndex"], ["aria-hidden", "true", "translate", "no", 1, "t-collapsed", 3, "waResizeObserver"], [1, "t-ghost", 3, "textContent"], [1, "t-collapsed-wrapper"], [1, "t-value"], [1, "t-icon-outlet"], ["alt", "", "automation-id", "tui-input-card-group__icon", "class", "t-card", 3, "src", 4, "polymorpheusOutlet"], ["alt", "", "automation-id", "tui-input-card-group__icon", 1, "t-card", 3, "src"], ["automation-id", "tui-input-card-group__cleaner", "tuiAppearance", "icon", 1, "t-icon", 3, "click", "icon"], ["automation-id", "tui-input-card-group__dropdown", "tuiAppearance", "icon", "tuiChevron", "", 3, "click"]],
      template: function TuiInputCardGroup_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 4);
          ɵɵtemplate(1, TuiInputCardGroup_label_1_Template, 12, 28, "label", 5);
          ɵɵpipe(2, "tuiFormatCard");
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 6)(4, "label", 7);
          ɵɵlistener("click.zoneless.prevent", function TuiInputCardGroup_Template_label_click_zoneless_prevent_4_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(0);
          });
          ɵɵelementStart(5, "input", 8, 0);
          ɵɵlistener("focus", function TuiInputCardGroup_Template_input_focus_5_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(0);
          })("ngModelChange", function TuiInputCardGroup_Template_input_ngModelChange_5_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onExpireChange($event));
          });
          ɵɵelementEnd();
          ɵɵelementStart(7, "div", 9);
          ɵɵtext(8);
          ɵɵelementEnd()()();
          ɵɵelementStart(9, "div", 10)(10, "label", 7);
          ɵɵlistener("click.zoneless.prevent", function TuiInputCardGroup_Template_label_click_zoneless_prevent_10_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(0);
          });
          ɵɵelementStart(11, "input", 11, 1);
          ɵɵlistener("focus", function TuiInputCardGroup_Template_input_focus_11_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(0);
          })("ngModelChange", function TuiInputCardGroup_Template_input_ngModelChange_11_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onCVCChange($event));
          });
          ɵɵelementEnd();
          ɵɵelementStart(13, "div", 9);
          ɵɵtext(14);
          ɵɵelementEnd()()();
          ɵɵelementStart(15, "div", 12);
          ɵɵtemplate(16, TuiInputCardGroup_div_16_Template, 2, 1, "div", 13)(17, TuiInputCardGroup_tui_icon_17_Template, 1, 1, "tui-icon", 14)(18, TuiInputCardGroup_tui_icon_18_Template, 1, 0, "tui-icon", 15);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_17_0;
          let tmp_31_0;
          ɵɵadvance();
          ɵɵproperty("tuiLet", ɵɵpipeBind2(2, 41, (tmp_2_0 = ctx.value()) == null ? null : tmp_2_0.card, ctx.cardPrefilled));
          ɵɵadvance(2);
          ɵɵclassProp("t-wrapper_active", ctx.cardCollapsed);
          ɵɵadvance(2);
          ɵɵclassProp("t-input_inert", !ctx.expireFocusable)("t-input_prefilled", !ctx.inputs.expire);
          ɵɵproperty("autocomplete", ctx.autocomplete ? "cc-exp" : "off")("disabled", ctx.disabled())("maskito", ctx.maskExpire)("ngModel", ctx.expire)("ngModelOptions", ɵɵpureFunction0(44, _c3))("placeholder", ctx.inputs.expire ? "00/00" : "••/••")("readOnly", ctx.readOnly() || !ctx.inputs.expire)("tabIndex", ctx.expireFocusable ? 0 : -1);
          ɵɵattribute("id", ctx.id + "_expire")("name", ctx.autocomplete ? "ccexpiryyear" : null);
          ɵɵadvance(2);
          ɵɵclassProp("t-label_raised", ctx.labelRaised());
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", (tmp_17_0 = ctx.texts()) == null ? null : tmp_17_0.expiryText, " ");
          ɵɵadvance();
          ɵɵclassProp("t-wrapper_active", ctx.cardCollapsed);
          ɵɵadvance(2);
          ɵɵclassProp("t-input_cvc_hidden", ctx.cvcHidden)("t-input_prefilled", ctx.cvcPrefilled);
          ɵɵproperty("autocomplete", ctx.autocomplete ? "cc-csc" : "off")("disabled", ctx.disabled())("maskito", ctx.maskCVC)("ngModel", ctx.cvc)("ngModelOptions", ɵɵpureFunction0(45, _c3))("placeholder", ctx.cvcPrefilled ? "•••" : ctx.exampleTextCVC)("readOnly", ctx.readOnly() || ctx.cvcPrefilled)("tabIndex", ctx.cvcFocusable ? 0 : -1);
          ɵɵattribute("id", ctx.id + "_cvc");
          ɵɵadvance(2);
          ɵɵclassProp("t-label_raised", ctx.labelRaised());
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", (tmp_31_0 = ctx.texts()) == null ? null : tmp_31_0.cvcText, " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.content);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.hasCleaner());
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.dropdown.content);
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, MaskitoDirective, NgIf, PolymorpheusOutlet, TuiAppearance, TuiChevron, TuiFormatCardPipe, TuiIcon, TuiIconPipe, TuiLet, TuiMapperPipe, WaResizeObserver],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;block-size:var(--tui-height-l);inline-size:29.5rem;border-radius:var(--tui-radius-l);overflow:hidden}[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%]{inline-size:18rem}[tuiAppearance][data-appearance][_nghost-%COMP%]:has(:-webkit-autofill){background:var(--tui-service-autofill-background)!important}.t-outline[_ngcontent-%COMP%]{block-size:100%;inline-size:100%}.t-wrapper[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;inline-size:100%;block-size:100%}.t-wrapper_cvc[_ngcontent-%COMP%]{margin-left:7.1875rem;transform:translate3d(100%,0,0)}tui-root._mobile[_nghost-%COMP%]   .t-wrapper_cvc[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-wrapper_cvc[_ngcontent-%COMP%]{margin-left:4.0625rem}.t-wrapper_expire[_ngcontent-%COMP%]{transform:translate3d(100%,0,0)}.t-wrapper_active[_ngcontent-%COMP%]{transform:translate3d(6.5625rem,0,0)}tui-root._mobile[_nghost-%COMP%]   .t-wrapper_active[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-wrapper_active[_ngcontent-%COMP%]{transform:translate3d(4.125rem,0,0)}.t-card[_ngcontent-%COMP%]{inline-size:2rem;block-size:2rem}.t-collapsed[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;padding:1.25rem var(--tui-padding-l) 0;box-sizing:border-box;font:var(--tui-font-text-m);line-height:2.25rem;color:var(--tui-text-primary);white-space:nowrap;pointer-events:none}.t-collapsed_enable-mask[_ngcontent-%COMP%]:before{content:attr(data-before)}.t-collapsed_enable-mask[_ngcontent-%COMP%]   .t-collapsed-wrapper[_ngcontent-%COMP%]{left:1.375rem}.t-collapsed-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;display:block;inline-size:100%;block-size:100%;overflow:hidden}.t-value[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;bottom:0;right:100%;display:block;transform:translate3d(100%,0,0)}.t-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border:0;margin:0;padding:1.25rem var(--tui-padding-l) 0;outline:none;background:transparent;box-sizing:border-box;font:var(--tui-font-text-m);color:var(--tui-text-primary)}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-tertiary)}.t-input_prefilled[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-primary)}.t-input[chrome-autofilled][_ngcontent-%COMP%], .t-input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-text-fill-color:var(--tui-text-primary)!important;caret-color:var(--tui-text-primary)!important;-webkit-transition:background-color 600000s 0s;transition:background-color 600000s 0s}.t-input.t-input.t-input_card[_ngcontent-%COMP%]:not(:-webkit-autofill):not(:focus:placeholder-shown), .t-input.t-input.t-input_card.t-input_filled[_ngcontent-%COMP%]{caret-color:var(--tui-text-primary);color:transparent!important;-webkit-text-fill-color:transparent!important}.t-input.t-input.t-input_card[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input_inert[_ngcontent-%COMP%]{pointer-events:none}.t-input_cvc_hidden[_ngcontent-%COMP%]{-webkit-text-security:disc}.t-icons[_ngcontent-%COMP%]{position:absolute;right:.75rem;display:flex;align-items:center;block-size:100%}.t-icon-outlet[_ngcontent-%COMP%]{display:flex;margin-right:.25rem}.t-icon[_ngcontent-%COMP%]{cursor:pointer;border-width:.25rem}.t-label[_ngcontent-%COMP%]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;margin:1.125rem 1rem;font:var(--tui-font-text-m);line-height:1.25rem;color:var(--tui-text-secondary)}input[_ngcontent-%COMP%]:-webkit-autofill ~ .t-label[_ngcontent-%COMP%], .t-label_raised[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.7em)}[data-mode~="invalid"][_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{color:var(--tui-text-negative)}[data-focus="true"][_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-ghost[_ngcontent-%COMP%]{visibility:hidden}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputCardGroup.prototype, "isFocusable", null);
__decorate([tuiPure], TuiInputCardGroup.prototype, "getPaymentSystem", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputCardGroup, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-input-card-group",
      imports: [FormsModule, MaskitoDirective, NgIf, PolymorpheusOutlet, PolymorpheusTemplate, TuiActiveZone, TuiAppearance, TuiChevron, TuiFormatCardPipe, TuiIcon, TuiIconPipe, TuiLet, TuiMapperPipe, WaResizeObserver],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListHost(TuiInputCardGroup), tuiAsControl(TuiInputCardGroup), tuiDropdownOptionsProvider({
        limitWidth: "fixed"
      }), TuiHoveredService],
      hostDirectives: [TuiAppearance, TuiDropdownDirective, TuiWithTextfieldDropdown, TuiWithDropdownOpen],
      host: {
        "data-size": "l",
        "(mousedown)": "onMouseDown($event)",
        "(scroll.zoneless)": "$event.target.scrollLeft = 0"
      },
      template: `<div class="t-wrapper">
    <label
        *tuiLet="value()?.card | tuiFormatCard: cardPrefilled as formattedCard"
        (click.zoneless.prevent)="(0)"
    >
        <input
            #inputCard
            automation-id="tui-input-card-group__card"
            inputmode="numeric"
            translate="no"
            type="text"
            class="t-input t-input_card"
            [attr.aria-invalid]="!cardPrefilled && !(this.card | tuiMapper: cardValidator)"
            [attr.id]="id + '_card'"
            [autocomplete]="autocomplete ? 'cc-number' : 'off'"
            [class.t-input_filled]="card.length"
            [class.t-input_inert]="cardPrefilled"
            [disabled]="disabled()"
            [maskito]="maskCard"
            [ngModel]="formattedCard"
            [ngModelOptions]="{standalone: true}"
            [placeholder]="cardPrefilled ? '' : placeholder || exampleText"
            [readOnly]="readOnly()"
            [tabIndex]="cardFocusable ? 0 : -1"
            (focus)="(0)"
            (ngModelChange)="onCardChange($event)"
        />
        <span
            aria-hidden="true"
            translate="no"
            class="t-collapsed"
            [attr.data-before]="masked"
            [class.t-collapsed_enable-mask]="cardCollapsed"
            (waResizeObserver)="onResize()"
        >
            <span
                #ghost
                class="t-ghost"
                [textContent]="formattedCard.slice(-tailLength)"
            ></span>

            <span class="t-collapsed-wrapper">
                <span
                    class="t-value"
                    [style.transform]="transform(ghost)"
                >
                    {{ formattedCard }}
                </span>
            </span>
        </span>
        <div
            class="t-label"
            [class.t-label_raised]="labelRaised()"
        >
            {{ texts()?.cardNumberText }}
        </div>
    </label>
</div>
<div
    class="t-wrapper t-wrapper_expire"
    [class.t-wrapper_active]="cardCollapsed"
>
    <label (click.zoneless.prevent)="(0)">
        <input
            #inputExpire
            automation-id="tui-input-card-group__expire"
            inputmode="numeric"
            maxlength="5"
            translate="no"
            class="t-input"
            [attr.id]="id + '_expire'"
            [attr.name]="autocomplete ? 'ccexpiryyear' : null"
            [autocomplete]="autocomplete ? 'cc-exp' : 'off'"
            [class.t-input_inert]="!expireFocusable"
            [class.t-input_prefilled]="!inputs.expire"
            [disabled]="disabled()"
            [maskito]="maskExpire"
            [ngModel]="expire"
            [ngModelOptions]="{standalone: true}"
            [placeholder]="inputs.expire ? '00/00' : '••/••'"
            [readOnly]="readOnly() || !inputs.expire"
            [tabIndex]="expireFocusable ? 0 : -1"
            (focus)="(0)"
            (ngModelChange)="onExpireChange($event)"
        />
        <div
            class="t-label"
            [class.t-label_raised]="labelRaised()"
        >
            {{ texts()?.expiryText }}
        </div>
    </label>
</div>
<div
    class="t-wrapper t-wrapper_cvc"
    [class.t-wrapper_active]="cardCollapsed"
>
    <label (click.zoneless.prevent)="(0)">
        <input
            #inputCVC
            automation-id="tui-input-card-group__cvc"
            inputmode="numeric"
            translate="no"
            type="text"
            class="t-input"
            [attr.id]="id + '_cvc'"
            [autocomplete]="autocomplete ? 'cc-csc' : 'off'"
            [class.t-input_cvc_hidden]="cvcHidden"
            [class.t-input_prefilled]="cvcPrefilled"
            [disabled]="disabled()"
            [maskito]="maskCVC"
            [ngModel]="cvc"
            [ngModelOptions]="{standalone: true}"
            [placeholder]="cvcPrefilled ? '•••' : exampleTextCVC"
            [readOnly]="readOnly() || cvcPrefilled"
            [tabIndex]="cvcFocusable ? 0 : -1"
            (focus)="(0)"
            (ngModelChange)="onCVCChange($event)"
        />
        <div
            class="t-label"
            [class.t-label_raised]="labelRaised()"
        >
            {{ texts()?.cvcText }}
        </div>
    </label>
</div>
<div class="t-icons">
    <div
        *ngIf="content"
        class="t-icon-outlet"
    >
        <img
            *polymorpheusOutlet="content as src"
            alt=""
            automation-id="tui-input-card-group__icon"
            class="t-card"
            [src]="src | tuiIcon"
        />
    </div>
    <tui-icon
        *ngIf="hasCleaner()"
        automation-id="tui-input-card-group__cleaner"
        tuiAppearance="icon"
        class="t-icon"
        [icon]="icons.close"
        (click)="clear()"
    />
    <tui-icon
        *ngIf="dropdown.content"
        automation-id="tui-input-card-group__dropdown"
        tuiAppearance="icon"
        tuiChevron
        (click)="toggle()"
    />
</div>
`,
      styles: [':host{position:relative;display:block;block-size:var(--tui-height-l);inline-size:29.5rem;border-radius:var(--tui-radius-l);overflow:hidden}:host :host-context(tui-root._mobile){inline-size:18rem}:host[tuiAppearance][data-appearance]:has(:-webkit-autofill){background:var(--tui-service-autofill-background)!important}.t-outline{block-size:100%;inline-size:100%}.t-wrapper{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;inline-size:100%;block-size:100%}.t-wrapper_cvc{margin-left:7.1875rem;transform:translate3d(100%,0,0)}:host-context(tui-root._mobile) .t-wrapper_cvc{margin-left:4.0625rem}.t-wrapper_expire{transform:translate3d(100%,0,0)}.t-wrapper_active{transform:translate3d(6.5625rem,0,0)}:host-context(tui-root._mobile) .t-wrapper_active{transform:translate3d(4.125rem,0,0)}.t-card{inline-size:2rem;block-size:2rem}.t-collapsed{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;padding:1.25rem var(--tui-padding-l) 0;box-sizing:border-box;font:var(--tui-font-text-m);line-height:2.25rem;color:var(--tui-text-primary);white-space:nowrap;pointer-events:none}.t-collapsed_enable-mask:before{content:attr(data-before)}.t-collapsed_enable-mask .t-collapsed-wrapper{left:1.375rem}.t-collapsed-wrapper{position:absolute;top:0;display:block;inline-size:100%;block-size:100%;overflow:hidden}.t-value{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;bottom:0;right:100%;display:block;transform:translate3d(100%,0,0)}.t-input{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border:0;margin:0;padding:1.25rem var(--tui-padding-l) 0;outline:none;background:transparent;box-sizing:border-box;font:var(--tui-font-text-m);color:var(--tui-text-primary)}.t-input::placeholder{color:var(--tui-text-tertiary)}.t-input_prefilled::placeholder{color:var(--tui-text-primary)}.t-input[chrome-autofilled],.t-input:-webkit-autofill{-webkit-text-fill-color:var(--tui-text-primary)!important;caret-color:var(--tui-text-primary)!important;-webkit-transition:background-color 600000s 0s;transition:background-color 600000s 0s}.t-input.t-input.t-input_card:not(:-webkit-autofill):not(:focus:placeholder-shown),.t-input.t-input.t-input_card.t-input_filled{caret-color:var(--tui-text-primary);color:transparent!important;-webkit-text-fill-color:transparent!important}.t-input.t-input.t-input_card::-webkit-credit-card-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input_inert{pointer-events:none}.t-input_cvc_hidden{-webkit-text-security:disc}.t-icons{position:absolute;right:.75rem;display:flex;align-items:center;block-size:100%}.t-icon-outlet{display:flex;margin-right:.25rem}.t-icon{cursor:pointer;border-width:.25rem}.t-label{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;margin:1.125rem 1rem;font:var(--tui-font-text-m);line-height:1.25rem;color:var(--tui-text-secondary)}input:-webkit-autofill~.t-label,.t-label_raised{font-size:.8156rem;transform:translateY(-.7em)}:host([data-mode~="invalid"]) .t-label{color:var(--tui-text-negative)}:host([data-focus="true"]) .t-label{color:var(--tui-text-primary)}.t-ghost{visibility:hidden}\n']
    }]
  }], null, {
    inputCard: [{
      type: ViewChild,
      args: ["inputCard"]
    }],
    inputExpire: [{
      type: ViewChild,
      args: ["inputExpire"]
    }],
    inputCVC: [{
      type: ViewChild,
      args: ["inputCVC"]
    }],
    exampleText: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    inputs: [{
      type: Input
    }],
    cardValidator: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    binChange: [{
      type: Output
    }],
    codeLength: [{
      type: Input
    }],
    isFocusable: [],
    getPaymentSystem: []
  });
})();

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-components-input-cvc.mjs
var TuiInputCVC = class _TuiInputCVC {
  constructor() {
    this.mask = tuiMaskito(TUI_MASK_CVC(3));
    this.autocomplete = inject(TUI_INPUT_CARD_OPTIONS).autocomplete;
    this.hidden = true;
    this.length = 3;
  }
  // TODO: refactor to signal inputs after Angular update
  ngOnChanges() {
    this.mask.set(TUI_MASK_CVC(this.length));
  }
  static {
    this.ɵfac = function TuiInputCVC_Factory(t) {
      return new (t || _TuiInputCVC)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputCVC,
      selectors: [["input", "tuiInputCVC", ""]],
      hostAttrs: ["inputmode", "numeric"],
      hostVars: 4,
      hostBindings: function TuiInputCVC_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("copy.prevent", function TuiInputCVC_copy_prevent_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("autocomplete", ctx.autocomplete ? "cc-csc" : "off")("placeholder", "0".repeat(ctx.length));
          ɵɵstyleProp("-webkit-text-security", ctx.hidden ? "disc" : null);
        }
      },
      inputs: {
        autocomplete: "autocomplete",
        hidden: "hidden",
        length: "length"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([MaskitoDirective, TuiWithTextfield]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputCVC, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiInputCVC]",
      hostDirectives: [MaskitoDirective, TuiWithTextfield],
      host: {
        inputmode: "numeric",
        "[autocomplete]": 'autocomplete ? "cc-csc" : "off"',
        "[placeholder]": '"0".repeat(length)',
        "[style.-webkit-text-security]": 'hidden ? "disc" : null',
        "(copy.prevent)": "(0)"
      }
    }]
  }], null, {
    autocomplete: [{
      type: Input
    }],
    hidden: [{
      type: Input
    }],
    length: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-components-input-expire.mjs
var TuiInputExpire = class _TuiInputExpire {
  constructor() {
    this.mask = tuiMaskito(TUI_MASK_EXPIRE);
    this.autocomplete = inject(TUI_INPUT_CARD_OPTIONS).autocomplete;
  }
  static {
    this.ɵfac = function TuiInputExpire_Factory(t) {
      return new (t || _TuiInputExpire)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputExpire,
      selectors: [["input", "tuiInputExpire", ""]],
      hostAttrs: ["inputmode", "numeric", "placeholder", "00/00", "translate", "no", "maxlength", "5"],
      hostVars: 2,
      hostBindings: function TuiInputExpire_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("autocomplete", ctx.autocomplete ? "cc-exp" : "off");
          ɵɵattribute("name", ctx.autocomplete ? "ccexpiryyear" : null);
        }
      },
      inputs: {
        autocomplete: "autocomplete"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([MaskitoDirective, TuiWithTextfield])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputExpire, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiInputExpire]",
      hostDirectives: [MaskitoDirective, TuiWithTextfield],
      host: {
        inputmode: "numeric",
        placeholder: "00/00",
        translate: "no",
        maxlength: "5",
        "[attr.name]": 'autocomplete ? "ccexpiryyear" : null',
        "[autocomplete]": 'autocomplete ? "cc-exp" : "off"'
      }
    }]
  }], null, {
    autocomplete: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-components-thumbnail-card.mjs
var _c03 = [[["img"]], "*"];
var _c12 = ["img", "*"];
function TuiThumbnailCard_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r0.iconStart);
  }
}
function TuiThumbnailCard_tui_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r0.iconEnd);
  }
}
function TuiThumbnailCard_ng_container_6_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.options.icons[ctx_r0.paymentSystem]);
  }
}
function TuiThumbnailCard_ng_container_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 10);
    ɵɵpipe(1, "tuiIcon");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("alt", ctx_r0.paymentSystem)("src", ɵɵpipeBind1(1, 2, ctx_r0.options.icons[ctx_r0.paymentSystem]), ɵɵsanitizeUrl);
  }
}
function TuiThumbnailCard_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiThumbnailCard_ng_container_6_tui_icon_1_Template, 1, 1, "tui-icon", 8)(2, TuiThumbnailCard_ng_container_6_ng_template_2_Template, 2, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const colored_r2 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.monoHandler(ctx_r0.paymentSystem))("ngIfElse", colored_r2);
  }
}
var TUI_THUMBNAIL_CARD_OPTIONS = tuiCreateTokenFromFactory(() => ({
  icons: inject(TUI_PAYMENT_SYSTEM_ICONS),
  size: "m",
  monoHandler: (ps) => ps === "mir" || ps === "visa" || ps === "electron"
}));
var TuiThumbnailCard = class _TuiThumbnailCard {
  constructor() {
    this.options = inject(TUI_THUMBNAIL_CARD_OPTIONS);
    this.size = this.options.size;
    this.paymentSystem = null;
    this.iconStart = "";
    this.iconEnd = "";
    this.monoHandler = this.options.monoHandler;
  }
  static {
    this.ɵfac = function TuiThumbnailCard_Factory(t) {
      return new (t || _TuiThumbnailCard)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiThumbnailCard,
      selectors: [["tui-thumbnail-card"]],
      hostVars: 1,
      hostBindings: function TuiThumbnailCard_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size",
        paymentSystem: "paymentSystem",
        iconStart: "iconStart",
        iconEnd: "iconEnd",
        monoHandler: "monoHandler"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c12,
      decls: 7,
      vars: 3,
      consts: [["colored", ""], ["class", "t-icon t-left", 3, "icon", 4, "ngIf"], [1, "t-left", "t-icon"], ["class", "t-right t-icon", 3, "icon", 4, "ngIf"], [1, "t-content"], [4, "ngIf"], [1, "t-icon", "t-left", 3, "icon"], [1, "t-right", "t-icon", 3, "icon"], ["class", "t-logo", 3, "icon", 4, "ngIf", "ngIfElse"], [1, "t-logo", 3, "icon"], [1, "t-logo", 3, "alt", "src"]],
      template: function TuiThumbnailCard_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c03);
          ɵɵtemplate(0, TuiThumbnailCard_tui_icon_0_Template, 1, 1, "tui-icon", 1);
          ɵɵelementStart(1, "div", 2);
          ɵɵprojection(2);
          ɵɵelementEnd();
          ɵɵtemplate(3, TuiThumbnailCard_tui_icon_3_Template, 1, 1, "tui-icon", 3);
          ɵɵelementStart(4, "div", 4);
          ɵɵprojection(5, 1);
          ɵɵelementEnd();
          ɵɵtemplate(6, TuiThumbnailCard_ng_container_6_Template, 4, 2, "ng-container", 5);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.iconStart);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.iconEnd);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.paymentSystem);
        }
      },
      dependencies: [NgIf, TuiIcon, TuiIconPipe],
      styles: ['[_nghost-%COMP%]{position:relative;display:inline-block;flex-shrink:0;background:#000;color:#fff;transform-style:preserve-3d;overflow:hidden;box-shadow:inset 0 0 0 1px var(--tui-background-neutral-1);--t-logo-height: .8125rem}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit}[_nghost-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(180deg) translateZ(1px);color:#b0b0b0;border-radius:inherit;background:linear-gradient(to bottom,currentColor 0 20%,#959595 20% 40%,currentColor 40%)}[data-size=xs][_nghost-%COMP%], [data-size=s][_nghost-%COMP%]{font-size:0;border-radius:.25rem}[data-size=xs][_nghost-%COMP%]{inline-size:2rem;block-size:1.375rem}[data-size=s][_nghost-%COMP%]{inline-size:2.5rem;block-size:1.625rem}[data-size=m][_nghost-%COMP%]{inline-size:3rem;block-size:2rem;border-radius:.3125rem;font:normal .5625rem / var(--t-logo-height) var(--tui-font-text)}[data-size=l][_nghost-%COMP%]{inline-size:3.375rem;block-size:2.25rem;border-radius:.375rem;font:normal .6875rem / var(--t-logo-height) var(--tui-font-text)}.t-left[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;transform-origin:top left}[data-size=xs][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.125rem,.125rem) scale(.625)}[data-size=m][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.1875rem,.1875rem) scale(.875)}[data-size=l][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.1875rem,.1875rem)}.t-right[_ngcontent-%COMP%]{position:absolute;top:.1875rem;right:.1875rem}[data-size=xs][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{display:none}[data-size=m][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{inline-size:.875rem;block-size:.875rem}[data-size=m][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]:after{transform:scale(.5)}[data-size=l][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{inline-size:1rem;block-size:1rem}[data-size=l][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]:after{color:#fff;transform:scale(.625)}.t-right[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-radius:100%;background:currentColor;opacity:.35}.t-logo[_ngcontent-%COMP%]{position:absolute;right:.25rem;bottom:0;block-size:var(--t-logo-height);transform-origin:right}[data-size=xs][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{right:.125rem}[data-size=m][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%], [data-size=l][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:.0625rem}.t-logo[_ngcontent-%COMP%]:after{-webkit-mask-position:right;mask-position:right}.t-content[_ngcontent-%COMP%]{position:absolute}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{left:.1875rem;bottom:.0625rem}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{left:.25rem;bottom:.0625rem}.t-icon[_ngcontent-%COMP%]{inline-size:1rem;block-size:1rem}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiThumbnailCard, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-thumbnail-card",
      imports: [NgIf, TuiIcon, TuiIconPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-size]": "size"
      },
      template: '<!-- TODO: use this icon as a fallback for <ng-content select="img" /> (Angular 18)  -->\n<tui-icon\n    *ngIf="iconStart"\n    class="t-icon t-left"\n    [icon]="iconStart"\n/>\n\n<div class="t-left t-icon">\n    <ng-content select="img" />\n</div>\n\n<tui-icon\n    *ngIf="iconEnd"\n    class="t-right t-icon"\n    [icon]="iconEnd"\n/>\n\n<div class="t-content">\n    <ng-content />\n</div>\n\n<ng-container *ngIf="paymentSystem">\n    <tui-icon\n        *ngIf="monoHandler(paymentSystem); else colored"\n        class="t-logo"\n        [icon]="options.icons[paymentSystem]"\n    />\n    <ng-template #colored>\n        <img\n            class="t-logo"\n            [alt]="paymentSystem"\n            [src]="options.icons[paymentSystem] | tuiIcon"\n        />\n    </ng-template>\n</ng-container>\n',
      styles: [':host{position:relative;display:inline-block;flex-shrink:0;background:#000;color:#fff;transform-style:preserve-3d;overflow:hidden;box-shadow:inset 0 0 0 1px var(--tui-background-neutral-1);--t-logo-height: .8125rem}:host:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit}:host:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(180deg) translateZ(1px);color:#b0b0b0;border-radius:inherit;background:linear-gradient(to bottom,currentColor 0 20%,#959595 20% 40%,currentColor 40%)}:host[data-size=xs],:host[data-size=s]{font-size:0;border-radius:.25rem}:host[data-size=xs]{inline-size:2rem;block-size:1.375rem}:host[data-size=s]{inline-size:2.5rem;block-size:1.625rem}:host[data-size=m]{inline-size:3rem;block-size:2rem;border-radius:.3125rem;font:normal .5625rem / var(--t-logo-height) var(--tui-font-text)}:host[data-size=l]{inline-size:3.375rem;block-size:2.25rem;border-radius:.375rem;font:normal .6875rem / var(--t-logo-height) var(--tui-font-text)}.t-left{position:absolute;top:0;left:0;display:flex;transform-origin:top left}:host[data-size=xs] .t-left,:host[data-size=s] .t-left{transform:translate(.125rem,.125rem) scale(.625)}:host[data-size=m] .t-left{transform:translate(.1875rem,.1875rem) scale(.875)}:host[data-size=l] .t-left{transform:translate(.1875rem,.1875rem)}.t-right{position:absolute;top:.1875rem;right:.1875rem}:host[data-size=xs] .t-right,:host[data-size=s] .t-right{display:none}:host[data-size=m] .t-right{inline-size:.875rem;block-size:.875rem}:host[data-size=m] .t-right:after{transform:scale(.5)}:host[data-size=l] .t-right{inline-size:1rem;block-size:1rem}:host[data-size=l] .t-right:after{color:#fff;transform:scale(.625)}.t-right:before{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-radius:100%;background:currentColor;opacity:.35}.t-logo{position:absolute;right:.25rem;bottom:0;block-size:var(--t-logo-height);transform-origin:right}:host[data-size=xs] .t-logo{right:.125rem}:host[data-size=m] .t-logo,:host[data-size=l] .t-logo{bottom:.0625rem}.t-logo:after{-webkit-mask-position:right;mask-position:right}.t-content{position:absolute}:host[data-size=m] .t-content{left:.1875rem;bottom:.0625rem}:host[data-size=l] .t-content{left:.25rem;bottom:.0625rem}.t-icon{inline-size:1rem;block-size:1rem}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    paymentSystem: [{
      type: Input
    }],
    iconStart: [{
      type: Input
    }],
    iconEnd: [{
      type: Input
    }],
    monoHandler: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/addon-commerce/fesm2022/taiga-ui-addon-commerce-validators.mjs
function tuiCardExpireValidator({
  value
}) {
  return value?.expire?.length === 5 && !tuiIsExpireValid(value?.expire) ? {
    expire: new TuiValidationError("Expire date")
  } : null;
}
function tuiCardNumberValidator({
  value
}) {
  return value?.card && !tuiIsCardNumberValid(value.card) ? {
    card: new TuiValidationError("Invalid card number")
  } : null;
}
function tuiCreateLuhnValidator(message) {
  return ({
    value
  }) => tuiIsCardNumberValid(value) ? null : {
    luhn: new TuiValidationError(message)
  };
}
export {
  TUI_AMOUNT_DEFAULT_OPTIONS,
  TUI_AMOUNT_OPTIONS,
  TUI_BIN_TABLE,
  TUI_CARD_CVC_TEXTS,
  TUI_CARD_EXPIRY_TEXTS,
  TUI_CARD_NUMBER_TEXTS,
  TUI_CODE_DICTIONARY,
  TUI_CURRENCY_DICTIONARY,
  TUI_INPUT_CARD_DEFAULT_OPTIONS,
  TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS,
  TUI_INPUT_CARD_GROUP_OPTIONS,
  TUI_INPUT_CARD_GROUP_TEXTS,
  TUI_INPUT_CARD_OPTIONS,
  TUI_MASK_CARD,
  TUI_MASK_CARD_HOLDER,
  TUI_MASK_CVC,
  TUI_MASK_EXPIRE,
  TUI_PAYMENT_SYSTEM_ICONS,
  TUI_THUMBNAIL_CARD_OPTIONS,
  TuiAmountPipe,
  TuiCurrency,
  TuiCurrencyCode,
  TuiCurrencyPipe,
  TuiDecimalPipe,
  TuiFormatCardPipe,
  TuiInputCVC,
  TuiInputCard,
  TuiInputCardGroup,
  TuiInputExpire,
  TuiThumbnailCard,
  tuiAmountOptionsProvider,
  tuiCardExpireValidator,
  tuiCardNumberValidator,
  tuiCreateLuhnValidator,
  tuiDefaultCardValidator,
  tuiFormatCurrency,
  tuiFormatSignSymbol,
  tuiGetCodeByCurrency,
  tuiGetCurrencyByCode,
  tuiGetCurrencySymbol,
  tuiGetPaymentSystem,
  tuiInputCardGroupOptionsProvider,
  tuiInputCardOptionsProvider,
  tuiIsCardLengthValid,
  tuiIsCardNumberValid,
  tuiIsElectron,
  tuiIsExpireValid,
  tuiIsMaestro,
  tuiIsMastercard,
  tuiIsMir,
  tuiIsVisa
};
//# sourceMappingURL=@taiga-ui_addon-commerce.js.map
