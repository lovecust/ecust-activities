/**
 * Created by fisher at 2:46 PM on 1/8/17.
 *
 * Reducer.
 */

'use strict';

import {combineReducers} from 'redux';
import indicator from './indicator';
import activity from './activity';

export default combineReducers({
	indicator: indicator,
	activity: activity
});
