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
  SocialMediaComponent,
  CampaignPaymentDetailsComponent,
  RequestQuoteButtonComponent,
  SideContactConfirmAttendanceComponent

 } from './components';



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
  RequestQuoteButtonComponent,
  CampaignPaymentDetailsComponent,
  SideContactConfirmAttendanceComponent
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
      RequestQuoteButtonComponent,
      CampaignPaymentDetailsComponent,
      SideContactConfirmAttendanceComponent
  ],
  entryComponents: [
  ]
})
export class SharedModule { }

