import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan4',
  templateUrl: './supersaiyan4.component.html',
  styleUrls: ['./supersaiyan4.component.css']
})
export class Supersaiyan4Component implements OnInit {
  @Input() plevel;
  constructor() { }

  ngOnInit() {
  }

}
