"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricityReceipt = void 0;
class ElectricityReceipt {
    constructor(client, oldIndex, newIndex) {
        this.client = client;
        this.oldIndex = oldIndex;
        this.newIndex = newIndex;
    }
    get getClient() {
        return this.client;
    }
    set setClient(client) {
        this.client = client;
    }
    get getOldIndex() {
        return this.oldIndex;
    }
    set setOldIndex(oldIndex) {
        this.oldIndex = oldIndex;
    }
    get getNewIndex() {
        return this.newIndex;
    }
    set setNewIndex(newIndex) {
        this.newIndex = newIndex;
    }
    get getMoney() {
        return (this.newIndex - this.oldIndex) * 750;
    }
}
exports.ElectricityReceipt = ElectricityReceipt;
