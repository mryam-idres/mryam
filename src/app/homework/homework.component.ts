import { Component } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent {
  programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++'];
  experienceLevels = ['Beginner', 'Intermediate', 'Advanced'];

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