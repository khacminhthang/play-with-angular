import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrls: ['./show-name.component.scss']
})
export class ShowNameComponent implements OnInit {

  @Input() name: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
