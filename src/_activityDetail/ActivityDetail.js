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
import Strings from './../resources/Strings';
import Styles from './../resources/Styles';
import Routes from './../resources/Routes';
import EnrollmentForm from './EnrollmentForm';
import Activity from './../../network/ecust/activities';

class ActivityDetail extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activity: {}
		};
		this.activityID = this.props.params.activityID;
		let _this = this;
		Activity.getActivityDetail(this.props.params.activityID).then((activity) => {
			_this.setState({activity: activity});
		}).catch(err => {
			alert(`Failed to fetch activity detail: ${JSON.stringify(err)}`);
			console.log(err);
		});
	}

	exit() {
		browserHistory.goBack();
	}

	render() {
		let {activity} = this.state;
		document.title = activity.name;
		let getPoster = (posterID) => {
			return (
				<img
					key={posterID}
					src={Routes.getActivityImagePath(activity._id, posterID)}
					style={{width: '30%', maxWidth: '300px', display: 'inline-block'}}
					title="Activity Poster" alt="Activity Poster"/>
			)
		};
		let getPosters = () => {
			if (!activity.posters) {return;}
			return (
				activity.posters.map(getPoster)
			)
		};
		return (
			<div>
				<AppBar title={activity.name}
				        iconElementLeft={<IconButton><NavigationBack /></IconButton>}
				        onLeftIconButtonTouchTap={this.exit}
				/>
				<div style={Styles.main}>
					<div>
						<p>{activity.description}</p>
						{activity.cover ?
							<img
								src={Routes.getActivityImagePath(activity._id, activity.cover)}
								style={{width: '90%', maxWidth: '300px'}}
								title="Activity Cover" alt="Activity Cover"/>
							: null
						}
						<div>
							<span>Time: </span>
							<time>{activity.time}</time>
							<br/>
							<span>Location: </span><span>{activity.location}</span>
						</div>
						<div>
							<p>Posters</p>
							{getPosters()}
						</div>
						{/*<PostActivityImages activityID={this.activityID}/>*/}
						<div>
							<span>Views: </span><span>11</span>
							<br/>
							<span>Likes: </span><span>2</span>
						</div>
						<div>
							<Link onlyActiveOnIndex={true} to={Routes.getUpdateActivityPath(activity._id)}>
								<RaisedButton label={'Edit'} secondary={true}/>
							</Link>
							<span> </span>
							<Link to={Routes.getActivityStatistics(activity._id)}>
								<RaisedButton label={'Statistics'} secondary={true}/>
							</Link>
							<br/>
							<br/>
						</div>
					</div>
					<div>
						<EnrollmentForm activity={activity}/>
					</div>
				</div>
			</div>
		);
	}
}


export default ActivityDetail;

