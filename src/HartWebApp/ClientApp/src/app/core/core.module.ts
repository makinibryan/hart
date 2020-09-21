import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './services';
import { MultiPurposeService } from './services/multi-purpose.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    MultiPurposeService
  ],
  declarations: [
  ],
  exports: []
})
export class CoreModule { }


