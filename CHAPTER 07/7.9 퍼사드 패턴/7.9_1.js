// 여러 브라우저 환경의 이벤트를 수신하는 인터페이스를 간소화
const addMyEvent = (el, en, fn) => {
	if (el.addEventListener) {
		el.addEventListener(ev, fn, false);
	} else if (el.attachEvent) {
		el.attachEvent(`on${ev}`, fn);
	} else {
		el[`on${ev}`] = fn;
	}
};
