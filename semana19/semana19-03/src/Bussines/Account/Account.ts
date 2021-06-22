import { insertAccount } from "../../Data/insertAccounts";
import { createAccount } from "../../Model/account";
import { generateId } from "../../Services/idGenerator";
import { Transaction } from "./Transaction";

export class Account {
    private idAccount: string = generateId();
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0; // Por padrão o saldo começa com 0
    private transactions: Transaction[] = [];


    constructor(cpf: string, name: string, age: number) {
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.createAccountBD();
    }

    public getId() {
        return this.idAccount;
    }
    public getCpf() {
        return this.cpf
    }

    public getName() {
        return this.name
    }

    public getAge() {
        return this.age
    }

    public async createAccountBD():Promise<void>{
        const result = {
            id:this.idAccount,
            cpf:this.cpf,
            name:this.name,
            age:this.age,
            balance:this.balance
        }
          await insertAccount(result);
    }

}