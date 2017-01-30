/**
 * Created by fisher at 6:22 PM on 1/8/17.
 */

'use strict';

import {
	ACTION_DO_REFRESH_DATA,
	ACTION_ON_DATA_REFRESHED
} from './../actions';

export default function counter(state = {activities: []}, action) {
	switch (action.type) {
		case ACTION_ON_DATA_REFRESHED:
			return {activities: action.activities};
		case ACTION_DO_REFRESH_DATA:
			return state;
		default:
			return state;
	}
}


