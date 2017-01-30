/**
 * Created by fisher at 2:15 PM on 1/8/17.
 *
 * Library actions.
 */

'use strict';

import LocalStorageUtil from './../../utils/LocalStorageUtil';
import Activity from './../../../network/ecust/activities'

exports.ACTION_DO_REFRESH_DATA = 'ACTION_DO_REFRESH_DATA';
exports.ACTION_ON_DATA_REFRESHED = 'ACTION_ON_DATA_REFRESHED';
exports.ACTION_DO_SHOW_INDICATOR = 'ACTION_DO_SHOW_INDICATOR';
exports.ACTION_DO_HIDE_INDICATOR = 'ACTION_DO_HIDE_INDICATOR';

/**
 * Trigger to refresh data.
 */
exports.doRefreshData = () => {
	return dispatch => {
		dispatch(exports.doShowIndicator());
		Activity.activitiesList().then(activities => {
			console.log(`Got activity: ${1 + 1}`, activities);
			// LocalStorageUtil.setCache(status);
			dispatch(exports.doHideIndicator());
			dispatch(exports.onDataRefreshed(activities));
		}).catch(ex => {
			console.error(ex);
			dispatch(exports.doHideIndicator());
		});
	};
};


/**
 * Listener when data refreshed.
 */
exports.onDataRefreshed = (activities) => {
	return {
		type: exports.ACTION_ON_DATA_REFRESHED,
		activities: activities
	};
};

exports.doShowIndicator = () => {
	return {type: exports.ACTION_DO_SHOW_INDICATOR};
};

exports.doHideIndicator = () => {
	return {type: exports.ACTION_DO_HIDE_INDICATOR};
};
