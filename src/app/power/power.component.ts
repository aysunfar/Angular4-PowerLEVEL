import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  plevel = "";
  onSubmit() {
    this.plevel = this.plevel;
    console.log(this.plevel)
  }

  constructor() { }

  ngOnInit() {

  }

}
