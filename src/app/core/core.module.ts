import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { httpInterceptorProviders } from './interceptors';
import { RouterModule } from '@angular/router';
import * as fr from '@angular/common/locales/fr';




@NgModule({
  declarations: [
    HeaderComponent ,
  ],
  imports: [
    CommonModule ,
    RouterModule
  ] ,

  exports: [
    HeaderComponent
  ],

  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' } ,
    httpInterceptorProviders
  ]
})
export class CoreModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
