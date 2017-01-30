/**
 * Created by fisher on 1/6/17.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
