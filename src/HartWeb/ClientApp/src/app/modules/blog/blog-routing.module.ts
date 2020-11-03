import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogNairobiNationalParkComponent } from './components';

import { BlogComponent } from './components/blog.component';

const routes: Routes = [
    {
      path: '',
      component: BlogComponent
    },
    {
      path: 'nairobi-national-park-blog',
      component: BlogNairobiNationalParkComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule{

 }