import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TransactionsService } from '../../services/transactions.service';
import { BudgetService } from '../../services/budget.service';
import { Transaction } from '../../models/transaction';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html'
})
export class TransactionInfoComponent implements OnInit, OnDestroy {

  transaction: Transaction;

  private subsctiption: Subscription;

  constructor(
    public transactionsService: TransactionsService,
    private route: ActivatedRoute,
    public budgetService: BudgetService,
  ) { }

  ngOnInit() {
    this.subsctiption = this.route.params.subscribe((params: Params) => {
      this.transaction = this.transactionsService.transactionInfo(+params.id);
    });
  }

  ngOnDestroy() {
    this.subsctiption.unsubscribe();
  }

}
