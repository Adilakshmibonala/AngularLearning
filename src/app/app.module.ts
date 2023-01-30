import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ServerComponent} from './server/server.component'
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { GoogleTransulatorComponent } from './google-transulator/google-transulator.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    Assignment2Component,
    Assignment3Component,
    GoogleTransulatorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
