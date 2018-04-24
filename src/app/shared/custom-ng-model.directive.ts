import { Directive, EventEmitter, Output, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[editorCustomNgModel]'
})
export class CustomNgModelDirective {

  /**
   * This directive mimics the behavior of ngModel for a div
   * 
   * However it is only close to it because
   * it is causing the issue of circular change detections - 
   * Handling the above with additional check flag
   */

  @Input() customNgModel: any = "";
  @Input() additionalChkFlag: any = "";  
  @Output() customNgModelChange = new EventEmitter<any>();
  @HostListener('input', ['$event']) input($event) {
    this.handleOnInput($event);
  }

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.textContent = this.customNgModel;
  }

  ngOnChanges(changes) {
    /**
     * Additional change check to avoid circular change triggering
     */
    if (changes["customNgModel"] && changes["additionalChkFlag"]) {
      this.el.nativeElement.textContent = this.customNgModel;
    }
  }

  handleOnInput(e) {
    let userTxt = e.srcElement.innerText;
    this.customNgModel = userTxt;
    this.customNgModelChange.emit(userTxt);
  }
}
