/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';
import { hmrBootstrap } from './hmr';

Sentry.init({
  dsn: 'https://a5cac69ad44a45f5a001968902a3087a@o455603.ingest.sentry.io/5509800',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ['https://*.frameshift.app', 'https://yourserver.io/api'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  hmrBootstrap(module, bootstrap);
} else {
  bootstrap().catch((err) => console.error(err));
}
