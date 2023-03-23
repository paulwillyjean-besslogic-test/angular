import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft } from './models/aircraft';
import { RegistrationStatus } from './models/registration-status';

const EXAMPLE_DATA: Aircraft[] = [
  {registrationNumber: 1, modelName: 'Hydrogen', serialNumber: 'S-001', registrationStatus: RegistrationStatus.Pending, registrationDate: new Date()},
  {registrationNumber: 2, modelName: 'Helium', serialNumber: 'S-002', registrationStatus: RegistrationStatus.Valid, registrationDate: new Date('1970-01-01')},
  {registrationNumber: 3, modelName: 'Lithium', serialNumber: 'S-003', registrationStatus: RegistrationStatus.InQuestion, registrationDate: new Date('1980-07-25')},
  {registrationNumber: 4, modelName: 'Beryllium', serialNumber: 'S-004', registrationStatus: RegistrationStatus.SaleReported, registrationDate: new Date('1993-07-25')},
  {registrationNumber: 5, modelName: 'Boron', serialNumber: 'S-005', registrationStatus: RegistrationStatus.Valid, registrationDate: new Date('2023-03-17')},
  {registrationNumber: 6, modelName: 'Carbon', serialNumber: 'S-006', registrationStatus: RegistrationStatus.Valid, registrationDate: new Date('2000-10-29')},
  {registrationNumber: 7, modelName: 'Nitrogen', serialNumber: 'S-007', registrationStatus: RegistrationStatus.SaleReported, registrationDate: new Date('1999-10-31')},
  {registrationNumber: 8, modelName: 'Oxygen', serialNumber: 'S-008', registrationStatus: RegistrationStatus.Retired, registrationDate: new Date('1960-12-31')},
  {registrationNumber: 9, modelName: 'Fluorine', serialNumber: 'S-009', registrationStatus: RegistrationStatus.Retired, registrationDate: new Date('1998-04-05')},
  {registrationNumber: 10, modelName: 'Neon', serialNumber: 'S-010', registrationStatus: RegistrationStatus.InQuestion, registrationDate: new Date('1999-09-29')},
  {registrationNumber: 11, modelName: 'Sodium', serialNumber: 'S-011', registrationStatus: RegistrationStatus.InQuestion, registrationDate: new Date('1960-10-29')},
  {registrationNumber: 12, modelName: 'Magnesium', serialNumber: 'S-012', registrationStatus: RegistrationStatus.SaleReported, registrationDate: new Date('1957-09-16')},
  {registrationNumber: 13, modelName: 'Aluminum', serialNumber: 'S-013', registrationStatus: RegistrationStatus.Valid, registrationDate: new Date('1968-05-01')},
  {registrationNumber: 14, modelName: 'Silicon', serialNumber: 'S-014', registrationStatus: RegistrationStatus.Valid, registrationDate: new Date('1990-05-18')},
  {registrationNumber: 15, modelName: 'Phosphorus', serialNumber: 'S-015', registrationStatus: RegistrationStatus.Valid, registrationDate: new Date('1940-02-28')},
  {registrationNumber: 16, modelName: 'Sulfur', serialNumber: 'S-016', registrationStatus: RegistrationStatus.Valid, registrationDate: new Date('2006-06-06')},
  {registrationNumber: 17, modelName: 'Chlorine', serialNumber: 'S-017', registrationStatus: RegistrationStatus.Pending, registrationDate: new Date('1950-08-13')},
  {registrationNumber: 18, modelName: 'Argon', serialNumber: 'S-018', registrationStatus: RegistrationStatus.Pending, registrationDate: new Date('1981-11-17')},
  {registrationNumber: 19, modelName: 'Potassium', serialNumber: 'S-019', registrationStatus: RegistrationStatus.Pending, registrationDate: new Date('1993-07-25')},
  {registrationNumber: 20, modelName: 'Calcium', serialNumber: 'S-020', registrationStatus: RegistrationStatus.Pending, registrationDate: new Date('1999-04-05')},
];

@Injectable({
  providedIn: 'root'
})
export class AircraftsService {

  
  constructor(private http: HttpClient) { }

  getList(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(`${environment.apiUrl}/aircraft`);
  }

  get(id: number): Observable<Aircraft> {
    return this.http.get<Aircraft>(`${environment.apiUrl}/aircraft/${id}`);
  }
}
