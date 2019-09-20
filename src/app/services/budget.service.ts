import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class BudgetService {

  currentBudget = 0;
  budget: number;

  public budgetChange = new BehaviorSubject<number>(null);

  constructor(private toastr: ToastrService) {}

  addBudget() {
    this.budget > 0 ?
    (
      this.currentBudget = this.budget,
      this.budgetChange.next(this.currentBudget),
      this.budget = null,
      this.toastr.success('Budget added')
    ) :
    this.toastr.error('Incorrect value');
  }

}
