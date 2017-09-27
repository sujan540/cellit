import React from 'react';

import UserList from './UserList';
/**
 * App component
 */
export default class App extends React.Component {

    /**
     * Render
     * @returns {XML}
     */
    render() {

        //render
        return (
            <div className="container">
                <UserList/>
            </div>
        )
    }

}