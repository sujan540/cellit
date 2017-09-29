import React, {PropTypes} from 'react';

import {Button, Glyphicon} from 'react-bootstrap';

import {Link} from 'react-router';
import {connect} from 'react-redux';


class UserListElement extends React.Component {

    constructor(props) {
        super(props);

        this.modalDeleteShow = this.modalDeleteShow.bind(this);
    }

    /**
     * Render
     * @returns {XML}
     */
    render() {
        const user = this.props.user;
        return (
            <tr>
                <td>#{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td>
                    <Link href={'user-edit/' + user.id}>
                        <Button bsSize="xsmall">
                            Edit <Glyphicon glyph="edit"/>
                        </Button>
                    </Link>
                </td>
                <td>
                    <Button bsSize="xsmall" data-id={user.id} data-username={user.username}
                            onClick={this.modalDeleteShow}>
                        Delete <Glyphicon glyph="remove-circle"/>
                    </Button>
                </td>
            </tr>
        );
    }

    modalDeleteShow(event) {
        const user_id = Number(event.target.dataset.id);
        const username = event.target.dataset.username;
        console.log(user_id);
        console.log(username);
        this.props.dispatch({
            type: 'MODAL_DELETE_SHOW',
            id: user_id,
            username: username
        });
    }

}

UserListElement.propTypes = {
    user: PropTypes.object.isRequired
}


export default connect()(UserListElement);