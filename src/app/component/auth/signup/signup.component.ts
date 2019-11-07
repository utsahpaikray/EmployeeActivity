import {
  Component,
  OnInit
} from '@angular/core';
import { strictEqual } from 'assert';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

caption: string = 'Show Text';
showInfo = false;

public changeData(): void {
  this.showInfo = !this.showInfo;
  if (this.showInfo) {
      this.caption = 'Hide Text';
  } else {
      this.caption = 'Show Text';
  }
}

  constructor() {}

  ngOnInit() {}

}
