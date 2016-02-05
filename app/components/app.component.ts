import {Component} from 'angular2/core';
import {TrumbowygComponent} from './trumbowyg/trumbowyg.component';
@Component({
  selector: 'app',
  template: `<trumbowyg-editor></trumbowyg-editor>`,
  directives: [TrumbowygComponent]
})
export class AppComponent { }
