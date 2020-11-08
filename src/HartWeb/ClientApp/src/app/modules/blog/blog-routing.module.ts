import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AllBlogsComponent,
  BlogNairobiNationalParkComponent,
  BlogLongonotComponent
} from './components';


const routes: Routes = [
     {
       path: 'all-blogs',
       component: AllBlogsComponent
     },
     {
       path: 'longonot-blog',
       component: BlogLongonotComponent
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
export class BlogRoutingModule {

 }