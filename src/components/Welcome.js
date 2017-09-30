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

    //This is not used in ES6 Welcome.propTypes is used
    // getDefaultProps() {
    //     writeToScreen('GetDefaultProps', 'info');
    //     return {
    //         bar: 2
    //     };
    // }

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
}

Welcome.propTypes = {
    bar: React.PropTypes.number.isRequired,
    writeToScreen: React.PropTypes.func.isRequired,
}
Welcome.defaultProps = {
    bar: 200,
}



// /var Welcome = React.createClass({
//     getInitialState: function() {
//         writeToScreen('GetInitialState', 'info');
//         return {foo : 1};
//     },
//
//     getDefaultProps: function() {
//         writeToScreen('GetDefaultProps', 'info');
//         return {bar: 2};
//     },
//
//     update: function() {
//         writeToScreen('Updating State', 'primary');
//         this.setState({foo: 2});
//     },
//
//     render: function() {
//         writeToScreen('Render', 'success');
//         return (<div>
//             This.state.foo: {this.state.foo} <br />
//             This.state.bar: {this.props.bar}
//             <br/>
//             <hr/>
//             <button className="btn btn-success"
//                     onClick={this.update}>
//                 Update State
//             </button>
//         </div>);
//     },
//
//     componentWillMount: function() {
//         writeToScreen('ComponentWillMount', 'warning');
//     },
//
//     componentDidMount: function() {
//         writeToScreen('ComponentDidMount', 'warning');
//     },
//
//     shouldComponentUpdate: function() {
//         writeToScreen('ShouldComponentUpdate', 'info');
//         return true;
//     },
//
//     componentWillReceiveProps: function(nextProps) {
//         writeToScreen('ComponentWillRecieveProps', 'warning');
//     },
//
//     componentWillUpdate: function() {
//         writeToScreen('ComponentWillUpdate', 'warning');
//     },
//
//     componentDidUpdate: function() {
//         writeToScreen('ComponentDidUpdate', 'warning');
//     },
//
//     componentWillUnmount: function() {
//         writeToScreen('componentWillUnmount', 'danger');
//     }
// });