import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class BudgetService {

  changeBudget: any;
  currentBudget = 0;
  budget: number;

  addBudget(form: NgForm) {
    this.budget > 0 ?
    (
      this.changeBudget = this.budget,
      this.currentBudget = this.changeBudget,
      this.budget = null
    ) :
    alert('incorrect value');
  }

}
