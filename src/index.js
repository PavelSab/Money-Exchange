// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let obj = {};
	if (currency <= 0) {
		return {};
	}
	else if (currency > 10000) {
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	}
	if (currency / 50 >= 1) {
		let h = Math.floor(currency / 50);
		obj.H = h;
		currency = currency - h * 50;
	}
	if (currency / 25 >= 1) {
		let q = Math.floor(currency / 25);
		obj.Q = q;
		currency = currency - q * 25;
	}
	if (currency / 10 >=1) {
		let d = Math.floor(currency / 10);
		obj.D = d;
		currency = currency - d * 10;
	}
	if (currency / 5 >=1) {
		let n = Math.floor(currency / 5);
		obj.N= n;
		currency = currency - n * 5;
	}
	if (currency / 1 >=1) {
		let p = Math.floor(currency / 1);
		obj.P = p;
		currency = currency - p;
	}
    return obj;
}
