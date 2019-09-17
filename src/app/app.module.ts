import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { FormsModule } from '@angular/forms';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
