import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Aircraft } from '../../models/aircraft';
import { AircraftsTableDataSource } from './aircrafts-table-datasource';

@Component({
  selector: 'app-aircrafts-table',
  templateUrl: './aircrafts-table.component.html',
  styleUrls: ['./aircrafts-table.component.scss']
})
export class AircraftsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Aircraft>;
  @Input('aircrafts') data!: Aircraft[];
  dataSource: AircraftsTableDataSource = new AircraftsTableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['registrationNumber', 'serialNumber', 'modelName', 'registrationStatus', 'registrationDate', 'actions'];

  ngOnInit(): void {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
