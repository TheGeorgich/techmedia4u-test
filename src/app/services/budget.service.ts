import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({providedIn: 'root'})

export class BudgetService {

  currentBudget = 0;
  budget: number;

  constructor(private toastr: ToastrService) {}

  addBudget() {
    this.budget > 0 ?
    (
      this.currentBudget = this.budget,
      this.budget = null,
      this.toastr.success('Budget added')
    ) :
    this.toastr.error('Incorrect value');
  }

}
