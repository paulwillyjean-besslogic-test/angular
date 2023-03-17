import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Aircraft } from './aircraft.model';

const EXAMPLE_DATA: Aircraft[] = [
  {registrationNumber: 1, modelName: 'Hydrogen', serialNumber: 'S-001', registrationStatus: 'pending', registrationDate: new Date()},
  {registrationNumber: 2, modelName: 'Helium', serialNumber: 'S-002', registrationStatus: 'valid', registrationDate: new Date('1970-01-01')},
  {registrationNumber: 3, modelName: 'Lithium', serialNumber: 'S-003', registrationStatus: 'in-question', registrationDate: new Date('1980-07-25')},
  {registrationNumber: 4, modelName: 'Beryllium', serialNumber: 'S-004', registrationStatus: 'sale-reported', registrationDate: new Date('1993-07-25')},
  {registrationNumber: 5, modelName: 'Boron', serialNumber: 'S-005', registrationStatus: 'valid', registrationDate: new Date('2023-03-17')},
  {registrationNumber: 6, modelName: 'Carbon', serialNumber: 'S-006', registrationStatus: 'valid', registrationDate: new Date('2000-10-29')},
  {registrationNumber: 7, modelName: 'Nitrogen', serialNumber: 'S-007', registrationStatus: 'sale-reported', registrationDate: new Date('1999-10-31')},
  {registrationNumber: 8, modelName: 'Oxygen', serialNumber: 'S-008', registrationStatus: 'retired', registrationDate: new Date('1960-12-31')},
  {registrationNumber: 9, modelName: 'Fluorine', serialNumber: 'S-009', registrationStatus: 'retired', registrationDate: new Date('1998-04-05')},
  {registrationNumber: 10, modelName: 'Neon', serialNumber: 'S-010', registrationStatus: 'in-question', registrationDate: new Date('1999-09-29')},
  {registrationNumber: 11, modelName: 'Sodium', serialNumber: 'S-011', registrationStatus: 'in-question', registrationDate: new Date('1960-10-29')},
  {registrationNumber: 12, modelName: 'Magnesium', serialNumber: 'S-012', registrationStatus: 'sale-reported', registrationDate: new Date('1957-09-16')},
  {registrationNumber: 13, modelName: 'Aluminum', serialNumber: 'S-013', registrationStatus: 'active', registrationDate: new Date('1968-05-01')},
  {registrationNumber: 14, modelName: 'Silicon', serialNumber: 'S-014', registrationStatus: 'active', registrationDate: new Date('1990-05-18')},
  {registrationNumber: 15, modelName: 'Phosphorus', serialNumber: 'S-015', registrationStatus: 'active', registrationDate: new Date('1940-02-28')},
  {registrationNumber: 16, modelName: 'Sulfur', serialNumber: 'S-016', registrationStatus: 'active', registrationDate: new Date('2006-06-06')},
  {registrationNumber: 17, modelName: 'Chlorine', serialNumber: 'S-017', registrationStatus: 'pending', registrationDate: new Date('1950-08-13')},
  {registrationNumber: 18, modelName: 'Argon', serialNumber: 'S-018', registrationStatus: 'pending', registrationDate: new Date('1981-11-17')},
  {registrationNumber: 19, modelName: 'Potassium', serialNumber: 'S-019', registrationStatus: 'pending', registrationDate: new Date('1993-07-25')},
  {registrationNumber: 20, modelName: 'Calcium', serialNumber: 'S-020', registrationStatus: 'pending', registrationDate: new Date('1999-04-05')},
];

@Injectable({
  providedIn: 'root'
})
export class AircraftsService {

  
  constructor() { }

  getList(): Observable<Aircraft[]> {
    return of(EXAMPLE_DATA);
  }
}
