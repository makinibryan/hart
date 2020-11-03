import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../../shared/shared.module';

import {
    BlogNairobiNationalParkComponent,
    BlogComponent
} from './components'


@NgModule({
    declarations: [BlogComponent, BlogNairobiNationalParkComponent],
    imports: [
        CommonModule,
        SharedModule,
        BlogRoutingModule
    ]
})
export class BlogModule {
}
