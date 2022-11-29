import {Component, Input} from '@angular/core';

@Component({
  selector: 'scy-button',
  templateUrl: './svc-button.component.html',
  styleUrls: ['./svc-button.component.scss']
})
export class SvcButtonComponent {

  @Input() public text!: string;
  @Input() public setFullWidth?: boolean;
  @Input() public isDeleteButton?: boolean;
}
