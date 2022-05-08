import { Component, OnInit } from '@angular/core';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  faStepBackward=faStepBackward;
  constructor() { }

  ngOnInit(): void {
  }

}
