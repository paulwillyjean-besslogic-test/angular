import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
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
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        AircraftRoutingModule
    ]
})
export class AircraftModule { }