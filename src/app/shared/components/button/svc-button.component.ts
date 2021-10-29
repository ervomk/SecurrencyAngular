import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'scy-button',
  templateUrl: './svc-button.component.html',
  styleUrls: ['./svc-button.component.scss']
})
export class SvcButtonComponent implements OnInit {
  
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
