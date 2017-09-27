import React from 'react';

import { Button, Glyphicon } from 'react-bootstrap';


export default class UserListElement extends React.Component {
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
                    <a href={'/user-edit/' + user.id}>
                        <Button bsSize="xsmall">
                            Edit <Glyphicon glyph="edit"/>
                        </Button>
                    </a>
                </td>
                <td>
                    <Button bsSize="xsmall" data-id={user.id} data-username={user.username}>
                        Delete <Glyphicon glyph="remove-circle"/>
                    </Button>
                </td>
            </tr>
        );
    }
}

UserListElement.propTypes = {
    user: React.PropTypes.object.isRequired
}