import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  AboutUsComponent,
  ContactUsComponent,
  FaqComponent,
  InquireNowComponent,
  StagingComponent,
  EventsCalendarComponent
} from './components';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutUsComponent
    },
    {
      path: 'contact',
      component: ContactUsComponent
    },
    {
      path: 'faq',
      component: FaqComponent
    },
    {
      path: 'inquire',
      component: InquireNowComponent
    },
    {
      path: 'staging',
      component: StagingComponent
    },
    {
      path: 'events-calender',
      component: EventsCalendarComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
