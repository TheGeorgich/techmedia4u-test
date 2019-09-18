import { Component } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(public transactionsService: TransactionsService) {}

  cleanTtansactionList() {
    this.transactionsService.removeTransactionsList();
  }

}
