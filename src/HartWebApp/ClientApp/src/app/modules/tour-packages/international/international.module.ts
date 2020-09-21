import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { InternationalRoutingModule} from './international-routing.module';
import { AllInternationalComponent } from './components';



@NgModule({
  declarations: [
    AllInternationalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InternationalRoutingModule,
  ]
})
export class InternationalModule { }
