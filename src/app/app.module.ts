import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PostComponent } from './pages/post/post.component';
import { NgWpComponentsModule } from 'ng-wp-components';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ScullyInterceptModule } from 'scully-interceptor';
import { UnknownComponent } from './pages/unknown/unknown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    PostComponent,
    UnknownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgWpComponentsModule.forRoot('https://wp.learnario.com/' ),
    ScullyLibModule,
    ScullyInterceptModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
