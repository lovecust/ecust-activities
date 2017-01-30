/**
 * Created by fisher at 22:33 on 2017-01-07.
 *
 * Simple local storage wrapper.
 */

'use strict';

exports.available = () => typeof(Storage) !== "undefined";

/**
 * If LocalStorage is available, save a data.
 *
 * @param key{String} Data key.
 * @param value{String} Data value.
 * @param options{Object} Data options.
 */
exports.set = (key, value, options) => {
	if (!exports.available()) {return;}
	let obj = {data: value};
	if (options) {
		if (options.expiration) {
			obj.expiration = options.expiration
		}
	}
	localStorage.setItem(key, JSON.stringify(obj));
};

/**
 * Return corresponding data If LocalStorage is available AND data is set AND data is not expired.
 * @param key Data key.
 */
exports.get = (key) => {
	if (!exports.available()) {return;}
	let obj = localStorage.getItem(key);
	if (!obj) {return;}
	obj = JSON.parse(obj);
	if (!obj.expiration || obj.expiration >= +new Date()) {
		return obj.data;
	}
};
