import React from 'react';
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";

import Menu from './Menu';

/**
 * App component
 */
class App extends React.Component {

    constructor(props){
        super(props);

        if (0 === this.props.users.length) {
            this.props.dispatch({
                type: 'usersFetchList'
            });
        }
    }

    /**
     * Render
     * @returns {XML}
     */
    render() {

        if (this.props.users.length) {
            return (
                <div className="container">
                    <div className="row">
                        <Menu/>
                    </div>
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            );
        }else{
            return (
                <ProgressBar active now={100}/>
            );
        }

    }

}

// export the connected class
function mapStateToProps(state) {
    return {
        users: state.users.list || [],
    };
}

export default connect(mapStateToProps)(App);