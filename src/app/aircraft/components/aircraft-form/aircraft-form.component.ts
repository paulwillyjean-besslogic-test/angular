import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Aircraft } from '../../models/aircraft';
import { RegistrationStatus } from '../../models/registration-status';

export interface AircraftForm {
  registrationNumber?:FormControl<number|null>,
  serialNumber:FormControl<string>,
  modelName:FormControl<string>
  registrationStatus?:FormControl<RegistrationStatus|null>,
  registrationDate?:FormControl<Date|null>
}

@Component({
  selector: 'app-aircraft-form',
  templateUrl: './aircraft-form.component.html',
  styleUrls: ['./aircraft-form.component.scss']
})
export class AircraftFormComponent implements OnInit {

  @Input() model?:Aircraft;
  @Output() submit: EventEmitter<Aircraft> = new EventEmitter<Aircraft>();
  @Output() name:string = 'aircraft';
  form: FormGroup<AircraftForm> = new FormGroup<AircraftForm>({
    registrationNumber: new FormControl(this.model?.registrationNumber || null, {
      nonNullable: true,
      validators: [Validators.required]
    }),
    serialNumber: new FormControl(this.model?.serialNumber || '', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    modelName: new FormControl(this.model?.modelName || '', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    registrationStatus: new FormControl(this.model?.registrationStatus || RegistrationStatus.Pending, {
      nonNullable: true,
      validators: [Validators.required]
    }),
    registrationDate: new FormControl(this.model?.registrationDate || null, {
      nonNullable: true,
      validators: [Validators.required]
    })
  });
  registrationOptions = [
    {value: RegistrationStatus.Pending, label: 'Pending'},
    {value: RegistrationStatus.InQuestion, label: 'In Question'},
    {value: RegistrationStatus.Valid, label: 'Valid'},
    {value: RegistrationStatus.SaleReported, label: 'Sale Reported'},
    {value: RegistrationStatus.Retired, label: 'Retired'}
  ];

  get valid(): boolean {
    return this.form.valid;
  }

  ngOnInit() {
    if (!this.model?.registrationNumber) {
      this.form.removeControl("registrationNumber");
      this.form.removeControl("registrationStatus");
      this.form.removeControl("registrationDate");
      return;
    }

    this.form.reset(this.model);
  }

  submitAircraft(event: SubmitEvent) {
    event.preventDefault();

    this.submit.emit(this.form.value as Aircraft);
  }
}
