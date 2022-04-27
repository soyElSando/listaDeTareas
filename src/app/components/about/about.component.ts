import { Component, OnInit } from '@angular/core';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  faStepBackward=faStepBackward;

  constructor() { }

  ngOnInit(): void {
  }

}
