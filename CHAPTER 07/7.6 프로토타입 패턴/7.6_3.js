const beget = (() => {
	class F {
		constructor() {}
	}

	return (proto) => {
		F.prototype = proto;
		return new F();
	};
})();
