/**
 * Created by fisher at 9:54 AM on 1/28/17.
 */

'use strict';

/** @namespace this.props.params.activityID */

let ActivitiesConstants = require('./../../network/ecust/activities/Constants');

let home = '';
exports.ROUTE_HOME = home + '/';
/**
 * Post activity.
 */
exports.ROUTE_POST_ACTIVITY = home + '/post';
/**
 * Activity detail.
 */
exports.ROUTE_ACTIVITY_DETAIL = home + '/:activityID';
exports.getActivityLink = (activityID) => `${home}/${activityID}`;
/**
 * Update activity.
 */
exports.ROUTE_UPDATE_ACTIVITY = exports.ROUTE_POST_ACTIVITY + '/:activityID';
exports.getUpdateActivityPath = (activityID) => `${exports.ROUTE_POST_ACTIVITY}/${activityID}`;
/**
 * Activity image path.
 */
exports.getActivityImagePath = ActivitiesConstants.getActivityImagePath;

exports.ROUTE_POSTED_ACTIVITIES = home + '/posts';
exports.ROUTE_JOINED_ACTIVITIES = home + '/joined';
exports.ROUTE_FAVORITE_ACTIVITIES = home + '/favorites';


/**
 * Activity Statistics.
 */
exports.PATH_ACTIVITY_STATISTICS = home + '/statistics';
exports.ROUTE_ACTIVITY_STATISTICS = exports.PATH_ACTIVITY_STATISTICS + '/:activityID';
exports.getActivityStatistics = activityID => `${exports.PATH_ACTIVITY_STATISTICS}/${activityID}`;


