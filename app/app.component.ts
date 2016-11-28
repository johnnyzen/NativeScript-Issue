import { Component } from "@angular/core";

import DataModel from './models/data.model';
import DataCollection, { dataCollection } from './collections/data.collection';
import { CounterComponent } from "./controls/counter/counter.component";

@Component({
    selector: "app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    public items: DataCollection = dataCollection;

    constructor () {
		dataCollection.on(DataCollection.changeEvent, e => {
			console.log('collection:changeEvent', e);
		});

		dataCollection.on(DataCollection.propertyChangeEvent, e => {
			console.log('collection:propertyChangeEvent', e);
		});
    }

    onTapAdd () : void {
        dataCollection.push(new DataModel(Math.random().toString()));
    }

    onTapReduceAll () : void {
        dataCollection.forEach(model => model.decreaseCounter());
    }

}
