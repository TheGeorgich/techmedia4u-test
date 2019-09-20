import { Component, Output, EventEmitter } from '@angular/core';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent {

  @Output() cleanTransactionList = new EventEmitter();

  constructor(public budgetService: BudgetService) {}

  removeTransactionList(event: any) {
    this.cleanTransactionList.emit();
  }

}
