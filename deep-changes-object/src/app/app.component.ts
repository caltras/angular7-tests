import { Component } from '@angular/core';
import { timer, interval } from 'rxjs';

interface MyObject {
  name: string;
  _list: any[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  object: MyObject={ name: '', _list: [{data: [] }] };
  update: boolean=false;
  constructor(){
    const self = this;
    let cont = 0;
    interval(1000).subscribe (()=>{
      self.object._list[0].data.push(cont);
      self.object.name = "Test "+(cont++);
      self.update = !self.update;
    })
  }
}
