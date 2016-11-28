import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit} from "@angular/core";
import DataModel from '../../models/data.model';

@Component({
    moduleId: module.id,
    selector: "counter",
    templateUrl: "counter.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

    @Input() model: DataModel;

    constructor(private cd: ChangeDetectorRef) {

    }

    ngOnInit () {
        this.model.on(DataModel.propertyChangeEvent, e => {
            //console.log('counterComponent', this.model.counter);
            this.cd.markForCheck();
        });
    }

    onTap () {
        this.model.decreaseCounter();
    }
}
