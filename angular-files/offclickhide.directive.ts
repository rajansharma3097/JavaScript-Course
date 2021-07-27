import {
  Directive,
  HostListener,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";

@Directive({
  selector: "[offClickHide]",
})
export class OffClickHideDirective {
  @Input() triggerClass: string;
  @Output() offClickHide = new EventEmitter();
  constructor(private el: ElementRef) {}

  @HostListener("document:click", ["$event.target"])
  public onClick(target) {
    const clickedInside = this.el.nativeElement.contains(target);
    let isTrigger = "";
    try {
      isTrigger =
        target.classList.contains(this.triggerClass) ||
        target.parentElement.classList.contains(this.triggerClass) ||
        (target.firstElementChild &&
          target.firstElementChild.classList.contains(this.triggerClass)) ||
        target.classList.contains("app-notification-trigger") ||
        target.parentElement.classList.contains("app-notification-trigger") ||
        (target.firstElementChild &&
          target.firstElementChild.classList.contains(
            "app-notification-trigger"
          ));
    } catch (error) {}
    if (!clickedInside && (this.triggerClass == null || !isTrigger)) {
      this.offClickHide.emit(null);
    }
  }
}
