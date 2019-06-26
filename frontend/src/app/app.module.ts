import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Add component for Forms
import { FormsModule } from '@angular/forms';
// Routes
import { RouterModule } from '@angular/router';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { NotesComponent } from './components/notes/notes.component';
import { ExternalExpensesComponent } from './components/external-expenses/external-expenses.component';
import { PendingInvoiceComponent } from './components/pending-invoice/pending-invoice.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SalesComponent } from './components/sales/sales.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { UsersComponent } from './components/users/users.component';
import { FilterPipe } from './pipes/filter.pipe';

// Material
import { MaterialModule } from './material.module';
//Pagination
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    NotesComponent,
    ExternalExpensesComponent,
    PendingInvoiceComponent,
    NotificationsComponent,
    SalesComponent,
    SchedulesComponent,
    UsersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'suppliers', component: SuppliersComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'external-expenses', component: ExternalExpensesComponent },
      { path: 'pending-invoice', component: PendingInvoiceComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'schedules', component: SchedulesComponent },
      { path: 'users', component: UsersComponent }
    ]),
    MaterialModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
