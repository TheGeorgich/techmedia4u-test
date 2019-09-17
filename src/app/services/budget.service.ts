import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService } from './notification.service';

@Injectable({providedIn: 'root'})

export class BudgetService {

  currentBudget = 0;
  budget: number;

  constructor(private notificationService: NotificationService) {}

  addBudget(form: NgForm) {
    this.budget > 0 ?
    (
      this.currentBudget = this.budget,
      this.budget = null
    ) :
    this.notificationService.incorrectValue();
  }

}
