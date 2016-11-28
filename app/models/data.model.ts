import { Observable } from 'data/observable';

export default class Model extends Observable {
	message: string = 'asdf';
	counter: number = 10;
	interval: number;

	constructor (message: string = '') {

		super();

		this.message = message;

		this.interval = setInterval(() => {
			if (this.counter <= 0) {
				return clearInterval(this.interval);
			}

			this.increaseCounter();
			//console.log(this.counter);
		}, 1000);

	}

	public increaseCounter () : void {
		if (this.counter > 0) {
            //console.log("increasing counter");
		    this.set('counter', this.counter + 1);
		}
	}

	public decreaseCounter () : void {

		if (this.counter > 0) {
			//console.log(this.counter - 1);
			this.set('counter', this.counter - 1);
		}
	}
}