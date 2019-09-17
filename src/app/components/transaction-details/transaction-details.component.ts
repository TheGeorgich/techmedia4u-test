import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/services/transactions.service';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent {

  constructor(
    private router: Router,
    private transactionsService: TransactionsService,
    private budgetService: BudgetService
  ) { }

  goBack() {
    this.router.navigate(['/']);
  }

}
