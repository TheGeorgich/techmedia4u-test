import { Injectable } from '@angular/core';

export interface Transaction {
  amount: number
  title: string
  type: boolean
  date: any
}

@Injectable({providedIn: 'root'})

export class TransactionsService {
  public transactions: Transaction[] = []

  addTransaction(transaction: Transaction){
    this.transactions.push(transaction)
  }

  getTransaction(transaction: Transaction){
    this.transactions.push(transaction)
  }
  cleanTtansactionList(transaction: Transaction){
    this.transactions = []
  }
}