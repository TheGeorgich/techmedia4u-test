import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class NotificationService {

  incorrectValue() {
    alert('incorrect value');
  }

  zeroBudget() {
    alert('Add Budget first!');
  }

  notEnoughMoney() {
    alert('Oops! No money no funny');
  }

}
