import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { FormsModule } from '@angular/forms';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { BudgetService } from './services/budget.service';
import { TransactionsService } from './services/transactions.service';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionsListComponent,
    BudgetFormComponent,
    AddTransactionComponent,
    TransactionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BudgetService,
    TransactionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
