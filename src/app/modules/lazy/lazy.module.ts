import { NgModule } from '@angular/core';
import { LazyComponent } from './components/lazy/lazy.component';

import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import {PostListComponent} from "./components/post-list/post-list.component";
import { StoreModule } from '@ngrx/store';
//import {peopleReducer} from "./reducers/peopleReducer";
import { PeopleListComponent } from './components/people-list/people-list.component';



export const routes: Routes = [
  { path: '', component: LazyComponent},
  { path: 'posts', component: PostListComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    //StoreModule.provideStore({ people: peopleReducer })
  ],
  declarations: [LazyComponent, PostListComponent, PeopleListComponent]
})
export class LazyModule { }
