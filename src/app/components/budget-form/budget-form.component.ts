import { Component } from '@angular/core';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent {

  constructor(public budgetService: BudgetService) {}

}
