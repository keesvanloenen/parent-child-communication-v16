import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app/app-routing';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(
    [
      RouterModule.forRoot(APP_ROUTES),
      BrowserAnimationsModule,
    ]
  )],
});
