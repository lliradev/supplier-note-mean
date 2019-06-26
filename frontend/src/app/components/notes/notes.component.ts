import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/models/note';
declare var M: any;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NoteService]
})
export class NotesComponent implements OnInit {

  constructor(private noteService: NoteService) { }
  filterNotes = '';
  p: number = 1;

  ngOnInit() {
    this.getNotes();
  }

  addNote(form: NgForm) {
    if (form.value._id) {
      this.noteService.putNote(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Update successfully!', classes: 'rounded' });
          this.getNotes();
        })
    } else {
      this.noteService.postNote(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Saved successfully!', classes: 'rounded' });
          this.getNotes();
        });
    }
  }

  getNotes() {
    this.noteService.getNotes()
      .subscribe(res => {
        this.noteService.notes = res as Note[];
        console.log(res);
      })
  }

  editNote(note: Note) {
    this.noteService.selectedNote = note;
  }

  deleteNote(_id: string) {
    if (confirm('Are you sure want to delete it?')) {
      this.noteService.deleteNote(_id)
        .subscribe(res => {
          this.getNotes();
          M.toast({ html: 'Deleted successfully!', classes: 'rounded' })
        })
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.noteService.selectedNote = new Note();
    }
  }

}//End class
