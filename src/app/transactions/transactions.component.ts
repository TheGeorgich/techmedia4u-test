import { Component, OnInit, Input } from '@angular/core';
import { Transaction, TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent implements OnInit {

  amount: number
  title: string = ''

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
  }

  addTransaction(currentBudget: number){
    const transaction: Transaction = {
      amount: this.amount,
      title: this.title,
      type: true,
      date: new Date()
    }
    console.log(currentBudget)
    this.transactionsService.addTransaction(transaction)
    this.amount = null
    this.title = ''
  }

  getTransaction(){
    const transaction: Transaction = {
      amount: this.amount,
      title: this.title,
      type: false,
      date: new Date()
    }
    this.transactionsService.addTransaction(transaction)
    this.amount = null
    this.title = ''
  }

  cleanTtansactionList() {
    const transaction: Transaction = {
      amount: this.amount,
      title: this.title,
      type: false,
      date: new Date()
    }
    this.transactionsService.cleanTtansactionList(transaction)
  }
}