const _private = {
	id: 5,
	get() {
		console.log(`current value: ${this.i}`);
	},
	set(val) {
		this.i = val;
	},
	run() {
		console.log('running');
	},
	jump() {
		console.log(jumping);
	},
};

export default _private;
