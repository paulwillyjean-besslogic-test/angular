import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aircraft } from '../../models/aircraft';

@Component({
  selector: 'app-aircraft-view',
  templateUrl: './aircraft-view.component.html',
  styleUrls: ['./aircraft-view.component.scss']
})
export class AircraftViewComponent implements OnInit {
  aircraft!:Aircraft;
  id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.aircraft = data['aircraft'];
      this.id = this.aircraft.registrationNumber;
    })
  }
}
