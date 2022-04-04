import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  originalStr = '10 - 90 Very well';
  array: any[];
  currentArray: any[];
  firstLine: string;
  secondLine: string;
  regex = '[0-9]+';
  regexStr = '^[a-zA-Z]+$';
  finalText: string;

  ngOnInit() {
    this.array = this.originalStr.split('');
    this.firstLine = '';
    this.secondLine = '';

    this.array.forEach((currentValue, index) => {
      if (
        currentValue.match(this.regex) ||
        currentValue === ' ' ||
        currentValue === '-'
      ) {
        this.firstLine += currentValue;
        console.log(this.firstLine);
      }
      if (currentValue.match(this.regexStr) || currentValue === ' ') {
        this.secondLine += currentValue;
      }
    });

    this.finalText = `${this.firstLine}` + `\n` + `${this.secondLine}`;
    console.log(this.finalText);
  }
}
