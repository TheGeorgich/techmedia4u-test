import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent implements OnInit {
  
  @Output() cleanTransactionList = new EventEmitter();
  
  constructor(public budgetService: BudgetService) {}

  ngOnInit() {}

  removeTransactions() {
    this.cleanTransactionList.emit()
  }

}
