import { Component } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent {
  language = ['JavaScript', 'Python', 'Java', 'C++'];
  levels = ['Beginner', 'Intermediate', 'Advanced'];

  textarea = '';
  submit = false;
  experience: string = '';

  submitForm() {
    this.submit = true;
  }
 
  checkLength() {
   return this.textarea.length<10;
  }
}