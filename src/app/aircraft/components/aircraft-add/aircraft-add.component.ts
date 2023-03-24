import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddAircraftPayload, AircraftsService } from '../../aircrafts.service';
import { Aircraft } from '../../models/aircraft';

@Component({
  selector: 'app-aircraft-add',
  templateUrl: './aircraft-add.component.html',
  styleUrls: ['./aircraft-add.component.scss']
})
export class AircraftAddComponent {
  constructor(private aircrafts:AircraftsService, private router: Router) {}

  addAircraft(data: AddAircraftPayload) {
    this.aircrafts.add(data)
      .subscribe((aircraft: Aircraft) => {
        if (aircraft) {
          this.router.navigate(['/aircrafts', aircraft.registrationNumber, 'view']);
        }

      });
  }
}
