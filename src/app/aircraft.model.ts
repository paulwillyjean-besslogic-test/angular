export interface Aircraft {
    modelName: string,
    serialNumber: string
    registrationNumber: number,
    registrationStatus: RegistrationStatus,
    registrationDate: Date
}

export enum RegistrationStatus {
    Pending = 'Pending',
    Valid = 'Valid',
    InQuestion = 'InQuestion',
    SaleReported = 'SaleReported',
    Retired = 'Retired'
}