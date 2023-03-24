import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AircraftsService } from '../../aircrafts.service';
import { Aircraft } from '../../models/aircraft';

@Component({
  selector: 'app-aircraft-edit',
  templateUrl: './aircraft-edit.component.html',
  styleUrls: ['./aircraft-edit.component.scss']
})
export class AircraftEditComponent implements OnInit {
  id!:number;
  aircraft!:Aircraft;

  constructor(private aircrafts:AircraftsService, private route:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.route.data.subscribe(data => {
        this.aircraft = data['aircraft'];
        this.id = this.aircraft.registrationNumber;
      });
  }

  updateAircraft(data: Aircraft) {
    this.aircrafts.update(this.id, data)
      .subscribe((aircraft: Aircraft) => {
        if (aircraft) {
          this.router.navigate(['/aircrafts', aircraft.registrationNumber, 'view']);
        }

      });
  }
}
