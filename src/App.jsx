import React from 'react';

import { Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';

import Routes from './Routes.jsx';
import Header from './Header/Header.jsx'
import reducers from './Reducer'
import ReduxThunk from 'redux-thunk';

export default class App extends React.Component {

    render(){
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
				<div id="root" style={style.root}>
					<Header />
					<Routes/>
				</div>
			</Provider>
		);
	}
}
const style = {
	root: {
		height: "100%",
		width: "100%"
	}
}