/**
 * Created by fisher at 10:06 on 2/11/17.
 *
 * Activity Images Picker.
 *
 * Appear as an Add Area.
 */

'use strict';

import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import ActionChooseImage from 'material-ui/svg-icons/content/add';
import ActionImageUpload from 'material-ui/svg-icons/file/file-upload';
import FlatButton from 'material-ui/FlatButton';
import ActivityImages from './../../network/ecust/activities/images'
import Strings from './../resources/Strings';
import styles from './styles';

class ActivityImagesPicker extends React.Component {
	constructor(props) {
		super(props);
		this.uploadImage = this.uploadImage.bind(this);
		this.refreshImages = this.refreshImages.bind(this);
		this.onSelectFile = this.onSelectFile.bind(this);
		this.showImagesPicker = this.showImagesPicker.bind(this);
		this.closeImagesPicker = this.closeImagesPicker.bind(this);
		this.onImageChosen = this.onImageChosen.bind(this);
		this.state = {
			// Image picker dialog.
			open: false,
			// Activity Images.
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

	showImagesPicker() {
		this.setState({open: true});
	}

	closeImagesPicker() {
		this.setState({open: false});
	}

	onImageChosen(image) {
		this.props.onImageChosen(image);
		this.closeImagesPicker();
	}

	render() {
		let b = Strings.postActivity.button;
		let strings = Strings.postActivity.imagesPicker;
		let s = this.state;
		let getImages = image => {
			return (
				<div key={image.imageID} style={styles.image.container}>
					<Paper style={styles.image.paper} onClick={() => this.onImageChosen(image)}>
						<img src={image.url} style={styles.image.img} title={image.name} alt={image.name}/>
						<div style={styles.image.options.container}>
							<b>{image.name}</b>
							{/*<span style={styles.image.action}>Rename</span>*/}
							{/*<span style={styles.image.action}>Delete</span>*/}
						</div>
					</Paper>
				</div>
			);
		};
		return (
			<div>
				{/*actions={actions}*/}
				<Dialog
					title={strings.title}
					modal={false}
					open={this.state.open}
					onRequestClose={this.closeImagesPicker}
					autoScrollBodyContent={true}
				>
					<div style={{margin: '15px 0 10px 0'}}>
						<div style={styles.image.container}>
							<RaisedButton label={b.uploadImage.text}
							              labelPosition="before"
							              secondary={true}
							              style={{width: '100%', margin: '20 0 20 0', cursor: 'pointer'}}
							              icon={<ActionImageUpload />}>
								<input type="file" style={styles.inputFile}
								       onChange={this.onSelectFile}/>
							</RaisedButton>

						</div>
						{s.images.map(getImages)}
					</div>
				</Dialog>
				<RaisedButton label={b.chooseImage.text} secondary={true}
				              icon={<ActionChooseImage/>}
				              onTouchTap={this.showImagesPicker}/>
				<br/>
			</div>
		);
	}
}

export default ActivityImagesPicker;

