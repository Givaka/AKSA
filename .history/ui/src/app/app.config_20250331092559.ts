import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)],

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
