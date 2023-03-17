import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftAddComponent } from './aircraft-add/aircraft-add.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { aircraftsResolver } from './aircrafts.resolver';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  {
    path: 'aircraft',
    title: 'Aircrafts',
    resolve: {
      aircrafts: aircraftsResolver
    },
    children: [
      { path: '', component: AircraftListComponent, pathMatch: 'full' },
      { path: 'add', title: 'Add Aircraft', component: AircraftAddComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
