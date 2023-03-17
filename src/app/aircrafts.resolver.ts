import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Aircraft } from "./aircraft.model";
import { AircraftsService } from "./aircrafts.service";

export const aircraftsResolver: ResolveFn<Aircraft[]> = (route: ActivatedRouteSnapshot) => {
    const aircraftsService = inject(AircraftsService);

    return aircraftsService.getList();
};