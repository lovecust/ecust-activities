/**
 * Created by fisher at 7:22 PM on 1/7/17.
 *
 * Library Status Strings Resources.
 */

'use strict';

/**
 * App Home module.
 */
exports.app = {
	title: 'Ecust Activities'
};
exports.app = {
	title: '华理活动',
	drawer: {
		allActivities: 'All Activities',
		joinedActivities: 'Joined Activities',
		postedActivities: 'Posted Activities',
		favoriteActivities: 'Favorite Activities',
	}
};

/**
 * PostActivity module.
 */
exports.postActivity = {
	title: 'Post An Activity',
	form: {
		name: {
			text: 'Name',
			hint: 'Activity Name'
		},
		description: {
			text: 'Description',
			hint: 'Activity Description'
		},
		time: {
			text: 'Time',
			hint: 'Time, duration and frequency'
		},
		location: {
			text: 'Location',
			hint: 'Activity Location'
		},
		poster: {
			text: 'Upload Poster'
		}
	},
	button: {
		post: {
			text: 'Post Now'
		},
		uploadImage: {
			text: 'Upload Image'
		},
		chooseImage: {
			text: 'Choose Image'
		}
	},
	// Activity Images Picker module.
	imagesPicker: {
		title: 'Choose An Image'
	}
};

/**
 * Activity Detail module.
 */
exports.activityDetail = {
	button: {
		rollin: {
			text: 'Roll In'
		},
		discard: {
			text: 'Discard'
		},
		showEnrollmentForm: {
			text: 'Enroll the Activity'
		}
	}
};
