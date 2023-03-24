import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AircraftRoutingModule } from "./aircraft-routing.module";
import { AircraftAddComponent, AircraftEditComponent, AircraftListComponent, AircraftsTableComponent, AircraftViewComponent } from './components';
import { AircraftFormComponent } from './components/aircraft-form/aircraft-form.component';

@NgModule({
    declarations: [
        AircraftAddComponent,
        AircraftEditComponent,
        AircraftListComponent,
        AircraftViewComponent,
        AircraftsTableComponent,
        AircraftFormComponent
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
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        AircraftRoutingModule
    ]
})
export class AircraftModule { }