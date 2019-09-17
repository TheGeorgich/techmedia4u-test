import { Injectable } from '@angular/core';
import { BudgetService } from './budget.service';
import { Router } from '@angular/router';
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
  id: number;
  transactionDetail = [];

  public transactions: Transaction[] = [];

  constructor(
    private budgetService: BudgetService,
    private router: Router,
    private notificationService: NotificationService
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
    const idx = this.transactions.findIndex(t => t.id === id);
    const transactionDetails: Transaction = {
      id: this.transactions[idx].id,
      amount: this.transactions[idx].amount,
      title: this.transactions[idx].title,
      type: this.transactions[idx].type,
      date: this.transactions[idx].date
    };
    this.transactionDetail = [];
    this.transactionDetail.push(transactionDetails);
    this.router.navigate(['/details']);
  }
}
