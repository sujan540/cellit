import React, {PropTypes} from "react";
import {Modal, Button} from "react-bootstrap";

import {connect} from 'react-redux';

/**
 * User Delete class
 */
class UserDelete extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props.delete_user);
        this.hideDelete = this.hideDelete.bind(this);
        this.userDelete = this.userDelete.bind(this);
    }

    render() {
        return (
            <Modal show={this.props.delete_user.show}>
                <Modal.Header>
                    <Modal.Title>
                        Are you sure you want to delete <strong>{this.props.delete_user.username}</strong>?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.hideDelete}>No</Button>
                    <Button bsStyle="primary" onClick={this.userDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    hideDelete() {
        this.props.dispatch({
            type: 'MODAL_DELETE_HIDE'
        });
    }

    // delete the user
    userDelete() {
        // delete the user

        this.props.dispatch({
            type: 'USERS_DELETE',
            user_id: this.state.delete_user.id,
        });

        // hide the prompt
        this.hideDelete();
    }
}

function mapStateToProps(state) {
    console.log('hello');
    console.log(state);
    let delete_user;
    if (state.delete_user) {
        console.log('one');
        delete_user = state.delete_user;
    } else {
        console.log('two');
        delete_user = {
            show: false,
            id: 0,
            username: ''
        }
    }
    return {
        delete_user: delete_user
    }
}

export default connect(mapStateToProps)(UserDelete);