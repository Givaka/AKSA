import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideAnimations } from '@angular/platform-browser/animations';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';
import { of } from 'rxjs';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)],

  provideClientHydration(),
  provideHttpClient(withInterceptorsFromDi()),
  provideHttpClient(withFetch()),

  importProvidersFrom(AngularYandexMapsModule.forRoot(config)),

  provideAnimations(),
  NG_EVENT_PLUGINS,
  {
    provide: TUI_LANGUAGE,
    useValue: of(TUI_RUSSIAN_LANGUAGE),
  },
};
