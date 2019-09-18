import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionInfoComponent } from './components/transaction-info/transaction-info.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent, },
  {path: ':id', component: TransactionInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
