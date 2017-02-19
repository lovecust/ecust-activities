/**
 * Created by fisher on 1/7/17.
 */

'use strict';

import React from 'react';
import Paper from 'material-ui/Paper';
import {Router, Route, Link, browserHistory} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {connect} from 'react-redux';
import * as ActionCreators from './actions';
import Strings  from './../resources/Strings';
import Styles from './../resources/Styles';
import Routes from './../resources/Routes'

const style = {
	padding: 20,
	margin: '0 0 10px 0',
};


class ActivityList extends React.Component {

	constructor(props) {
		super(props);
		let {doRefreshData} = this.props;
		doRefreshData();
	}

	render() {
		let {activities} = this.props;
		let createActivity = (activity) => {
			return (
				// Each child in an array or iterator should have a unique "key" prop.
				// Check the render method of `ActivityList`.
				// See https://fb.me/react-warning-keys for more information.
				<Paper style={style} key={activity._id}>
					<div>
						<h3><Link to={Routes.getActivityLink(activity._id)}>{activity.name}</Link></h3>
						<p>{activity.description}</p>
						{activity.cover ?
							<img
								src={Routes.getActivityImagePath(activity._id, activity.cover)}
								style={{width: '90%', maxWidth: '300px'}}
								title="Activity Cover" alt="Activity Cover"/>
							: null
						}
						<div>
							<time>{activity.time}</time>
							<br/>
							<span>{activity.location}</span>
						</div>
					</div>
				</Paper>
			);
		};
		let createActivities = (activities) => {
			if (-1 === activities.length) {
				return (
					<Paper style={style}>
						<p>Oops Nothing to show up!</p>
					</Paper>
				);
			}
			return activities.map(createActivity);
		};
		return (
			<div style={Styles.main}>
				<div>
					{createActivities(activities)}
				</div>
				{/*position: 'fixed',*/}
				<div style={{
					margin: '10px'
				}}>
					<Link to={Routes.ROUTE_POST_ACTIVITY}>
						<FloatingActionButton secondary={true}>
							<ContentAdd/>
						</FloatingActionButton>
					</Link>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({activities: state.activity.activities}),
	ActionCreators
)(ActivityList);

