import { Component } from '@angular/core';
import { Transaction, TransactionsService } from './services/transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  amount: number;
  title = '';

  constructor(private transactionsService: TransactionsService) { }
  
  cleanTtansactionList() {
    const transaction: Transaction = {
      amount: this.amount,
      title: this.title,
      type: false,
      date: new Date()
    };
    this.transactionsService.cleanTtansactionList(transaction);
  }
  
}
