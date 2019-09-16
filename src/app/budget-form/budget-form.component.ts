import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent implements OnInit {

  currentBudget = 0;
  budget: number;

  @Output() cleanTransactionList = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addBudget(form: NgForm) {
    (this.budget === undefined || this.budget === null) ? alert('add budget') :
    (this.currentBudget = this.budget,
    this.budget = null,
    this.cleanTransactionList.emit());
  }

}