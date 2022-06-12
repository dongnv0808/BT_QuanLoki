import { ElectricityReceipt } from "./ElectricityReceipt";

export class ReceiptManager{
    private static electricityRecepipts: ElectricityReceipt[] = []
    static getAllReceipt(): ElectricityReceipt[]{
        return ReceiptManager.electricityRecepipts;
    }
    static addNewReceipt(recepipt: ElectricityReceipt): void{
        ReceiptManager.electricityRecepipts.push(recepipt);
    }
    static removeReceipt(index: number){
        ReceiptManager.electricityRecepipts.splice(index, 1);
    }
    static updateReceipt(index: number, electricityRecepipt: ElectricityReceipt){
        ReceiptManager.electricityRecepipts[index] = electricityRecepipt;
    }
}