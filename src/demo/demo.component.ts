import {Component} from 'angular2/core';
import {TrumbowygComponent} from '../trumbowyg/trumbowyg.component';

@Component({
    selector: 'app',
    template: `
    <trumbowyg-editor [(content)]="c"></trumbowyg-editor>
    <div [innerHTML]="c"> </div>
    `,
    directives: [TrumbowygComponent]
})
export class DemoComponent { }
