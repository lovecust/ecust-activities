/**
 * Created by fisher at 6:47 PM on 1/8/17.
 */

'use strict';

import LocalStorage from './LocalStorage';

let KEY_ECUST_LIBRARY_STATUS = 'lt.ecust.library.status';

let Util = {};
Util.getCache = () => {
	return LocalStorage.get(KEY_ECUST_LIBRARY_STATUS);
};

Util.setCache = (status) => {
	LocalStorage.set(KEY_ECUST_LIBRARY_STATUS, status, {expiration: +new Date() + 2 * 60 * 1000});
};

export default Util;

