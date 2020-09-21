import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEastAfricaComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: AllEastAfricaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EastAfricaRoutingModule { }
