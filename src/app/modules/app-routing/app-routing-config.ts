
import {Routes} from "@angular/router";
import {MainComponent} from "../main/components/main/main.component";
import {PostListComponent} from "../lazy/components/post-list/post-list.component";

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'lazy', loadChildren: '../lazy/lazy.module#LazyModule'},
  { path: '**', component: MainComponent }
];

