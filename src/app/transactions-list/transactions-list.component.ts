import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})

export class TransactionsListComponent implements OnInit {

  constructor(public transactionsService: TransactionsService) { }

  ngOnInit() {
  }
    // this.currentBudget === 0 ? alert("First add Budget!") :
    // (this.amount === null || this.title === '') ? alert("Not enough information!") :
    // (this.transactionsService.addTransaction(transaction), 
    // this.currentBudget = this.currentBudget + transaction.amount)

  
  //   this.transactionsService.getTransaction(transaction)
  //   this.currentBudget < transaction.amount ? alert("Oops! No money no funny)") :
  //   (this.currentBudget === 0) ? alert("First add Budget!") :
  //   (this.amount === null || this.title === '') ? alert("Not enough information!") :
  //   (this.transactionsService.getTransaction(transaction),
  //   this.currentBudget = this.currentBudget - transaction.amount)
}
