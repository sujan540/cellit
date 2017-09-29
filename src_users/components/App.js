import React from "react";
import {connect} from "react-redux";
import {ProgressBar} from "react-bootstrap";

import Menu from "./Menu";

/**
 * App component
 */
export class App extends React.Component {

    constructor(props) {
        super(props);
        // the first time we load the app, we need that users list
        this.props.dispatch({
            type: 'USERS_FETCH_LIST'
        });
    }

    /**
     * Render method
     * @returns {XML}
     */
    render() {
        if (!this.props.users.length) {
            return (
                <ProgressBar active now={100}/>
            );
        }
        return (
            <div className="container">
                <div>
                    <Menu/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

/**
 *
 * @param state
 * @returns {{users: Array}}
 */
function mapStateToProps(state) {
    return {
        users: state.users || [],
    };
}
export default connect(mapStateToProps)(App);
