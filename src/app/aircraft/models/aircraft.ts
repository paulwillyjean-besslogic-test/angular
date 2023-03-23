import { RegistrationStatus } from "./registration-status"

export interface Aircraft {
    modelName: string,
    serialNumber: string
    registrationNumber: number,
    registrationStatus: RegistrationStatus,
    registrationDate: Date
}