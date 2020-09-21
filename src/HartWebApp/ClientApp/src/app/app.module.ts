import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CacheInterceptor } from './core/interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  BlogModule,
  DomesticsModule,
  PagesModule,
  InternationalModule,
  EastAfricaModule,

} from './modules';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BlogModule,
    DomesticsModule,
    EastAfricaModule,
    PagesModule,
    InternationalModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
