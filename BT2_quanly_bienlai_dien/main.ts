import { Client } from "./Client";
import { ElectricityReceipt } from "./ElectricityReceipt";
import { ReceiptManager } from "./ReceiptManager";
import * as rl from "readline-sync"

let receiptManager = new ReceiptManager();

function showAllReceipt(){
    let receipts = ReceiptManager.getAllReceipt();
            for(const receipt of receipts){
                console.log(`Ho ten chu ho: ${receipt.getClient.getFullNameClient}
                            So nha: ${receipt.getClient.getApartmentNumber}
                            Ma cong to: ${receipt.getClient.getElectricMeterCode}
                            Chi so cu: ${receipt.getOldIndex}
                            Chi so moi: ${receipt.getNewIndex}
                            Tong tien dien: ${receipt.getMoney}`)
            }
}
function inputClient(){
    let fullNameClient = rl.question("Nhap ho tien chu ho:");
    let apertmentNumber = rl.question("Nhap so nha chu ho:");
    let electricityMeterCode = rl.question("Ma cong to:");
    return new Client(fullNameClient, apertmentNumber, electricityMeterCode);
}
function inputReceipt(){
    let client = inputClient();
    let oldIndex = +rl.question("Chi so cu:");
    let newIndex = +rl.question("Chi so moi:");
    return new ElectricityReceipt(client, oldIndex, newIndex);
}
function addNewReceipt(){
    console.log(`Them hoa don moi`)
    let electricityReceipt = inputReceipt();
    return ReceiptManager.addNewReceipt(electricityReceipt);
}

function updateReceipt(){
    console.log("Cap nhat hoa don");
    let indexUpdateReceipt = +rl.question("Nhap vi tri hoa muon sua:");
    let electricityReceipt = inputReceipt();
    return ReceiptManager.updateReceipt(indexUpdateReceipt, electricityReceipt);
}

function deleteReceipt(){
    console.log("Xoa hoa don");
    let indexRemoveReceipt = +rl.question("Nhap vi tri muon xoa:");
    return ReceiptManager.removeReceipt(indexRemoveReceipt);
}

let choice = "-1";
let x = `1. Hien thi bien lai
        2. Them bien lai
        3. Chinh sua thong tin bien lai
        4. Xoa thong tin bien lai
        0. Thoat
        `
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
} while (choice != '0')