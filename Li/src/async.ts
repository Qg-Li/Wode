var i = 0;
//函数返回promise
function sleep(ms) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log('河南工程学院发来贺电“祝艺兴新专辑大卖！”');
			i++;
			if (i >= 3) reject(new Error('网络不通'));
			else resolve("么么哒！");
		}, ms);
	})
}

(async function () {
	try {
		var val;
		val = await sleep(1000);
		console.log(val);
		val = await sleep(1000);
		console.log(val);
		val = await sleep(1000);
		console.log(val);
	}
	catch (err) {
		console.log('出错了，祝福没发出去，好伤心！    ');
		console.log('祝福居然没发出去，太伤心了！错误信息是：    ' + err.message);
	}
}())