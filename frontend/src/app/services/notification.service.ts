import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification as Notification } from '../models/notification';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  //se compara con el esquema de Employee.ts
  selectedNotification: Notification;
  notifications: Notification[];
  readonly URL_API = 'http://localhost:3000/api/notifications';
  //Comunicacion de app con el servidor
  constructor(private http: HttpClient) {
    this.selectedNotification = new Notification();
  }

  postNotification(notification: Notification) {
    return this.http.post(this.URL_API, notification);
  }

  getNotifications() {
    return this.http.get(this.URL_API);
  }

  putNotification(notification: Notification) {
    return this.http.put(this.URL_API + `/${notification._id}`, notification);
  }

  deleteNotification(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}