import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../../shared/shared.module';

import {
    AllBlogsComponent,
    BlogNairobiNationalParkComponent,
    BlogLongonotComponent
} from './components';


@NgModule({
    declarations: [
        AllBlogsComponent,
        BlogNairobiNationalParkComponent,
        BlogLongonotComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BlogRoutingModule
    ]
})
export class BlogModule {
}
