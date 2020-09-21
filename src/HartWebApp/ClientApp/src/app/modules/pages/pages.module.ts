import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../app/shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';

import {
  AboutUsComponent,
  FaqComponent,
  HomeComponent,
  ContactUsComponent
} from './components';
import { InquireNowComponent } from './components/inquire-now/inquire-now.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    FaqComponent,
    HomeComponent,
    ContactUsComponent,
    InquireNowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
