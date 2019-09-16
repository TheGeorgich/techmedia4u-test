import { Injectable } from '@angular/core';

export interface Transaction {
  amount: number;
  title: string;
  type: boolean;
  date: any;
}

@Injectable({providedIn: 'root'})

export class TransactionsService {

  amount: number;
  title = '';

  public transactions: Transaction[] = [];

  addTransaction() {
    const transaction: Transaction = {
      amount: this.amount,
      title: this.title,
      type: true,
      date: new Date()
    };
    this.transactions.unshift(transaction);
    this.amount = null;
    this.title = '';
  }

  getTransaction() {
    const transaction: Transaction = {
      amount: this.amount,
      title: this.title,
      type: false,
      date: new Date()
    };
    this.transactions.unshift(transaction);
    this.amount = null;
    this.title = '';
  }

  cleanTtansactionList(transaction: Transaction) {
    this.transactions = [];
  }
}
