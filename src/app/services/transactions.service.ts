import { Injectable } from '@angular/core';
import { BudgetService } from './budget.service';
import { Transaction } from '../models/transaction';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({providedIn: 'root'})

export class TransactionsService {

  amount: number;
  description = '';

  public transactions: Array<Transaction> = [];
  private transactionsObs = new BehaviorSubject<Array<Transaction>>([]);

  constructor(
    private budgetService: BudgetService,
    private toastr: ToastrService,
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
      this.transactionsObs.next(this.transactions);
      this.amount = null;
      this.description = '';
    }

  income(transaction: any) {
    this.budgetService.currentBudget === 0 ?
    this.toastr.info('Add you budget first') :
    (
      this.transactions.unshift(transaction),
      this.budgetService.currentBudget = this.budgetService.currentBudget + this.amount,
      this.toastr.success('Funds contributed')
    );
  }

  expense(transaction: any) {
    this.budgetService.currentBudget < this.amount ?
    this.toastr.error('Insufficient funds') :
    (
      this.transactions.unshift(transaction),
      this.budgetService.currentBudget = this.budgetService.currentBudget - this.amount,
      this.toastr.success('Transaction expense added')
    );
  }

  removeTransactionsList() {
    this.transactions = [];
  }

  transactionInfo(id: number) {
    return this.transactionsObs.getValue().find(t => t.id === id);
  }

}
