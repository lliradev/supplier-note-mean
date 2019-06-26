import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { NgForm } from '@angular/forms';
import { Notification } from 'src/app/models/notification';
declare var M: any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.getNotifications();
  }

  addNotification(form: NgForm) {
    //Si existe, significa que hay que actualizar
    if (form.value._id) {
      this.notificationService.putNotification(form.value)
        .subscribe(res => {
          this.resetForm(form);

          M.toast({ html: 'Actualizado Satisfactoriamente' });
          this.getNotifications();
        })
    }
    else {
      this.notificationService.postNotification(form.value)
        .subscribe(res => {
          console.log(res);
          //reiniciar el formulario
          this.resetForm(form);

          M.toast({ html: 'Guardado Satisfactoriamente' });
          this.getNotifications();
        });
    }
  }

  getNotifications() {
    this.notificationService.getNotifications()
      .subscribe(res => {
        this.notificationService.notifications = res as Notification[];
        console.log(res);
      });
  }

  editNotification(notification: Notification) {
    //envio al servidor
    this.notificationService.selectedNotification = notification;

  }
  deleteNotification(_id: string) {
    if (confirm('Estas seguro de eliminarlo?')) {

      this.notificationService.deleteNotification(_id)
        .subscribe(res => {
          console.log(res);
          this.getNotifications();
          M.toast({ html: 'Eliminado Satisfactoriamente' })
        });
    }


  }
  //Recibe el formulario como parametro y limpiara el mismo
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.notificationService.selectedNotification = new Notification();
    }

  }

}

