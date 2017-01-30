/**
 * Created by fisher at 9:37 AM on 1/28/17.
 */

'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import {Router, Route, Link, browserHistory} from 'react-router';
import Strings from './../resources/Strings';
import Styles from './../resources/Styles';
import Activity from './../../network/ecust/activities'

/**
 * Target that describes why this page is requested.
 * @type {string} Target constants.
 */
let TARGET_POST = 'TARGET_POST';
let TARGET_UPDATE = 'TARGET_UPDATE';

class PostAnActivity extends React.Component {
	constructor(props) {
		super(props);
		this.postAnActivity = this.postAnActivity.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
		this.state = {};
		/**
		 * Activity fetched from server.
		 */
		this.activity = {};
		/**
		 * Activity patch data to be sent to server.
		 */
		this.activityPatch = {};
		let _this = this;
		if (this.props.params.activityID) {
			Activity.getActivityDetail(this.props.params.activityID).then(activity => {
				/**
				 * Original activity instance.
				 */
				this.target = TARGET_UPDATE;
				_this.activityID = activity._id;
				_this.activity = activity;
				_this.setState(activity);
			}).catch(err => {
				alert('Some error happened!');
				console.log('Some error: ', err);
			});
		} else {
			this.target = TARGET_POST;
		}
		document.title = Strings.postActivity.title;
	}

	exit() {
		browserHistory.goBack();
	}

	postAnActivity() {
		if (this.target === TARGET_POST) {
			let patch = this.activityPatch;
			if (!patch.name || !patch.description || !patch.time || !patch.location) {
				alert('Please specify data required!');
				return;
			}
			Activity.postActivity(this.activityPatch).then(activity => {
				console.log('Activity Posted!', activity);
				browserHistory.push(`/${activity._id}`);
			}).catch(err => {
				alert(`Some error happened when posting activity! ${JSON.stringify(err)}`);
				console.log(err);
			});
		} else {
			if ('{}' === JSON.stringify(this.activityPatch)) {
				alert('Nothing is changed yet!');
				return;
			}
			Activity.updateActivity(this.activityID, this.activityPatch).then(activity => {
				console.log('Activity Updated!', activity);
				browserHistory.push(`/${activity._id}`);
			}).catch(err => {
				alert(`Some error happened when updating activity! ${JSON.stringify(err)}`);
				console.log(err);
			});
		}
	}

	onTextChange(event) {
		let t = event.target;
		this.setState({
			[t.name]: t.value
		});
		if (!t.value || t.value === this.activity[t.name]) {
			delete this.activityPatch[t.name];
		} else {
			this.activityPatch[t.name] = t.value;
		}
		console.log('state: ', this.state, 'patch: ', this.activityPatch);
	}

	render() {
		let f = Strings.postActivity.form;
		let b = Strings.postActivity.button;
		let s = this.state;
		return (
			<div>
				<AppBar title={Strings.postActivity.title}
				        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
				        iconElementRight={<FlatButton label="Post"/>}
				        onLeftIconButtonTouchTap={this.exit}
				        onRightIconButtonTouchTap={this.postAnActivity}
				/>
				<div style={Styles.main}>
					<TextField
						name="name"
						fullWidth={true}
						floatingLabelText={f.name.text}
						hintText={f.name.hint}
						onChange={this.onTextChange}
						value={s.name}
					/>
					<br/>
					<TextField
						name="description"
						fullWidth={true}
						multiLine={true}
						floatingLabelText={f.description.text}
						hintText={f.description.hint}
						onChange={this.onTextChange}
						value={s.description}
					/>
					<br/>
					<TextField
						name="time"
						fullWidth={true}
						floatingLabelText={f.time.text}
						onChange={this.onTextChange}
						hintText={f.time.hint}
						value={s.time}
					/>
					<br/>
					<TextField
						name='location'
						fullWidth={true}
						floatingLabelText={f.location.text}
						hintText={f.location.hint}
						onChange={this.onTextChange}
						value={s.location}
					/>
					<br/>
					<RaisedButton label={b.post.text} secondary={true} style={{width: '100%', margin: '20 0 0 0'}}
					              onTouchTap={this.postAnActivity}/>
				</div>
			</div>
		);
	}
}

export default PostAnActivity;


