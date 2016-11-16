import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Trace Specific categories", "/traceSpecificCategoriesExampleComponent"),
    new Link("Writing a Custom TraceWriter", "/customTraceWriterExampleComponent")
];

@Component({
    selector: 'trace-example-component',
    templateUrl: '../examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TraceExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
