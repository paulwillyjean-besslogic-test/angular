import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, Router } from "@angular/router";
import { EMPTY, mergeMap, of } from "rxjs";
import { Aircraft } from "./models/aircraft";
import { AircraftsService } from "./aircrafts.service";

export const aircraftsResolver: ResolveFn<Aircraft[]> = () => {
    return inject(AircraftsService).getList();
};

export const aircraftResolver: ResolveFn<Aircraft> = (route: ActivatedRouteSnapshot) => {
    const aircraftsService = inject(AircraftsService);
    const router = inject(Router);
    const id = Number.parseInt(route.paramMap.get('id')!);

    return aircraftsService.get(id)
        .pipe(mergeMap(aircraft => {
            if (aircraft) {
                return of(aircraft);
            }
            
            router.navigate(['/aircraft']);
            return EMPTY;
        }))
}