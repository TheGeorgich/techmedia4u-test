import { Component } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'add-transaction',
  templateUrl: './add-transaction.component.html'
})

export class AddTransactionComponent {

  constructor(public transactionsService: TransactionsService) { }

}
