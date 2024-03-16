import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PawsAndTailsDashComponent } from './paws-and-tails-dash/paws-and-tails-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    PawsAndTailsDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
