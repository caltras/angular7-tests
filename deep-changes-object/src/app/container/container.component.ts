import { Component, OnInit, OnChanges, SimpleChanges, Input, SimpleChange, DoCheck } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnChanges, DoCheck {

  log: string[] = [];
  @Input()
  reference: any= {};
  @Input()
  update: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[ propName: string]: SimpleChange}){
    this.log.push(`Updated at ${new Date().toISOString()} ${JSON.stringify(this.reference)}`);
  }
  ngDoCheck(){
    console.log(this.reference);
  }

}
