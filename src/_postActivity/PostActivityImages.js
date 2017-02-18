/**
 * Created by fisher at 11:20 PM on 2/10/17.
 */

'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import {Router, Route, Link, browserHistory} from 'react-router';
import Strings from './../resources/Strings';
import Styles from './../resources/Styles';
import ActivityImages from './../../network/ecust/activities/images'


const paperStyle = {
	padding: 20,
	margin: '0 0 10px 0',
};
const imageStyle = {
	width: '100%',
	display: 'block',
	margin: '0 auto'
};
const inputFileStyle = {
	cursor: 'pointer',
	position: 'absolute',
	top: 0,
	bottom: 0,
	right: 0,
	left: 0,
	width: '100%',
	opacity: 0,
};

class PostActivityImages extends React.Component {
	constructor(props) {
		super(props);
		this.uploadImage = this.uploadImage.bind(this);
		this.refreshImages = this.refreshImages.bind(this);
		this.onSelectFile = this.onSelectFile.bind(this);
		this.state = {
			images: []
		};
		this.activityID = this.props.activityID;
		this.refreshImages();
	}

	uploadImage() {
		console.log('Building...');
	}

	refreshImages() {
		ActivityImages.imagesList(this.activityID).then(images => {
			console.log('images', images);
			this.setState({images});
		}).catch(err => {
			console.error(err);
		});
	}

	onSelectFile(event) {
		let file = event.target.files[0];
		ActivityImages.uploadImage(this.activityID, file.name, file).then(image => {
			console.log(image);
			this.refreshImages();
		}).catch(error => {
			console.error(error);
		});
	}

	render() {
		let f = Strings.postActivity.form;
		let b = Strings.postActivity.button;
		let s = this.state;
		let getImages = image => {
			return (
				<Paper style={paperStyle} key={image.imageID}>
					<img src={image.url} title={image.name} alt={image.name} style={imageStyle}/>
					<h3>{image.name}</h3>
				</Paper>
			);
		};
		return (
			<div>
				<div style={{margin: '15px 0 10px 0'}}>
					{s.images.map(getImages)}
				</div>
				<RaisedButton label={b.uploadImage.text} secondary={true}
				              style={{width: '100%', margin: '20 0 20 0'}}>
					<input type="file" style={inputFileStyle}
					       onChange={this.onSelectFile}/>
				</RaisedButton>
			</div>
		);
	}
}

export default PostActivityImages;

