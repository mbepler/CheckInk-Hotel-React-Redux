import React, {Component} from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { connect }from 'react-redux';
import Select from 'react-select';


import { setDocument, setName, setPhone,setPerson ,reset} from '../Actions/UpdateGuestAction';

class UpdateScreen extends Component{

    constructor(props) {
        super(props);
		this.state = {
            people:[]
        }
        this._updateGuest = this._updateGuest.bind(this);
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
                <Modal.Title>Update guest</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label>Choose guest to be updated:</Form.Label>
                <Select
                    isClearable
                    value={this.props.guest}
                    options={this.state.people}
                    placeholder="Choose guest to be updated"
                    onChange={(value) => this.props.setPerson(value)}
                />
                <Form.Label>Guest</Form.Label>
   				<Form.Control disabled={this.props.disableFields} type="text" placeholder="Name" onChange={(value) => this.props.setName(value)} value={this.props.name}/>
                <Form.Label>Document</Form.Label>
   				<Form.Control disabled={this.props.disableFields} type="text" placeholder="Document" onChange={(value) => this.props.setDocument(value)} value={this.props.document}/>
                <Form.Label>Phone</Form.Label>
   				<Form.Control disabled={this.props.disableFields} type="text" placeholder="Phone" onChange={(value) => this.props.setPhone(value)} value={this.props.phone}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => this.props.closeScreen()}>Close</Button>
                <Button variant="primary" onClick={() => this._updateGuest()} >Update</Button>
            </Modal.Footer>
            </Modal>
			
		);
    }
    
    _updateGuest(){
        const { name, document, phone,label,value,person } = this.props;
        this.props.updateGuest({ name, document, phone,label,value,person });
        this.props.reset();
    }


}

const mapStateToProps = state => (
    {
        name: state.UpdateGuestReducer.name ,
        document: state.UpdateGuestReducer.document,
        phone: state.UpdateGuestReducer.phone,
        label: state.UpdateGuestReducer.label,
        value: state.UpdateGuestReducer.value,
        person: state.UpdateGuestReducer.person,
        disableFields: state.UpdateGuestReducer.disableFields,
    }
);

export default connect(mapStateToProps,{reset:reset, setName: setName, setDocument: setDocument, setPhone: setPhone ,setPerson: setPerson})(UpdateScreen);