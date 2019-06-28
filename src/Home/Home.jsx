import React from 'react'


import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Table from '../Component/Table'
import InsertScreen from '../Component/InsertScreen'
import InsertCheckIn from '../Component/InsertCheckIn'

import {calculateValues, showInsertScreen, insertGuest, insertCheckIn ,closeInsertScreen,setFilter,setPresentFilter, setNotPresentFilter} from '../Actions/HomeAction';
import { connect }from 'react-redux';

class Home extends React.Component{

	constructor(props) {
		super(props);
		this._insertGuest = this._insertGuest.bind(this);
		this._insertCheckIn = this._insertCheckIn.bind(this);
		this._setFilter = this._setFilter.bind(this);
		this._setNotPresentFilter = this._setNotPresentFilter.bind(this);
		this._setPresentFilter = this._setPresentFilter.bind(this);
		
		
		
	  }

	render() {
		return (
			<Container style={style.container}>
				<InsertScreen show={this.props.showInsert} closeScreen = {this.props.closeInsertScreen} insertGuest = {this._insertGuest}></InsertScreen>
				<div style={style.content}>
					<span >
						<div style={{marginLeft:'-15px'}}>
							<Button onClick={() => this.props.showInsertScreen()} >Incluir Pessoa</Button>
						</div>
					</span>
					<InsertCheckIn  insertCheckIn= {this._insertCheckIn}></InsertCheckIn>
					<span>
					<Row className="justify-content-center" >
						<Card style={style.card} >
							<Card.Header style={style.cardHeader }>Consultas</ Card.Header>
							<Card.Body style={style.container}>
								<div style={style.lines}>
										<InputGroup.Prepend>
										<InputGroup.Text id="filtro" >Filtrar por:</InputGroup.Text>
										</InputGroup.Prepend>
										<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(value) => this._setFilter(value)} />
								</div>
								<div style={{display: 'flex'}}>
									<Form.Check checked={this.props.presentFilter} label={'Pessoas ainda presentes'} style={style.checkbox} onChange={() => this._setPresentFilter(this.props.presentFilter)}/>
									<Form.Check checked={this.props.notPresentFilter} label={'Pessoas que já deixaram o hotel'} style={{...style.checkbox, ...{'marginLeft':'1.25rem'}}} onChange={() => this._setNotPresentFilter(this.props.notPresentFilter)}/>
								</div>
								<div style={{paddingTop: '1.25rem'}}>
									<Table data={this.props.guests}></Table>
								</div>
							</Card.Body>
						</Card>
						
					</Row>
					</span>
				</div>
			</Container>
			
		);
	}

	_insertGuest(guest){
    	this.props.insertGuest(guest);
		this.props.calculateValues(this.props);
	}

	_insertCheckIn(checkIn){
    	this.props.insertCheckIn(checkIn);
		this.props.calculateValues(this.props);
	}

	_setFilter(filter){
    	this.props.setFilter(filter);
		this.props.calculateValues(this.props);
	}

	_setPresentFilter(filter){
    	this.props.setPresentFilter(filter);
		this.props.calculateValues(this.props);
	}

	_setNotPresentFilter(filter){
    	this.props.setNotPresentFilter(filter);
		this.props.calculateValues(this.props);
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
        guests: state.HomeReducer.guests,
		checkIns: state.HomeReducer.checkIns,
		presentFilter: state.HomeReducer.presentFilter,
		notPresentFilter: state.HomeReducer.notPresentFilter,
		filter: state.HomeReducer.filter,
		calculatedValues: state.HomeReducer.calculatedValues,
    }
);
export default connect(mapStateToProps,{ calculateValues:calculateValues, setNotPresentFilter:setNotPresentFilter, setPresentFilter:setPresentFilter, setFilter:setFilter,insertCheckIn: insertCheckIn, insertGuest: insertGuest, showInsertScreen: showInsertScreen ,closeInsertScreen:closeInsertScreen})(Home);