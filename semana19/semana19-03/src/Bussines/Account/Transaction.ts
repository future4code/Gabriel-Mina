export class Transaction {
    private idTransaction:string="";
    private date: Date;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = new Date(date);
        this.value = value;
        this.description = description
    }

    public getDate(){
        return this.date
    }

    public getValue(){
        return this.value
    }

    public getDescription(){
        return this.description
    }

    public setDate(date: Date){
        this.date = date;
    }

    public setValue(value: number){
         this.value = value;
    }

    public setDescription(description: string){
         this.description = description;
    }

}