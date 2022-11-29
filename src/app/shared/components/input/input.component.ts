import {Component, ElementRef, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {InputTypeEnum} from "../../enums/input-type.enum";

@Component({
  selector: 'scy-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ScyInputComponent),
    }
  ]
})
export class ScyInputComponent implements ControlValueAccessor {

  @Input() public id: string | undefined;
  @Input() public type: string | undefined;
  @Input() public label: string | undefined;
  @Input() public placeholder: string | undefined;

  public input?: string;
  public disabled!: boolean;
  public inputTypeEnum = InputTypeEnum;

  /**
   * Invokes onChange as for Reactive Form.
   */
  public onChange: any = () => {
  }

  /**
   * Invokes onTouch as for Reactive Form.
   */
  public onTouch: any = () => {
  }

  /**
   * Invokes on change event.
   * @param fn
   */
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Invokes on touched event.
   * @param fn
   */
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  /**
   * Sets disabled state for the input.
   * @param disabled
   */
  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  /**
   * Updates value for the input.
   * @param input
   */
  public writeValue(input: string) {
    this.input = input;
  }
}
