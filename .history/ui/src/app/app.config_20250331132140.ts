import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

	import { provideAnimations } from '@angular/platform-browser/animations';
  import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideAnimations(),
    NG_EVENT_PLUGINS,
  ],
};
