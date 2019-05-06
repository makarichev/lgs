import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricesComponent } from './prices/prices.component';
import { TransportComponent } from './transport/transport.component';

import { CustomsComponent } from './customs/customs.component';
import { StockComponent } from './stock/stock.component';
import { CostsComponent } from './costs/costs.component';
import { AdminComponent } from './admin/admin.component';
import { VendorsComponent } from './vendors/vendors.component';
import { GoComponent } from './go/go.component';
import { InvoiceEditComponent } from './Invoices/invoice-edit/invoice-edit.component';
import { CardLayoutComponent } from './layouts/card/card.component';
import { ModuleLayoutComponent } from './layouts/module/module.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    OrderComponent,
    OrdersComponent,
    InvoicesComponent,
    InvoiceComponent,
    PricesComponent,
    TransportComponent,

    CustomsComponent,

    StockComponent,

    CostsComponent,

    AdminComponent,

    VendorsComponent,

    GoComponent,

    InvoiceEditComponent,

    CardLayoutComponent,

    ModuleLayoutComponent


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/:orderId', component: OrderComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'invoices/:invoiceId', component: InvoiceComponent },
      { path: 'transport', component: TransportComponent },
      { path: 'customs', component: CustomsComponent },
      { path: 'prices', component: PricesComponent },
      { path: 'stock', component: StockComponent },
      { path: 'costs', component: CostsComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'vendors', component: VendorsComponent },
      { path: 'go', component: GoComponent, data: {title: "График отгрузок"}},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
