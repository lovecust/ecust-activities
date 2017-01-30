/**
 * Created by fisher at 6:22 PM on 1/8/17.
 */

'use strict';

import {
	ACTION_DO_SHOW_INDICATOR,
	ACTION_DO_HIDE_INDICATOR
} from '../actions';

export default function counter(state = {status: 'hide'}, action) {
	switch (action.type) {
		case ACTION_DO_SHOW_INDICATOR:
			return {status: 'loading'};
			break;
		case ACTION_DO_HIDE_INDICATOR:
			return {status: 'hide'};
			break;
		default:
			return state;
	}
}


