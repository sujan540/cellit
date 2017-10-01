import React, {PropTypes} from "react";
import {Modal, Button} from "react-bootstrap";

import {connect} from 'react-redux';

// User delete component
class UserDelete extends React.Component {

    constructor(props){
        super(props);

        this.modalDeleteHide = this.modalDeleteHide.bind(this);
        this.userDelete = this.userDelete.bind(this);
    }

    // render
    render() {
        return (
            <Modal show={this.props.modal_delete.show}>
                <Modal.Header>
                    <Modal.Title>
                        Are you sure you want to delete <strong>{this.props.modal_delete.username}</strong>?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.modalDeleteHide}>No</Button>
                    <Button bsStyle="primary" onClick={this.userDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    modalDeleteHide(event){
        this.props.dispatch({
            type: 'MODAL_DELETE_HIDE',
        });
    }

    userDelete(event){
        this.props.dispatch({
            type: 'USERS_DELETE_SAVE',
            id: this.props.modal_delete.id,
        });
        this.modalDeleteHide(event);
    }
}

function mapStateToProps(state) {

    let modal_delete;
    if (state.users.delete_user && state.users.delete_user.id > 0) {
        modal_delete = {
            show: true,
            id: state.users.delete_user.id,
            username: state.users.delete_user.username
        }
    } else {
        modal_delete = {
            show: false,
            id: 0,
            username: ''
        }
    }
    return {
        modal_delete: modal_delete
    }
}


export default connect(mapStateToProps)(UserDelete);
