import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imput-title',
  templateUrl: './imput-title.component.html',
  styleUrls: ['./imput-title.component.css']
})
export class ImputTitleComponent implements OnInit {

  constructor() { }
  title: string;
  ngOnInit() {
  }

}
