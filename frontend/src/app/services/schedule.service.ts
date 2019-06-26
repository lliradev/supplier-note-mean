import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  selectedSchedule: Schedule;
  schedules: Schedule[];
  readonly URL_API = 'http://localhost:3000/api/schedules';

  constructor(private http: HttpClient) {
    this.selectedSchedule = new Schedule();
  }

  getSchedules() {
    return this.http.get(this.URL_API);
  }

  postSchedule(schedule: Schedule) {
    return this.http.post(this.URL_API, schedule);
  }

  putSchedule(schedule: Schedule) {
    return this.http.put(this.URL_API + `/${schedule._id}`, schedule);
  }

  deleteSchedule(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
