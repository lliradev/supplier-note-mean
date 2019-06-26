import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';

import { NgForm } from '@angular/forms';
import { Schedule } from '../../models/schedule'

declare var M: any;

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css'],
  providers: [ScheduleService]
})
export class SchedulesComponent implements OnInit {

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getSchedules();
  }

  addSchedule(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.scheduleService.putSchedule(form.value).subscribe(res => {
        this.resetForm(form);
        this.getSchedules();
        M.toast({ html: "¡¡¡Agenda actualizada!!!" });
      });
    } else {
      this.scheduleService.postSchedule(form.value).subscribe(res => {
        this.getSchedules();
        this.resetForm(form);
        M.toast({ html: "¡¡¡Agenda Guardada!!!" });
      });
    }
  }

  getSchedules() {
    this.scheduleService.getSchedules().subscribe(res => {
      this.scheduleService.schedules = res as Schedule[];
    });
  }

  editSchedule(schedule: Schedule) {
    this.scheduleService.selectedSchedule = schedule;
  }

  deleteSchedule(_id: string, form: NgForm) {
    if (confirm('¿Seguro que quiere eliminar esta agenda?')) {
      this.scheduleService.deleteSchedule(_id).subscribe(res => {
        this.getSchedules();
        this.resetForm(form);
        M.toast({ html: '¡¡¡Agenda eliminada!!!' })
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.scheduleService.selectedSchedule = new Schedule();
    }
  }
}
