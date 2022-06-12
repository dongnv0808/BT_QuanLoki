"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
const ElectricityReceipt_1 = require("./ElectricityReceipt");
const ReceiptManager_1 = require("./ReceiptManager");
const rl = __importStar(require("readline-sync"));
let receiptManager = new ReceiptManager_1.ReceiptManager();
function showAllReceipt() {
    let receipts = ReceiptManager_1.ReceiptManager.getAllReceipt();
    for (const receipt of receipts) {
        console.log(`Ho ten chu ho: ${receipt.getClient.getFullNameClient}
                            So nha: ${receipt.getClient.getApartmentNumber}
                            Ma cong to: ${receipt.getClient.getElectricMeterCode}
                            Chi so cu: ${receipt.getOldIndex}
                            Chi so moi: ${receipt.getNewIndex}
                            Tong tien dien: ${receipt.getMoney}`);
    }
}
function inputClient() {
    let fullNameClient = rl.question("Nhap ho tien chu ho:");
    let apertmentNumber = rl.question("Nhap so nha chu ho:");
    let electricityMeterCode = rl.question("Ma cong to:");
    return new Client_1.Client(fullNameClient, apertmentNumber, electricityMeterCode);
}
function inputReceipt() {
    let client = inputClient();
    let oldIndex = +rl.question("Chi so cu:");
    let newIndex = +rl.question("Chi so moi:");
    return new ElectricityReceipt_1.ElectricityReceipt(client, oldIndex, newIndex);
}
function addNewReceipt() {
    console.log(`Them hoa don moi`);
    let electricityReceipt = inputReceipt();
    return ReceiptManager_1.ReceiptManager.addNewReceipt(electricityReceipt);
}
function updateReceipt() {
    console.log("Cap nhat hoa don");
    let indexUpdateReceipt = +rl.question("Nhap vi tri hoa muon sua:");
    let electricityReceipt = inputReceipt();
    return ReceiptManager_1.ReceiptManager.updateReceipt(indexUpdateReceipt, electricityReceipt);
}
function deleteReceipt() {
    console.log("Xoa hoa don");
    let indexRemoveReceipt = +rl.question("Nhap vi tri muon xoa:");
    return ReceiptManager_1.ReceiptManager.removeReceipt(indexRemoveReceipt);
}
let choice = "-1";
let x = `1. Hien thi bien lai
        2. Them bien lai
        3. Chinh sua thong tin bien lai
        4. Xoa thong tin bien lai
        0. Thoat
        `;
do {
    choice = rl.question(x);
    switch (choice) {
        case '1': {
            showAllReceipt();
            break;
        }
        case '2': {
            addNewReceipt();
            break;
        }
        case '3': {
            updateReceipt();
            break;
        }
        case '4': {
            deleteReceipt();
            break;
        }
        case '0': {
            break;
        }
        default: {
            console.log('Nhap lai!!!');
            break;
        }
    }
} while (choice != '0');
