import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { BlogComponent } from './components/blog.component';


@NgModule({
    declarations: [BlogComponent],
    imports: [
        CommonModule,
        SharedModule,
        BlogRoutingModule
    ]
})
export class BlogModule {
}
