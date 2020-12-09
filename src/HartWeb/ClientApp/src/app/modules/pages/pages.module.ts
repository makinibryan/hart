import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../app/shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';

import {
  AboutUsComponent,
  FaqComponent,
  HomeComponent,
  ContactUsComponent,
  InquireNowComponent,
  StagingComponent,
  EventsCalendarComponent
} from './components';



@NgModule({
  declarations: [
    AboutUsComponent,
    FaqComponent,
    HomeComponent,
    ContactUsComponent,
    InquireNowComponent,
    StagingComponent,
    EventsCalendarComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
