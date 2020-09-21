import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EastAfricaRoutingModule } from './east-africa-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { AllEastAfricaComponent } from './components/all-east-africa/all-east-africa.component';


@NgModule({
  declarations: [
  AllEastAfricaComponent],
  imports: [
    CommonModule,
    SharedModule,
    EastAfricaRoutingModule
  ]
})
export class EastAfricaModule { }
