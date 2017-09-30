import React from 'react';


export default class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.props.writeToScreen('GetInitialState', 'info');
        this.state = {
            foo: 1
        };
        this.update = this.update.bind(this);
    }

    render() {
        this.props.writeToScreen('Render', 'success');
        return (<div>
            This.state.foo: {this.state.foo} <br />
            This.state.bar: {this.props.bar}
            <br/>
            <hr/>
            <button className="btn btn-success"
                    onClick={this.update}>
                Update State
            </button>
        </div>);
    }

    update(){
        let index = this.state.foo;
        this.props.writeToScreen('Updating State', 'primary');
        this.setState({
            foo: index + 1
        });
    }

    componentWillMount() {
        this.props.writeToScreen('ComponentWillMount', 'warning');
    }

    componentDidMount() {
        this.props.writeToScreen('ComponentDidMount', 'warning');
    }

    shouldComponentUpdate() {
        this.props.writeToScreen('ShouldComponentUpdate', 'info');
        return true;
    }

    componentWillReceiveProps(nextProps) {
        this.props.writeToScreen('ComponentWillRecieveProps', 'warning');
    }

    componentWillUpdate() {
        this.props.writeToScreen('ComponentWillUpdate', 'warning');
    }

    componentDidUpdate() {
        this.props.writeToScreen('ComponentDidUpdate', 'warning');
    }

    componentWillUnmount() {
        this.props.writeToScreen('componentWillUnmount', 'danger');
    }
}

Welcome.propTypes = {
    bar: React.PropTypes.number.isRequired,
    writeToScreen: React.PropTypes.func.isRequired,
}
