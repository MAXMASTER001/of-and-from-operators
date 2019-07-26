import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  ngOnInit() {
    of(2,3,4,5,6,'----').subscribe(num => console.log(num)); // error and complete methods are optional.

    of(12,13,45, '----').subscribe( console.log);

from([23, 45, 67,'----']).subscribe(
  item => console.log(`resulting item ${item}`),
  err => console.log(err),
  () => console.log('completed')
)
  }
}
