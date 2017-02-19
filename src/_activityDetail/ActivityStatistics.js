/**
 * Created by fisher on 1/7/17.
 */

'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import {Router, Route, Link, browserHistory} from 'react-router';
import ActivityMembers from './ActivityMembers';
import Strings from './../resources/Strings';
import Styles from './../resources/Styles';
import Routes from './../resources/Routes';
import Activity from './../../network/ecust/activities';

class ActivityStatistics extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			status: false,
			activity: {}
		};
		this.activityID = this.props.params.activityID;
		let _this = this;
		// Load activity info.
		Activity.getActivityDetail(this.activityID).then((activity) => {
			_this.setState({activity: activity});
		}).catch(err => {
			alert(`Some error: ${JSON.stringify(err)}`);
			console.error(err);
		});

	}

	exit() {
		browserHistory.goBack();
	}

	render() {
		let {activity} = this.state;
		document.title = activity.name;
		return (
			<div>
				<AppBar title={activity.name}
				        iconElementLeft={<IconButton><NavigationBack /></IconButton>}
				        onLeftIconButtonTouchTap={this.exit}
				/>
				<div style={Styles.main}>
					<div>
						<p>{activity.description}</p>
						<div>
							<span>Time: </span>
							<time>{activity.time}</time>
							<br/>
							<span>Location: </span><span>{activity.location}</span>
						</div>
						<div>
							<span>Views: </span><span>13</span>
							<br/>
							<span>Likes: </span><span>2</span>
						</div>
						<div>
							<Link onlyActiveOnIndex={true} to={Routes.getUpdateActivityPath(activity._id)}>
								Edit
							</Link>
						</div>
					</div>
					<ActivityMembers activityID={this.activityID}/>
				</div>
			</div>
		);
	}
}


export default ActivityStatistics;

