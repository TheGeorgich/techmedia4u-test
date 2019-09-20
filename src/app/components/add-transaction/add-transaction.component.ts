import { Component } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html'
})

export class AddTransactionComponent {

  constructor(public transactionsService: TransactionsService) { }

}
