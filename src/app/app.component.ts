import { Component } from '@angular/core';
import { TransactionsService } from './services/transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public transactionsService: TransactionsService) {}

  cleanTtansactionList() {
    this.transactionsService.removeTransactionsList();
  }
}
