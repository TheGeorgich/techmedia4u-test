import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TransactionsService, Transaction } from '../../services/transactions.service';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html'
})
export class TransactionDetailsComponent implements OnInit {

  transaction: Transaction;

  constructor(
    public transactionsService: TransactionsService,
    private route: ActivatedRoute,
    private router: Router,
    public budgetService: BudgetService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.transaction = this.transactionsService.details(+params.id);
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

}
