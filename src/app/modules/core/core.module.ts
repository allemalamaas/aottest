import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule} from "../app-routing/app-routing.module";
import { MainModule } from "../main/main.module";
import {EndpointService} from "./services/endpoint.service";
import { MaterialModule } from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FlexDirective } from './flex.directive';
import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot(),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [
    EndpointService
  ],
  exports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    MainModule,
    NgbModule,
    MaterialModule,
    FlexDirective
  ],
  declarations: [FlexDirective]
})
export class CoreModule { }
