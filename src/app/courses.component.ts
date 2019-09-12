import {Component} from "@angular/core";
import {CoursesService} from "./course/courses.service";


@Component({
  selector: 'courses',
  template: `
      <button class="btn btn-outline-info" [class.active]="isActive" (click)="onSave($event)">
          Click me
      </button>
<!--      <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>-->
      <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
      <h2>{{ "Title: " + getTitle()}}</h2>
      <ul>
          <li *ngFor="let course of courses">
              {{ course }}
          </li>
      </ul>
    <h3 class="text-info">{{ text | summary }}</h3>
  `
})
export class CoursesComponent {
  email = "me@test.com";
  isActive = false;
  title = "First Component";
  courses;
  text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eaque id molestias neque quia, totam veniam. Ad, assumenda beatae, eum exercitationem ipsa labore, laboriosam natus obcaecati perspiciatis reiciendis suscipit voluptates!";

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  onKeyUp() {
    console.log(this.email);
  }

  onSave($event) {
    alert($event);
    alert("buttonClicked");
  }



}
