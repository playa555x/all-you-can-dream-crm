import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BillingComponent } from './components/billing/billing.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { PvCalculatorComponent } from './components/pv-calculator/pv-calculator.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'pv-calculator', component: PvCalculatorComponent }
]; 