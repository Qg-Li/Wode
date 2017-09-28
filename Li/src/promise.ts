var promise = function () {
	this.callbacks = [];
}
promise.prototype = {
	construct: promise,
	resolve: function (result) {
		this.complete("resolve", result);

	},
	reject: function (result) {
		this.complete("reject", result);
	},
	complete: function (type, result) {
		while (this.callbacks[0]) {
			this.callbacks.shift()[type](result);
		}

	},
	then: function (successHandler, failedHandler) {
		this.callbacks.push({
			resolve: successHandler,
			reject: failedHandler
		});
		return this;
	}
}

var p = new promise();
var delay1 = function () {
	setTimeout(function () {
		p.resolve('数据1   ')

	}, 1000);
	return p;
};
var callback1 = function (re) {
	re = re + '数据2';
	console.log(re);
};
delay1().then(callback1)