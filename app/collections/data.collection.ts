import Collection from './base.collection';
import DataModel from '../models/data.model';

export default class DataCollection extends Collection<DataModel> {

	constructor() {
		super();

		this.on(DataCollection.propertyChangeEvent, e => {
			console.log('DataCollection:propertyChangeEvent', e);
		});

	}

}

export const dataCollection = new DataCollection();
