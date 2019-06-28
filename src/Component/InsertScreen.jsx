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
                <Modal.Title>Incluir Pessoa</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label>Pessoa</Form.Label>
   				<Form.Control type="text" placeholder="Nome" onChange={(value) => this.props.setName(value)}/>
                <Form.Label>Documento</Form.Label>
   				<Form.Control type="text" placeholder="Documento" onChange={(value) => this.props.setDocument(value)}/>
                <Form.Label>Telefone</Form.Label>
   				<Form.Control type="text" placeholder="Telefone" onChange={(value) => this.props.setPhone(value)}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => this.props.closeScreen()}>Fechar</Button>
                <Button variant="primary" onClick={() => this._insertGuest()} >Incluir</Button>
            </Modal.Footer>
            </Modal>
			
		);
    }
    
    _insertGuest(){
        const { name, document, phone } = this.props;
        this.props.insertGuest({ name, document, phone });
    }
}

const mapStateToProps = state => (
    {
        name: state.InsertGuestReducer.name ,
        document: state.InsertGuestReducer.document,
        phone: state.InsertGuestReducer.phone
    }
);

export default connect(mapStateToProps,{ setName: setName, setDocument: setDocument, setPhone: setPhone })(InsertScreen);