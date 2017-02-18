/**
 * Created by fisher at 9:54 AM on 1/28/17.
 */

'use strict';

/** @namespace this.props.params.activityID */

let home = '/';
exports.home = home;
exports.postActivity = home + 'post';
exports.postedActivities = home + 'posts';
exports.joinedActivities = home + 'joined';
exports.favoriteActivities = home + 'favorites';
exports.updateActivity = exports.postActivity + '/:activityID';
exports.getActivityLink = (activityID) => `${home}${activityID}`;
exports.activityDetail = home + ':activityID';

/**
 * Activity Statistics.
 */
exports.PATH_ACTIVITY_STATISTICS = home + 'statistics';
exports.ROUTE_ACTIVITY_STATISTICS = exports.PATH_ACTIVITY_STATISTICS + '/:activityID';
