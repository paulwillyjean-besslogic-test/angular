import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, of, pipe, map, UnaryFunction } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft } from './models/aircraft';

export interface AddAircraftPayload {
  serialNumber: string,
  modelName: string
}

@Injectable({
  providedIn: 'root'
})
export class AircraftsService {
  constructor(private http: HttpClient) { }

  getList(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(`${environment.apiUrl}/aircraft`)
      .pipe(
        map((aircrafts: Aircraft[]) => aircrafts.map(this.map)),
        catchError(() => of([]))
      );
  }

  get(id: number): Observable<Aircraft | undefined> {
    return this.http.get<Aircraft>(`${environment.apiUrl}/aircraft/${id}`)
      .pipe(
        map(this.map),
        catchError(() => EMPTY)
      );
  }

  add(aircraft: AddAircraftPayload): Observable<Aircraft> {
    return this.http.post<Aircraft>(`${environment.apiUrl}/aircraft`, aircraft)
      .pipe(
        map(this.map),
        catchError(() => EMPTY)
      );
  }

  update(id: number, aircraft: Aircraft): Observable<Aircraft> {
    return this.http.put<Aircraft>(`${environment.apiUrl}/aircraft/${id}`, aircraft)
      .pipe(
        map(this.map),
        catchError(() => EMPTY)
      );
  }

  private map(aircraft: Aircraft): Aircraft {
    aircraft.registrationDate = new Date(aircraft.registrationDate);
    return aircraft;
  }
}
