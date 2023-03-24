import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { aircraftResolver, aircraftsResolver } from "./aircrafts.resolver";
import { AircraftListComponent, AircraftAddComponent, AircraftEditComponent, AircraftViewComponent } from "./components";

const routes: Routes = [
    {
        path: 'aircraft',
        title: 'Aircrafts',
        resolve: {
            aircrafts: aircraftsResolver
        },
        children: [
            { path: '', component: AircraftListComponent, pathMatch: 'full' },
            { path: 'add', title: 'Add Aircraft', component: AircraftAddComponent },
            {
                path: ':id',
                resolve: {
                    aircraft: aircraftResolver
                },
                children: [
                    { path: '', pathMatch: 'full', redirectTo: 'view' },
                    { path: 'edit', title: 'Edit Aircraft', component: AircraftEditComponent },
                    { path: 'view', title: 'View Aircraft', component: AircraftViewComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AircraftRoutingModule { }