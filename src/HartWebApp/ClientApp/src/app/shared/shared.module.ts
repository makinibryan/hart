import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


import {
  BaseComponent,
  PreLoadSpinnerComponent,
  BookByPhoneRightComponent,
  FooterComponent,
  BookByPhoneLeftComponent,
  SideMenuComponent,

 } from './components';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { RequestQuoteButtonComponent } from './components/request-quote-button/request-quote-button.component';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
  BaseComponent,
  PreLoadSpinnerComponent,
  BookByPhoneRightComponent,
  FooterComponent,
  BookByPhoneLeftComponent,
  SideMenuComponent,
  SocialMediaComponent,
  RequestQuoteButtonComponent
],
  exports: [
      FlexLayoutModule,
      MaterialModule,
      CommonModule,
      FormsModule,
      RouterModule,
      HttpClientModule,
      BaseComponent,
      PreLoadSpinnerComponent,
      BookByPhoneRightComponent,
      FooterComponent,
      BookByPhoneLeftComponent,
      SideMenuComponent,
      RequestQuoteButtonComponent
  ],
  entryComponents: [
  ]
})
export class SharedModule { }

