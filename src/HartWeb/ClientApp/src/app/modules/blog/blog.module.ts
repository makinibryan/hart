import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../../shared/shared.module';

import {
    AllBlogsComponent,
    BlogNairobiNationalParkComponent,
    BlogComponent,
    BlogLongonotComponent
} from './components';


@NgModule({
    declarations: [
        BlogComponent,
        BlogNairobiNationalParkComponent,
        AllBlogsComponent,
        BlogLongonotComponent],
    imports: [
        CommonModule,
        SharedModule,
        BlogRoutingModule
    ]
})
export class BlogModule {
}
