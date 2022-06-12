"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(fullNameClient, apartmentNumber, electricMeterCode) {
        this.fullNameClient = fullNameClient;
        this.apartmentNumber = apartmentNumber;
        this.electricMeterCode = electricMeterCode;
    }
    get getFullNameClient() {
        return this.fullNameClient;
    }
    set setFullNameClient(fullNameClient) {
        this.fullNameClient = fullNameClient;
    }
    get getApartmentNumber() {
        return this.apartmentNumber;
    }
    set setApartmentNumber(apartmentNumber) {
        this.apartmentNumber = apartmentNumber;
    }
    get getElectricMeterCode() {
        return this.electricMeterCode;
    }
    set setElectricMeterCode(electricMeterCode) {
        this.electricMeterCode = electricMeterCode;
    }
}
exports.Client = Client;
