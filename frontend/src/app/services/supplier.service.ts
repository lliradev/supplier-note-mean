import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuppliersComponent } from '../components/suppliers/suppliers.component';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  selectedSupplier: Supplier;
  suppliers: Supplier[];
  readonly URL_API = 'http://localhost:3000/api/suppliers';

  constructor(private http: HttpClient) { 
    this.selectedSupplier = new Supplier();
  }

  getSuppliers(){
    return this.http.get(this.URL_API);
  }

  postSupplier(Supplier: Supplier){
    return this.http.post(this.URL_API, Supplier);
  }

  putSupplier(supplier: Supplier){
    return this.http.put(this.URL_API + `/${supplier._id}`, supplier);
  }

  deleteSupplier(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}//End class
