import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../services/sale.service';
import { NgForm } from '@angular/forms';
import { Sale } from 'src/app/models/sale';
declare var M: any;

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.getSales();
  }

  addSale(form: NgForm) {
    //Si existe, significa que hay que actualizar
    if (form.value._id) {
      this.saleService.putSale(form.value)
        .subscribe(res => {
          this.resetForm(form);

          M.toast({ html: 'Actualizado Satisfactoriamente' });
          this.getSales();
        })
    }
    else {
      this.saleService.postSale(form.value)
        .subscribe(res => {
          console.log(res);
          //reiniciar el formulario
          this.resetForm(form);

          M.toast({ html: 'Guardado Satisfactoriamente' });
          this.getSales();
        });
    }
  }

  getSales() {
    this.saleService.getSales()
      .subscribe(res => {
        this.saleService.sales = res as Sale[];
        // var m = moment(VentaControl[0][1], 'YYYY-MM-DD');
        //console.log('hOLA'+m.format('L'));
        console.log(res);
      });
  }

  editSellControl(sale: Sale) {
    //envio al servidor
    this.saleService.selectedSale = sale;
  }

  deleteSellControl(_id: string) {
    if (confirm('Estas seguro de eliminarlo?')) {
      this.saleService.deleteSale(_id)
        .subscribe(res => {
          console.log(res);
          this.getSales();
          M.toast({ html: 'Eliminado Satisfactoriamente' })
        });
    }
  }
  //Recibe el formulario como parametro y limpiara el mismo
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.saleService.selectedSale = new Sale();
    }
  }

}
