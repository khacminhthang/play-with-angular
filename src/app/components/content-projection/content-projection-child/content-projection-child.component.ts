import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content-projection-child',
  templateUrl: './content-projection-child.component.html',
  styleUrls: ['./content-projection-child.component.scss']
})
export class ContentProjectionChildComponent implements OnInit {

  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
