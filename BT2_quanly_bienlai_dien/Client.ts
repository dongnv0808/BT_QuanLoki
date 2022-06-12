export class Client{
    private fullNameClient: string;
    private apartmentNumber: string;
    private electricMeterCode: string;
    constructor(fullNameClient: string, apartmentNumber: string, electricMeterCode: string){
        this.fullNameClient = fullNameClient;
        this.apartmentNumber = apartmentNumber;
        this.electricMeterCode = electricMeterCode;
    }
    get getFullNameClient(): string{
        return this.fullNameClient;
    }
    set setFullNameClient(fullNameClient: string){
        this.fullNameClient = fullNameClient;
    }
    get getApartmentNumber(): string{
        return this.apartmentNumber;
    }
    set setApartmentNumber(apartmentNumber: string){
        this.apartmentNumber = apartmentNumber;
    }
    get getElectricMeterCode(): string{
        return this.electricMeterCode;
    }
    set setElectricMeterCode(electricMeterCode: string){
        this.electricMeterCode = electricMeterCode;
    }
}