import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TransactionsService, Transaction } from '../../services/transactions.service';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html'
})
export class TransactionInfoComponent implements OnInit {

  transaction: Transaction;

  constructor(
    public transactionsService: TransactionsService,
    private route: ActivatedRoute,
    private router: Router,
    public budgetService: BudgetService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.transaction = this.transactionsService.transactionInfo(+params.id);
    });
  }

  backToHome() {
    this.router.navigate(['']);
  }

}
