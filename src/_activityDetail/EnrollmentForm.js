/**
 * Created by fisher on 1/7/17.
 */

'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Member from './../../network/ecust/activities/members';
import Strings from '../resources/Strings';

const style = {
	// height: 100,
	// width: 100,
	margin: 20,
	padding: 20,
	// textAlign: 'center',
	// display: 'inline-block',
	maxWidth: 743
};


class EnrollmentForm extends React.Component {

	constructor(props) {
		super(props);
		this.onTextChange = this.onTextChange.bind(this);
		this.enrollActivity = this.enrollActivity.bind(this);
		this.toggleEnrollmentForm = this.toggleEnrollmentForm.bind(this);
		this.state = {
			formStatus: false
		};
		this.member = {};
	}

	toggleEnrollmentForm = () => {
		this.setState({formStatus: !this.state.formStatus});
	};

	enrollActivity() {
		Member.enrollActivity(this.activity._id, this.member).then(member => {
			alert('You have enrolled this activity now!');
			console.log(member);
			this.state = {};
			this.setState({formStatus: false});
		}).catch(err => {
			alert('Failed to enroll!');
			console.log(err);
		});
	}

	onTextChange(event) {
		let t = event.target;
		this.setState({
			[t.name]: t.value
		});
		this.member[t.name] = t.value;
		console.log(this.state, this.member);
	}

	render() {
		this.activity = this.props.activity;
		let s = this.state;
		let fields = [{
			_id: 'a',
			name: 'name',
			hint: 'Your Name',
			label: 'Name',
			multiLine: false
		}, {
			_id: 'b',
			name: 'campusID',
			hint: 'Your Campus ID',
			label: 'Campus ID',
			multiLine: false
		}, {
			_id: 'c',
			name: 'major',
			hint: 'Your Major',
			label: 'Major',
			multiLine: false
		}, {
			_id: 'd',
			name: 'email',
			hint: 'Your Email',
			label: 'Email',
			multiLine: false
		}];
		let getTextField = (field) => {
			return (
				<div key={field._id}>
					<TextField
						hintText={field.hint}
						name={field.name}
						floatingLabelText={field.label}
						onChange={this.onTextChange}
						fullWidth={true}
						multiLine={field.multiLine}
						value={s[field.name] || field.defaultValue || ''}
					/>
					<br/>
				</div>
			);
		};
		return (
			<div>
				<div style={{display: this.state.formStatus ? 'block' : 'none'}}>
					{fields.map(getTextField)}
					<RaisedButton label={Strings.activityDetail.button.rollin.text}
					              secondary={true}
					              style={{width: '100%', margin: '20 0 0 0'}}
					              onTouchTap={this.enrollActivity}/>
					<br/>
					<br/>
				</div>
				<RaisedButton
					label={this.state.formStatus ? Strings.activityDetail.button.discard.text : Strings.activityDetail.button.showEnrollmentForm.text}
					primary={true}
					style={{
						width: '100%',
						margin: '20 0 0 0'
					}}
					onTouchTap={this.toggleEnrollmentForm}
				/>
			</div>
		);
	}
}

export default EnrollmentForm;
