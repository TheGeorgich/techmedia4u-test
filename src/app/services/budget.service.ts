import { NgForm } from '@angular/forms';

export class BudgetService {
  changeBudget: any;
  currentBudget = 0
  budget: number;

  addBudget(form: NgForm) {
    (this.budget === undefined || this.budget === null) ? alert('add budget') :
    (this.changeBudget = this.budget,
    this.currentBudget = this.changeBudget,
    this.budget = null);
  }
}
