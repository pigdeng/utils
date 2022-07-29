describe('Time API:', function () {
    describe('#formatPassTime()', function () {
        it(`outils.formatPassTime(new Date().getTime() - 30000) === '"刚刚"' should return true`, function () {
            let time = new Date().getTime() - 30000
            assert(outils.formatPassTime(time) === "刚刚")
        });

        it(`outils.formatPassTime(new Date().getTime() - 70000) === '"1分钟前"' should return true`, function () {
            let time = new Date().getTime() - 70000
            assert(outils.formatPassTime(time) === "1分钟前")
        });

        it(`outils.formatPassTime(new Date().getTime() - 70000 * 60) === '"1小时前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60
            assert(outils.formatPassTime(time) === "1小时前")
        });

        it(`outils.formatPassTime(new Date().getTime() - 70000 * 60 * 24) === '"1天前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24
            assert(outils.formatPassTime(time) === "1天前")
        });

        it(`outils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30) === '"1个月前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24 * 30
            assert(outils.formatPassTime(time) === "1个月前")
        });

        it(`outils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30 * 12) === '"1年前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24 * 30 * 12
            assert(outils.formatPassTime(time) === "1年前")
        });
    });

    describe('#formatRemainTime()', function () {
        it(`outils.formatRemainTime(new Date().getTime() + oneSecond + oneMinute + oneHour + oneDay) === '"1天1小时1分钟1秒"' should return true`, function () {
            let time = new Date().getTime(),
                oneSecond = 1000,
                oneMinute = oneSecond * 60,
                oneHour = oneMinute * 60,
                oneDay = oneHour * 24;
            time = time + oneSecond + oneMinute + oneHour + oneDay
            assert(outils.formatRemainTime(time) === "1天 1小时 1分钟 1秒")
        });
    });

    describe('#isLeapYear()', function () {
        it(`outils.isLeapYear(2008) should return true`, function () {
            assert(outils.isLeapYear(2008))
        });
        it(`outils.isLeapYear(2012) should return true`, function () {
            assert(outils.isLeapYear(2012))
        });
        it(`outils.isLeapYear(2016) should return true`, function () {
            assert(outils.isLeapYear(2016))
        });
        it(`outils.isLeapYear(2020) should return true`, function () {
            assert(outils.isLeapYear(2020))
        });
        it(`outils.isLeapYear(2024) should return true`, function () {
            assert(outils.isLeapYear(2024))
        });
        it(`outils.isLeapYear(2017) should return false`, function () {
            assert.notEqual(outils.isLeapYear(2017), true)
        });
        it(`outils.isLeapYear(2018) should return false`, function () {
            assert.notEqual(outils.isLeapYear(2018), true)
        });
        it(`outils.isLeapYear(2019) should return false`, function () {
            assert.notEqual(outils.isLeapYear(2019), true)
        });
    });

    describe('#isSameDay()', function () {
        it(`outils.isSameDay(new Date()) should return true`, function () {
            assert(outils.isSameDay(new Date()) === true)
        });
        it(`outils.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) should return false`, function () {
            assert(outils.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) === false)
        });
    });

    describe('#timeLeft()', function() {
    	it(`outils.timeLeft('2018-10-24 10:24:00', '2018-10-24 10:24:00') should return true`, function() {
            let startTime = new Date('2018-10-24 10:24:00')
            let endTime = new Date('2018-10-24 10:24:00')
            assert.deepEqual(outils.timeLeft(startTime, endTime), { d:0, h:0, m:0, s:0 })
    	});
    	it(`outils.timeLeft('2018-10-25 10:24:00', '2018-10-24 10:24:00') should return true`, function() {
    		let startTime = new Date('2018-10-25 10:24:00')
    		let endTime = new Date('2018-10-24 10:24:00')
    		assert.deepEqual(outils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 0 })
        });
        it(`outils.timeLeft('2018-10-1 10:24:00', '2018-10-24 10:24:00') should return true`, function() {
        	let startTime = new Date('2018-10-1 10:24:00')
        	let endTime = new Date('2018-10-24 10:24:00')
        	assert.deepEqual(outils.timeLeft(startTime, endTime), { d: 23, h: 0, m: 0, s: 0 })
        });
        it(`outils.timeLeft('2018-10-1 10:24:00', '2018-10-24 10:24:00') should return true`, function() {
        	let startTime = new Date('2018-10-24 6:24:00')
        	let endTime = new Date('2018-10-24 10:24:00')
        	assert.deepEqual(outils.timeLeft(startTime, endTime), { d: 0, h: 4, m: 0, s: 0 })
        });
        it(`outils.timeLeft('2018-10-1 10:21:00', '2018-10-24 10:24:00') should return true`, function() {
        	let startTime = new Date('2018-10-24 10:21:00')
        	let endTime = new Date('2018-10-24 10:24:00')
        	assert.deepEqual(outils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 3, s: 0 })
        });
        it(`outils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function() {
        	let startTime = new Date('2018-10-24 10:23:30')
        	let endTime = new Date('2018-10-24 10:24:00')
        	assert.deepEqual(outils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
        });
        it(`outils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function() {
        	let startTime = '2018-10-24 10:23:30'
        	let endTime = new Date('2018-10-24 10:24:00')
        	assert.deepEqual(outils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
        });
        it(`outils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function() {
        	let startTime = new Date('2018-10-24 10:23:30')
        	let endTime = '2018-10-24 10:24:00'
        	assert.deepEqual(outils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
        });
        it(`outils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function() {
        	let startTime = '2018-10-24 10:23:30'
        	let endTime = '2018-10-24 10:24:00'
        	assert.deepEqual(outils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
        });
    });

    describe('#monthDays()', function(){
        it(`outils.monthDays(new Date('2019/10/08')) should return 31`, function(){
            assert(outils.monthDays(new Date('2019/10/08')) === 31)
        });
        it(`outils.monthDays(new Date('2019/02/08')) should return 28`, function(){
            assert(outils.monthDays(new Date('2019/02/08')) === 28)
        });
        it(`outils.monthDays(new Date('2020/02/08')) should return 29`, function(){
            assert(outils.monthDays(new Date('2020/02/08')) === 29)
        });
        it(`outils.monthDays(new Date('2020/4/1')) should return 30`, function() {
        	assert(outils.monthDays(new Date('2020/4/1')) === 30)
        });
    })
})