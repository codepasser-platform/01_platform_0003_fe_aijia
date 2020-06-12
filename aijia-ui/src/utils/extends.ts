declare global {
    interface Number {
        thousandsSeparator: () => string;
    }

    interface String {
        startWith: (prefix: string) => boolean;

        endWith: (suffix: string) => boolean;
    }

    interface Array<T> {
        remove<S extends T>(predicate: (this: any, value: T, index: number, obj: T[]) => boolean, _thisArg?: any): void;
    }

    interface Date {
        format: (pattern: string) => string;
        dateAdd: (interval: string, quantity: number) => Date;
        dateDiff: (interval: string, compareTo: Date) => number;
    }
}

/**
 * 数字千位符.
 */
Number.prototype.thousandsSeparator = function (): string {
    return Number(this).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * 字符串前缀判断.
 * @param prefix
 */
String.prototype.startWith = function (prefix: string): boolean {
    return new RegExp('^' + prefix).test(String(this));
};

/**
 * 字符串后缀判断.
 * @param endWith
 */
String.prototype.endWith = function (endWith): boolean {
    return new RegExp(endWith + '$').test(String(this));
};

/**
 * 数组删除元素.
 * @param predicate
 * @param _thisArg
 */
Array.prototype.remove = function (predicate: Function, _thisArg?: any): void {
    if (this == null) {
        throw new TypeError('Array.prototype.remove called on null or undefined');
    }
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
    }
    let list = Object(this);
    let length = list.length >>> 0;
    let thisArg = arguments[1];
    let value;

    for (let i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
            list.splice(i, 1);
            return;
        }
    }
    return;
};

/**
 * 时间类型格式化
 * @param pattern 年(y)、月(M)、日(d)、小时(H)、分(m)、秒(s)、毫秒(S), 季度(q) 可以用 1-2 个占位符，年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * (new Date()).format('yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
 * (new Date()).format('yyyy-M-d h:m:s.S') ==> 2006-7-2 8:9:4.18
 */
Date.prototype.format = function (pattern: string): string {
    let _keys: any = {
        'M+': Number(this.getMonth() + 1), // 月份
        'd+': this.getDate(), // 日
        'H+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        'S': this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(pattern)) {
        pattern = pattern.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let key in _keys) {
        if (key && new RegExp('(' + key + ')').test(pattern)) {
            pattern =
                pattern.replace(RegExp.$1,
                    (RegExp.$1.length === 1) ? (_keys[key]) : (('00' + _keys[key]).substr(
                        ('' + _keys[key]).length)));
        }
    }
    return pattern;
};

/**
 * 日期计算.
 * @param interval 年(y)、月(M)、日(d)、小时(H)、分(m)、秒(s)、毫秒(S), 季度(q) , 周(w).
 * @param quantity
 */
Date.prototype.dateAdd = function (interval: string, quantity: number): Date {
    let d: Date = this;
    let k: any = {
        'y': 'FullYear',
        'q': 'Month',
        'M': 'Month',
        'w': 'Date',
        'd': 'Date',
        'H': 'Hours',
        'm': 'Minutes',
        's': 'Seconds',
        'S': 'Milliseconds'
    };
    let n: any = {
        'q': 3,
        'w': 7
    };
    eval('d.set' + k[interval] + '(d.get' + k[interval] + '()+' + ((n[interval] || 1) * quantity) + ')');
    return d;
};


/**
 * 计算两日期相差的日期年月日等
 * @param interval 年(y)、月(M)、日(d)、小时(H)、分(m)、秒(s)、毫秒(S), 季度(q) , 周(w).
 * @param compareTo
 */
Date.prototype.dateDiff = function (interval: string, compareTo: Date): number {
    let d = this, t = d.getTime(), t2 = compareTo.getTime();
    let k: any;
    let y: number = compareTo.getFullYear() - d.getFullYear();
    k = {
        'y': y,
        'q': y * 4 + Math.floor(compareTo.getMonth() / 3) - Math.floor(d.getMonth() / 3),
        'M': y * 12 + compareTo.getMonth() - d.getMonth(),
        'w': Math.floor((t2 + 345600000) / (604800000)) - Math.floor((t + 345600000) / (604800000)),
        'd': Math.floor(t2 / 86400000) - Math.floor(t / 86400000),
        'H': Math.floor(t2 / 3600000) - Math.floor(t / 3600000),
        'm': Math.floor(t2 / 60000) - Math.floor(t / 60000),
        's': Math.floor(t2 / 1000) - Math.floor(t / 1000),
        'S': t2 - t,
    }

    return k[interval];
};

export {};