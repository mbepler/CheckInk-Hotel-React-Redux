import React, {Component} from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { connect }from 'react-redux';
import Select from 'react-select';


import {setPerson,reset} from '../Actions/DeleteGuestAction';

class DeleteScreen extends Component{

    constructor(props) {
        super(props);
		this.state = {
            people:[]
        }
        this._deleteGuest = this._deleteGuest.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        var guests = [];
        for(var index in nextProps.options){
            guests.push(nextProps.options[index].guest);
        }
        this.state.people = guests.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        return !((this.props == nextProps) &&(this.state == nextState))
    }

	render() {
		return (
			<Modal show={this.props.show} onHide={() => this.props.closeScreen()} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Excluir Pessoa</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label>Pessoa</Form.Label>
                <Select
                    isClearable
                    value={this.props.guest}
                    options={this.state.people}
                    placeholder="Escolha a pessoa a ser alterada"
                    onChange={(value) => this.props.setPerson(value)}
                /> </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => this.props.closeScreen()}>Fechar</Button>
                <Button variant="primary" onClick={() => this._deleteGuest()} >Excluir</Button>
            </Modal.Footer>
            </Modal>
			
		);
    }
    
    _deleteGuest(){
        this.props.deleteGuest(this.props.person);
        this.props.reset();
    }


}

const mapStateToProps = state => (
    {
        person: state.DeleteGuestReducer.person
    }
);

export default connect(mapStateToProps,{setPerson: setPerson, reset:reset})(DeleteScreen);