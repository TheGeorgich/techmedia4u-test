import { Injectable } from '@angular/core';
import { BudgetService } from './budget.service';

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

  constructor(private budgetService: BudgetService) {}

  addTransaction() {
    const transaction: Transaction = {
      amount: this.amount,
      title: this.title,
      type: true,
      date: new Date()
    };
    this.budgetService.currentBudget === 0 ? alert('add budget') :
    (
      this.transactions.unshift(transaction),
      this.budgetService.currentBudget = this.budgetService.currentBudget + this.amount,
      this.amount = null,
      this.title = ''
    );
  }

  getTransaction() {
    const transaction: Transaction = {
      amount: this.amount,
      title: this.title,
      type: false,
      date: new Date()
    };
    this.budgetService.currentBudget < this.amount ? alert('not anjoy monney') :
    (
      this.transactions.unshift(transaction),
      this.budgetService.currentBudget = this.budgetService.currentBudget - this.amount,
      this.amount = null,
      this.title = ''
    );
  }

  removeTransactionsList() {
    this.transactions = [];
  }

  details() {
    for(let i = 0; i <= 0; i++)
    console.log(this.budgetService.currentBudget, this.transactions[i])
  }
    
}
