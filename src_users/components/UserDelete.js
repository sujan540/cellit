import React, {PropTypes} from "react";
import {Modal, Button} from "react-bootstrap";

import {connect} from 'react-redux';

// User delete component
class UserDelete extends React.Component {

    constructor(props) {
        super(props);

        this.modalDeleteHide = this.modalDeleteHide.bind(this);
        this.userDelete = this.userDelete.bind(this);
    }

    // render
    render() {
        return (
            <Modal show={this.props.delete_modal.show}>
                <Modal.Header>
                    <Modal.Title>
                        Are you sure you want to delete <strong>{this.props.delete_modal.user.username}</strong>?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.modalDeleteHide}>No</Button>
                    <Button bsStyle="primary" onClick={this.userDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    modalDeleteHide(event) {
        this.props.dispatch({
            type: 'MODAL_DELETE_HIDE',
        });
    }

    userDelete(event) {
        this.props.dispatch({
            type: 'USERS_DELETE_SAVE',
            id: this.props.delete_modal.user.id,
        });
        this.modalDeleteHide(event);
    }
}

function mapStateToProps(state) {
    let delete_modal;
    if (state.users.delete_modal
        && state.users.delete_modal.user
        && state.users.delete_modal.user.id > 0) {
        delete_modal = {
            show: true,
            user: {
                id: state.users.delete_modal.user.id,
                username: state.users.delete_modal.user.username
            }
        }
    } else {
        delete_modal = {
            show: false,
            user: {
                id: 0,
                username: ''
            }
        }
    }
    return {
        delete_modal: delete_modal
    }
}


export default connect(mapStateToProps)(UserDelete);
