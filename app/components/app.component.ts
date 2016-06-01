import {Component} from 'angular2/core';
import {TrumbowygComponent} from 'ng2-trumbowyg/ng2-trumbowyg';

@Component({
  selector: 'app',
  template: `
    <trumbowyg-editor [(content)]="c"></trumbowyg-editor>
    <div [innerHTML]="c"> </div>
    `,
  directives: [TrumbowygComponent]
})
export class AppComponent { }
