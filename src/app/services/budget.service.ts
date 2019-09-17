import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService } from './notification.service';

@Injectable({providedIn: 'root'})

export class BudgetService {

  changeBudget: any;
  currentBudget = 0;
  budget: number;

  constructor(private notificationService: NotificationService) {}

  addBudget(form: NgForm) {
    this.budget > 0 ?
    (
      this.changeBudget = this.budget,
      this.currentBudget = this.changeBudget,
      this.budget = null
    ) :
    this.notificationService.incorrectValue();
  }

}
