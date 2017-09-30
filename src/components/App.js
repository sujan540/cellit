import React from 'react';

import Welcome from './Welcome';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 1
        }
        this.update = this.update.bind(this);
        this.writeToScreen = this.writeToScreen.bind(this);
    }

    //This is not used in ES6 this.state = {} is used
    // getInitialState() {
    //     return {id: 1};
    // }

    update() {
        let index = this.state.id;
        this.writeToScreen('Updating Props', 'primary');
        this.setState({
            id: index + 1
        });
    }

    render() {
        return (
            <div>
                <hr/>
                <Welcome bar={this.state.id} writeToScreen={this.writeToScreen}/>
                <hr />
                <button type="button" className="btn btn-primary"
                        onClick={this.update}>
                    Update Props
                </button>
            </div>
        );
    }

    writeToScreen(msg, level) {
        var elem = document.getElementById('screen');
        elem.innerHTML += '<div class="log bg-' + level + '">' +
            '<span class="glyphicon glyphicon-ok"></span> &nbsp;&nbsp;' +
            msg +
            '</div>';
    }


}

