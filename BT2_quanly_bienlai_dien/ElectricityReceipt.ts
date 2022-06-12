import { Client } from "./Client";

export class ElectricityReceipt{
    private client: Client;
    private oldIndex: number;
    private newIndex: number;
    constructor(client: Client, oldIndex: number, newIndex: number){
        this.client = client;
        this.oldIndex = oldIndex;
        this.newIndex = newIndex;
    }
    get getClient(): Client{
        return this.client;
    }
    set setClient(client: Client){
        this.client = client;
    }
    get getOldIndex(): number{
        return this.oldIndex;
    }
    set setOldIndex(oldIndex: number){
        this.oldIndex = oldIndex;
    }
    get getNewIndex(): number{
        return this.newIndex;
    }
    set setNewIndex(newIndex: number){
        this.newIndex = newIndex;
    }
    get getMoney(): number{
        return (this.newIndex - this.oldIndex) * 750;
    }
}