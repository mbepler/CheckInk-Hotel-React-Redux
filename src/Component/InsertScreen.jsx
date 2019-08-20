import React, {Component} from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { connect }from 'react-redux';


import { setDocument, setName, setPhone } from '../Actions/InsertGuestAction';

class InsertScreen extends Component{


	render() {
		return (
			<Modal show={this.props.show} onHide={() => this.props.closeScreen()} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Insert Guest</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label>Name</Form.Label>
   				<Form.Control type="text" placeholder="Name" onChange={(value) => this.props.setName(value)}/>
                <Form.Label>Document</Form.Label>
   				<Form.Control type="text" placeholder="Document" onChange={(value) => this.props.setDocument(value)}/>
                <Form.Label>Phone</Form.Label>
   				<Form.Control type="text" placeholder="Phone" onChange={(value) => this.props.setPhone(value)}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => this.props.closeScreen()}>Close</Button>
                <Button variant="primary" onClick={() => this._insertGuest()} >Insert</Button>
            </Modal.Footer>
            </Modal>
			
		);
    }
    
    _insertGuest(){
        const { name, document, phone,label,value } = this.props;
        this.props.insertGuest({ name, document, phone,label,value }, this.props.hotelRegistration);
    }


}

const mapStateToProps = state => (
    {
        name: state.InsertGuestReducer.name ,
        document: state.InsertGuestReducer.document,
        phone: state.InsertGuestReducer.phone,
        label: state.InsertGuestReducer.label,
        value: state.InsertGuestReducer.value,
        hotelRegistration: state.HomeReducer.hotelRegistration
    }
);

export default connect(mapStateToProps,{ setName: setName, setDocument: setDocument, setPhone: setPhone })(InsertScreen);