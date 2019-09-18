import { Injectable } from '@angular/core';
import { BudgetService } from './budget.service';
import { NotificationService } from './notification.service';

export interface Transaction {
  id: number;
  amount: number;
  title: string;
  type: boolean;
  date: any;
}

@Injectable({providedIn: 'root'})

export class TransactionsService {

  amount: number;
  title = '';
  transactionDetail = [];

  public transactions: Transaction[] = [];

  constructor(
    private budgetService: BudgetService,
    private notificationService: NotificationService,
  ) {}

  addTransaction() {
    const transaction: Transaction = {
      id: Date.now(),
      amount: this.amount,
      title: this.title,
      type: true,
      date: new Date()
    };
    this.budgetService.currentBudget === 0 ? this.notificationService.zeroBudget() :
    (
      this.transactions.unshift(transaction),
      this.budgetService.currentBudget = this.budgetService.currentBudget + this.amount,
      this.amount = null,
      this.title = ''
    );
  }

  getTransaction() {
    const transaction: Transaction = {
      id: Date.now(),
      amount: this.amount,
      title: this.title,
      type: false,
      date: new Date()
    };
    this.budgetService.currentBudget < this.amount ? this.notificationService.notEnoughMoney() :
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

  details(id: number) {
    return this.transactions.find(t => t.id === id);
  }
}
