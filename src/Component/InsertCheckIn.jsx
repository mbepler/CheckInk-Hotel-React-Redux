import React, {Component} from 'react'

import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import { connect }from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';


import { setDateIn, setDateOut, setGuest, setParking,resetState} from '../Actions/InsertCheckInAction';

class InsertCheckIn extends Component{

    constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(),
			endDate: new Date()
		}
    }
    
	render() {
        const { selectedOption } = this.state;
		return (
			<span>
                <Row className="justify-content-center" >
                    <Card style={style.card} >
                        <Card.Header style={style.cardHeader }>Novo Check-In</ Card.Header>
                        <Card.Body style={style.container}>
                            <div style={style.lines}>
                                <div style={style.fields}>
                                    <Card.Text>Data/hora de entrada</Card.Text>
                                    <DatePicker  selected={this.props.dateIn}  onChange={(value) => this.props.setDateIn(value)} dateFormat="dd/MM/yyyy HH:mm"
                                    showTimeSelect	timeFormat="HH:mm"/>
                                </div>
                                <div style={style.fields}>
                                    <Card.Text>Data/hora de saída</Card.Text>
                                    <DatePicker  selected={this.props.dateOut}  onChange={(value) => this.props.setDateOut(value)} dateFormat="dd/MM/yyyy HH:mm"
                                    showTimeSelect	timeFormat="HH:mm"/>
                                </div>
                            </div>
                            <div style={style.lines}>
                                <div style={style.fields}>
                                    <Form.Label>Pessoa</Form.Label>
                                    <Select
                                        value={this.props.guest}
                                        options={this.props.options}
                                        placeholder="Nome"
                                        onChange={(value) => this.props.setGuest(value)}
                                    />
                                </div>
                                <div style={style.fields}>
                                    <Form.Check checked={this.props.isParking} id={'possui_veiculo'} label={'Possui veículo'} style={style.checkbox} onChange={() => this.props.setParking(this.props.isParking)}/>
                                </div>
                            </div>
                            <div style={style.lines}>
                                <Button onClick={() => this._insertCheckIn()}>Salvar</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </span>
			
		);
    }

    _insertCheckIn(){
        const { dateIn, dateOut, guest, isParking} = this.props;
        this.props.insertCheckIn( { dateIn, dateOut, guest, isParking});
        this.props.resetState();

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
        dateIn: state.InsertCheckInReducer.dateIn ,
        dateOut: state.InsertCheckInReducer.dateOut,
        guest: state.InsertCheckInReducer.guest,
        isParking: state.InsertCheckInReducer.isParking
    }
);

export default connect(mapStateToProps,{ setDateIn: setDateIn, setDateOut: setDateOut, setGuest: setGuest, setParking: setParking, resetState:resetState })(InsertCheckIn);