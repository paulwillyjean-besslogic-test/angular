import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { AircraftRoutingModule } from "./aircraft-routing.module";
import { AircraftAddComponent, AircraftEditComponent, AircraftListComponent, AircraftsTableComponent, AircraftViewComponent } from './components';

@NgModule({
    declarations: [
        AircraftAddComponent,
        AircraftEditComponent,
        AircraftListComponent,
        AircraftViewComponent,
        AircraftsTableComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AircraftRoutingModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class AircraftModule { }