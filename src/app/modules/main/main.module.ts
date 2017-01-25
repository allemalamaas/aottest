import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { SharedModule } from "../shared/shared.module";
import { TimerComponent, counterReducer } from './components/timer/timer.component';
import { peopleReducer } from '../lazy/reducers/peopleReducer';

import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.provideStore({
      counter: counterReducer,
      people: peopleReducer
    })
  ],
  declarations: [MainComponent, TimerComponent]
})
export class MainModule { }
