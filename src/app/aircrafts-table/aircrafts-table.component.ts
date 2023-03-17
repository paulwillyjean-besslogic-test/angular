import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Aircraft } from '../aircraft.model';
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
  dataSource: AircraftsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Registration Number', 'Serial Number', 'Model Name', 'Registration Status', 'Registration Date'];

  constructor(private route: ActivatedRoute) {
    this.dataSource = new AircraftsTableDataSource();
  }

  ngOnInit(): void {
      this.route.data.subscribe(data => {
        this.dataSource.data = data['aircrafts'];
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
