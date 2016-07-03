import { Component } from '@angular/core';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
    selector: 'my-home',
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    templateUrl: `app/components/home/home.component.html`
})
export class HomeComponent {}