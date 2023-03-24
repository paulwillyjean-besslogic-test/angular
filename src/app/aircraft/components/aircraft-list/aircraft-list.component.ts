import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aircraft } from '../../models/aircraft';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.scss']
})
export class AircraftListComponent implements OnInit {
  aircrafts!: Aircraft[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.data.subscribe(data => {
        this.aircrafts = data['aircrafts'];
      })
  }
}
