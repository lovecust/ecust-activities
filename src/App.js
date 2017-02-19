/**
 * Created by fisher on 1/6/17.
 */

'use strict';

import React  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Router, Route, Link, browserHistory} from 'react-router';
import ActivityHome from './_home/Home';
import ActivityDetail from './_activityDetail/ActivityDetail';
import ActivityStatistics from './_activityDetail/ActivityStatistics';
import  PostAnActivity from './_postActivity/PostAnActivity';
import AppTheme from './resources/AppTheme';
import AppRoutes from './resources/Routes';

const muiTheme = getMuiTheme(AppTheme);

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<Router history={browserHistory}>
					<Route path={AppRoutes.ROUTE_HOME} component={ActivityHome}/>
					{/*<Route path="/_rollin" component={RollInForm}/>*/}
					<Route path={AppRoutes.ROUTE_POST_ACTIVITY} component={PostAnActivity}/>
					<Route path={AppRoutes.ROUTE_UPDATE_ACTIVITY} component={PostAnActivity}/>
					<Route path={AppRoutes.ROUTE_ACTIVITY_STATISTICS} component={ActivityStatistics}/>
					<Route path={AppRoutes.ROUTE_ACTIVITY_DETAIL} component={ActivityDetail}/>
				</Router>
			</MuiThemeProvider>
		);
	}
}

export default App;
