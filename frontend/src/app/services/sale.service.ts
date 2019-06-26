import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sale } from '../models/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  selectedSale: Sale;
  sales: Sale[];
  readonly URL_API = 'http://localhost:3000/api/sales';

  constructor(private http: HttpClient) {
    this.selectedSale = new Sale();
  }

  postSale(sale: Sale) {
    return this.http.post(this.URL_API, sale);
  }

  getSales() {
    return this.http.get(this.URL_API);
  }

  putSale(sale: Sale) {
    return this.http.put(this.URL_API + `/${sale._id}`, sale);
  }

  deleteSale(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
