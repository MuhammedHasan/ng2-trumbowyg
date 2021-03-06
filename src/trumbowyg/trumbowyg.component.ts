import {Component, ElementRef, OnInit, Input, Output, EventEmitter} from 'angular2/core';
declare var jQuery: any;

@Component({
  selector: 'trumbowyg-editor',
  template: `<div class="trumbowyg-editor"></div>`,
})
export class TrumbowygComponent implements OnInit {

  elementRef: ElementRef;
  @Input() content: String;
  @Output() contentChange: EventEmitter<string>;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
    this.contentChange = new EventEmitter();
  }

  ngOnInit() {
    let ele = jQuery(this.elementRef.nativeElement).find('.trumbowyg-editor');
    ele.trumbowyg().on('tbwchange', () =>
      this.contentChange.emit(ele.trumbowyg('html'))
      );
  }
}
