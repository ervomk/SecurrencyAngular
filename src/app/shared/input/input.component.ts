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

  @Input() id: string | undefined;
  @Input() type: string | undefined;
  @Input() label: string | undefined;
  @Input() placeholder: string | undefined;

  input?: string;
  disabled!: boolean;
  inputTypeEnum = InputTypeEnum;

  constructor(private el: ElementRef) {
  }

  /**
   * Invokes onChange as for Reactive Form.
   */
  onChange: any = () => {
  }

  /**
   * Invokes onTouch as for Reactive Form.
   */
  onTouch: any = () => {
  }

  /**
   * Invokes on change event.
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Invokes on touched event.
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  /**
   * Sets disabled state for the input.
   * @param disabled
   */
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  /**
   * Updates value for the input.
   * @param input
   */
  writeValue(input: string) {
    this.input = input;
  }
}
