import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { FormsModule } from '@angular/forms';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { TransactionInfoComponent } from './components/transaction-info/transaction-info.component';
import { HomeComponent } from './components/home/home.component';
import { TruncatePipe } from './pipes/text.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionsListComponent,
    BudgetFormComponent,
    TransactionInfoComponent,
    HomeComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
