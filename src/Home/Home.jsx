import React from 'react'


import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import FormControl from 'react-bootstrap/FormControl'
import Table from '../Component/Table'
import InsertScreen from '../Component/InsertScreen'
import UpdateScreen from '../Component/UpdateScreen'
import DeleteScreen from '../Component/DeleteScreen'
import InsertCheckIn from '../Component/InsertCheckIn'
import initialData from '../static/InitialData/People.json'
import initialCheckIn from '../static/InitialData/CheckIn.json'

import {calculateValues, 
	showInsertScreen, 
	insertGuest, 
	insertCheckIn ,
	closeInsertScreen,
	setFilter,
	setPresentFilter, 
	setNotPresentFilter,
	loadInitialData,
	showUpdateScreen,
	closeUpdateScreen,
	updateGuest,
	showDeleteScreen,
	closeDeleteScreen,
	deleteGuest} from '../Actions/HomeAction';
import { connect }from 'react-redux';

class Home extends React.Component{

	constructor(props) {
		super(props);
		this.props.loadInitialData(initialData.People, initialCheckIn.CheckIn);
		setTimeout(function(){ 
			this.props.calculateValues(this.props);
		}.bind(this), 100);
		this._insertCheckIn = this._insertCheckIn.bind(this);
		this._setFilter = this._setFilter.bind(this);
		this._setNotPresentFilter = this._setNotPresentFilter.bind(this);
		this._setPresentFilter = this._setPresentFilter.bind(this);
		this._updateGuest = this._updateGuest.bind(this);
		this._deleteGuest = this._deleteGuest.bind(this);
		
		

	  }

	render() {
		return (
			<Container style={style.container}>
				<InsertScreen show={this.props.showInsert} closeScreen = {this.props.closeInsertScreen} insertGuest = {this.props.insertGuest}></InsertScreen>
				<UpdateScreen show={this.props.showUpdate} closeScreen = {this.props.closeUpdateScreen} updateGuest = {this._updateGuest} options={this.props.hotelRegistration}></UpdateScreen>
				<DeleteScreen show={this.props.showDelete} closeScreen = {this.props.closeDeleteScreen} deleteGuest = {this._deleteGuest} options={this.props.hotelRegistration}></DeleteScreen>
				<div style={style.content}>
					<span >
						<div style={{marginLeft:'-15px'}}>
						<DropdownButton id="dropdown-basic-button" title="Manage Guests">
							<Dropdown.Item onClick={() => this.props.showInsertScreen()} >Insert Guest</Dropdown.Item>
							<Dropdown.Item onClick={() => this.props.showUpdateScreen()} >Update Guest</Dropdown.Item>
							<Dropdown.Item onClick={() => this.props.showDeleteScreen()} >Delete Guest</Dropdown.Item>
						</DropdownButton>
						</div>
					</span>
					<InsertCheckIn  insertCheckIn= {this._insertCheckIn} options={this.props.hotelRegistration}></InsertCheckIn>
					<span>
					<Row className="justify-content-center" >
						<Card style={style.card} >
							<Card.Header style={style.cardHeader }>Board</ Card.Header>
							<Card.Body style={style.container}>
								<div style={style.lines}>
										<InputGroup.Prepend>
										<InputGroup.Text id="filtro" >Find by:</InputGroup.Text>
										</InputGroup.Prepend>
										<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(value) => this._setFilter(value)} />
								</div>
								<div style={{display: 'flex'}}>
									<Form.Check checked={this.props.presentFilter} label={'Guests at hotel'} style={style.checkbox} onChange={() => this._setPresentFilter(this.props.presentFilter)}/>
									<Form.Check checked={this.props.notPresentFilter} label={'Guests who have left the hotel'} style={{...style.checkbox, ...{'marginLeft':'1.25rem'}}} onChange={() => this._setNotPresentFilter(this.props.notPresentFilter)}/>
								</div>
								<div style={{paddingTop: '1.25rem'}}>
									<Table data={this.props.dataGrid}></Table>
								</div>
							</Card.Body>
						</Card>
						
					</Row>
					</span>
				</div>
			</Container>
			
		);
	}

	_deleteGuest(guest){
		this.props.deleteGuest(guest, this.props.hotelRegistration);
		setTimeout(function(){ 
			this.props.calculateValues(this.props);
		}.bind(this), 100);
	}

	_updateGuest(updatedGuest){
		this.props.updateGuest(updatedGuest, this.props.hotelRegistration);
		setTimeout(function(){ 
			this.props.calculateValues(this.props);
		}.bind(this), 100);
	}


	_insertCheckIn(checkIn){
		this.props.insertCheckIn(checkIn, this.props.hotelRegistration);
		setTimeout(function(){ 
			this.props.calculateValues(this.props);
		}.bind(this), 100);
	}

	_setFilter(filter){
    	this.props.setFilter(filter);
		setTimeout(function(){ 
			this.props.calculateValues(this.props);
		}.bind(this), 100);
	}

	_setPresentFilter(filter){
    	this.props.setPresentFilter(filter);
		setTimeout(function(){ 
			this.props.calculateValues(this.props);
		}.bind(this), 100);
	}

	_setNotPresentFilter(filter){
    	this.props.setNotPresentFilter(filter);
		setTimeout(function(){ 
			this.props.calculateValues(this.props);
		}.bind(this), 100);
	}
	

}

const style = {
	container: {
		minHeight: '100%',
		height: 'auto',
 		justifyContent: 'space-between'
	},
	cardHeader: {
		backgroundColor:'#1a73e8',
		textAlign: 'left',
		color: 'White',
		fontWeight: 'bold'
	},
	card: {
		width: '100%'
	},
	content: {
		display: 'inline',
		justifyContent: 'space-between',
		padding:'10%'
	  },
	  lines : {
		justifyContent: 'space-between',
		padding: '0.25rem',
		display: 'flex',
	  },
	  fields: {
		display:'block',
		width: '48%'
	  },
	  checkbox: {
		height: '100%',
		position: 'relative',
		display: 'flex',
		paddingLeft: '1.25rem',
		alignItems: 'center'
	  }
}

const mapStateToProps = state => (
    {
		showInsert: state.HomeReducer.showInsert ,
		showUpdate: state.HomeReducer.showUpdate ,
		showDelete: state.HomeReducer.showDelete ,
		presentFilter: state.HomeReducer.presentFilter,
		notPresentFilter: state.HomeReducer.notPresentFilter,
		filter: state.HomeReducer.filter,
		dataGrid: state.HomeReducer.dataGrid,
		hotelRegistration: state.HomeReducer.hotelRegistration
    }
);
export default connect(mapStateToProps,{ 
	calculateValues:calculateValues, 
	setNotPresentFilter:setNotPresentFilter, 
	setPresentFilter:setPresentFilter, 
	setFilter:setFilter,
	insertCheckIn: insertCheckIn, 
	insertGuest: insertGuest, 
	updateGuest: updateGuest, 
	showInsertScreen: showInsertScreen ,
	closeInsertScreen:closeInsertScreen,
	loadInitialData:loadInitialData,
	showUpdateScreen:showUpdateScreen,
	closeUpdateScreen:closeUpdateScreen,
	showDeleteScreen:showDeleteScreen,
	closeDeleteScreen:closeDeleteScreen,
	deleteGuest:deleteGuest
})(Home);