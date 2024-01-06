import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Cónfiguración del locale de la app
import localeEsEC from "@angular/common/locales/es-EC";
import localeFrCA from "@angular/common/locales/fr-CA";

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsEC);
registerLocaleData(localeFrCA);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-EC',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
