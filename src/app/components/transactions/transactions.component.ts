import { Component } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent {

  constructor(public transactionsService: TransactionsService) { }

}
