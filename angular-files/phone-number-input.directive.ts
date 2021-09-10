//[phoneNumberInput]="true"

import {
  Directive,
  HostListener,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";

@Directive({
  selector: "[phoneNumberInput]",
})
export class PhoneNumberInputDirective {
  regexStr = "^[0-9]*$";
  constructor(private el: ElementRef) {}

  //   @Input() inputValue: string;
  //   @Output() validated: EventEmitter<any> = new EventEmitter();
  //   @HostListener('keyup', ['$event'])
  //   public onKeyUp(e: any): void {

  //  //   if (!((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) ||  ) && this.inputValue.length < 10) {
  //       // 0-9 only
  //    //   this.inputValue += e.key;
  //  // }
  //   this.validated.emit(this.inputValue);
  //   }

  //   formatNumber(){
  //    // this.inputValue = ;
  //   }

  @Input("phoneNumberInput") OnlyNumber: boolean;

  @HostListener("keydown", ["$event"]) onKeyDown(event) {
    let e = <KeyboardEvent>event;
    if (this.OnlyNumber) {
      if (
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105)
      ) {
        return;
      }

      if (
        [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+C
        (e.keyCode == 67 && e.ctrlKey === true) ||
        // Allow: Ctrl+V
        (e.keyCode == 86 && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (e.keyCode == 88 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)
      ) {
        // let it happen, don't do anything
        return;
      }
      let ch = String.fromCharCode(e.keyCode);
      let regEx = new RegExp(this.regexStr);
      if (regEx.test(ch)) return;
      else e.preventDefault();
    }
  }
}
