import { Injectable } from '@angular/core';
import { BudgetService } from './budget.service';
import { NotificationService } from './notification.service';

export interface Transaction {
  id: number;
  amount: number;
  description: string;
  type: boolean;
  date: any;
}

@Injectable({providedIn: 'root'})

export class TransactionsService {

  amount: number;
  description = '';

  public transactions: Transaction[] = [];

  constructor(
    private budgetService: BudgetService,
    private notificationService: NotificationService,
  ) {}

  addTransaction(typeTransaction: boolean) {
    const transaction: Transaction = {
      id: Date.now(),
      amount: this.amount,
      description: this.description,
      type: typeTransaction,
      date: new Date()
    };
    typeTransaction === true ? this.income(transaction) : this.expense(transaction);
    this.amount = null;
    this.description = '';
  }

  income(transaction: any) {
    this.budgetService.currentBudget === 0 ?
    this.notificationService.zeroBudget() :
    (
      this.transactions.unshift(transaction),
      this.budgetService.currentBudget = this.budgetService.currentBudget + this.amount
    );
  }

  expense(transaction: any) {
    this.budgetService.currentBudget < this.amount ?
    this.notificationService.notEnoughMoney() :
    (
      this.transactions.unshift(transaction),
      this.budgetService.currentBudget = this.budgetService.currentBudget - this.amount
    );
  }

  removeTransactionsList() {
    this.transactions = [];
  }

  transactionInfo(id: number) {
    return this.transactions.find(t => t.id === id);
  }
}
