import {Component, ElementRef, Inject, OnInit} from 'angular2/core';
declare var jQuery: any;

@Component({
  selector: 'trumbowyg-editor',
  template: `<div class="trumbowyg-editor"></div>`,
})
export class TrumbowygComponent implements OnInit {

  elementRef: ElementRef;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
    jQuery(this.elementRef.nativeElement).find('.trumbowyg-editor').trumbowyg();
  }

}
