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
  StagingComponent
} from './components';


@NgModule({
  declarations: [
    AboutUsComponent,
    FaqComponent,
    HomeComponent,
    ContactUsComponent,
    InquireNowComponent,
    StagingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
