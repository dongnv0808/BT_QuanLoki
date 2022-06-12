"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptManager = void 0;
class ReceiptManager {
    static getAllReceipt() {
        return ReceiptManager.electricityRecepipts;
    }
    static addNewReceipt(recepipt) {
        ReceiptManager.electricityRecepipts.push(recepipt);
    }
    static removeReceipt(index) {
        ReceiptManager.electricityRecepipts.splice(index, 1);
    }
    static updateReceipt(index, electricityRecepipt) {
        ReceiptManager.electricityRecepipts[index] = electricityRecepipt;
    }
}
exports.ReceiptManager = ReceiptManager;
ReceiptManager.electricityRecepipts = [];
