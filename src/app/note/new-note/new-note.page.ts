import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../note.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})
export class NewNotePage implements OnInit {
  noteform : FormGroup= this.fb.group({
    titleInput:[[],Validators.required],
    contentInput:[[],Validators.required]
  })
date:Number;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

  }
    addNote(){
      if (this.noteform.valid){
        let newNote: Note={
          title:this.noteform.get('titleInput').value,
          content:this.noteform.get('contentInput').value,
        date:Date.now()
      }
      console.log(newNote);
      } else {
        console.log("invalid form")
      }
    }}
