/**
 * Created by fisher at 20:02 on 2017-01-07.
 *
 * App Main Module.
 */

'use strict';

import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import AppBar from './AppBar';
import RefreshIndicator from './RefreshIndicator';
import EcustActivities from './EcustActivities'


const store = createStore(reducer, applyMiddleware(thunk));

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
class Main extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<div>
					<AppBar />
					<RefreshIndicator/>
					<EcustActivities/>
				</div>
			</Provider>
		);
	}
}

export default Main;

