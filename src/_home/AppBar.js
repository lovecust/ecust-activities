/**
 * Created by fisher at 20:02 on 2017-01-07.
 */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as ActionCreators from './actions';
import Strings from './../resources/Strings';
import Routes from './../resources/Routes';

class HomeAppBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {drawerStatus: false};
		this.closeDrawer = this.closeDrawer.bind(this);
		this.toggleDrawer = this.toggleDrawer.bind(this);
		document.title = Strings.app.title;
	}

	toggleDrawer() {
		this.setState({drawerStatus: !this.state.drawerStatus});
	}

	closeDrawer() {
		this.setState({drawerStatus: false});
	}

	render() {
		const {doRefreshData} = this.props;
		let s = Strings.app.drawer;
		return (
			<div>
				{/*iconElementLeft={<IconButton><NavigationMenu/></IconButton>}*/}
				{/*onLeftIconButtonTouchTap={this.toggleDrawer}*/}
				<AppBar title={Strings.app.title}
				        iconElementLeft={<p></p>}
				        iconElementRight={<IconButton><NavigationRefresh/></IconButton>}
				        onRightIconButtonTouchTap={doRefreshData}
				/>
				<Drawer
					docked={false}
					open={this.state.drawerStatus}
					onRequestChange={(drawerStatus) => this.setState({drawerStatus: drawerStatus})}
				>
					<MenuItem onTouchTap={this.closeDrawer}>
						<Link onlyActiveOnIndex={true} to={Routes.ROUTE_HOME}>{s.allActivities}</Link>
					</MenuItem>
					<MenuItem onTouchTap={this.closeDrawer}>
						<Link onlyActiveOnIndex={true} to={Routes.ROUTE_HOME}>{s.joinedActivities}</Link>
					</MenuItem>
					<MenuItem onTouchTap={this.closeDrawer}>
						<Link onlyActiveOnIndex={false} to={Routes.ROUTE_HOME}>{s.postedActivities}</Link>
					</MenuItem>
					<MenuItem onTouchTap={this.closeDrawer}>
						<Link onlyActiveOnIndex={false} to={Routes.ROUTE_HOME}>{s.favoriteActivities}</Link>
					</MenuItem>
				</Drawer>
			</div>
		);
	}
}

export default connect(
	null,
	ActionCreators
)(HomeAppBar);
