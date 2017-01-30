/**
 * Created by fisher at 8:55 PM on 1/29/17.
 */

'use strict';

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Member from './../../network/ecust/activities/members';

let oddStyle = {
	border: '0',
	background: '#eee'
};
let headerStyle = {
	border: '0',
	background: '#aaa'
};
let evenStyle = {
	border: '0',
	background: '#ccc'
};

let tdStyle = {
	border: '0',
	padding: '5px 6px 0px 6px'
};

class ActivityMembers extends React.Component {

	constructor(props) {
		super(props);
		this.fetchMembers = this.fetchMembers.bind(this);
		this.state = {};
		this.activityID = this.props.activityID;
		// Load activity member info.
		this.fetchMembers();
	}

	fetchMembers() {
		Member.membersList(this.activityID).then(members => {
			this.setState({members: members});
		}).catch(err => {
			alert(`Some error: ${JSON.stringify(err)}`);
			console.error(err);
		});
	}

	removeMember(member) {
		if (!confirm('Remove member: ' + member.name)) {return;}
		Member.removeMember(this.activityID, member._id).then(member => {
			console.log('deleted: ', member);
			this.fetchMembers();
		}).catch(err => {
			alert('Failed to remove the specific member!');
			console.error(err);
		});
	}

	render() {
		let members = this.state.members;
		if (!members) {return (<p>No members enrolled!</p>);}
		let getRow = (member, index) => {
			return (
				<tr key={member._id} style={index % 2 === 0 ? evenStyle : oddStyle}>
					<td style={{border: 0}}>
						<FlatButton style={{padding: 5, minWidth: 0, lineHeight: 'inherit', height: 'inherit'}}
						            onTouchTap={event => this.removeMember(member)}>
							<NavigationClose style={{margin: 'auto', color: 'red'}}/>
						</FlatButton>
					</td>
					<td style={tdStyle}>{member.name}</td>
					<td style={tdStyle}>{member.campusID}</td>
					<td style={tdStyle}>{member.major}</td>
					<td style={tdStyle}>{member.email}</td>
				</tr>
			)
		};
		return (
			<table style={{width: '96%', margin: '2%', borderCollapse: 'collapse'}}>
				<thead>
				<tr style={headerStyle}>
					<th style={{border: 0, width: 1}}></th>
					<th style={tdStyle}>Name</th>
					<th style={tdStyle}>Campus ID</th>
					<th style={tdStyle}>Major</th>
					<th style={tdStyle}>Email</th>
				</tr>
				</thead>
				<tbody>
				{members.map(getRow)}
				</tbody>
			</table>
		);
	}
}

export default ActivityMembers;