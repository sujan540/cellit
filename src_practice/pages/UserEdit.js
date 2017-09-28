import React from 'react';
import {PageHeader, Form, FormGroup, Col, Button, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

class UserEdit extends React.Component {

    form_type;

    constructor(props) {
        super(props);
        this.form_type = (props.initialValues.id > 0) ? 'edit' : 'add';
    }

    render() {
        return (
            <div>
                <PageHeader>{'edit' === this.form_type ? 'Edit' : 'Add'}</PageHeader>
                <Form horizontal>
                    <Field name="username" component={UserEdit.renderUsername}/>
                    <Field name="job" component={UserEdit.renderJob}/>
                    <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Button type="submit">Save User</Button>
                        </Col>
                    </FormGroup>


                </Form>
            </div>
        );
    }

    static renderUsername(props) {
        return (
            <FormGroup>
                <Col sm={2}>Username</Col>
                <Col sm={8}>
                    <FormControl {...props.input} id="username" type="text"
                                 placeholder="Username"/>
                </Col>
            </FormGroup>
        )
    }

    static renderJob(props) {
        return (
            <FormGroup>
                <Col sm={2}>Job</Col>
                <Col sm={8}>
                    <InputGroup>
                        <FormControl {...props.input} id="job" type="text"
                                     placeholder="Job"/>
                        <InputGroup.Addon>
                            <Glyphicon glyph="briefcase"/>
                        </InputGroup.Addon>
                    </InputGroup>
                </Col>
            </FormGroup>
        )
    }
}


//decorate the form component
UserEdit = reduxForm({
    form: 'user_edit'
})(UserEdit);

function mapStateToProps(state, own_props) {
    let form_data = {
        id: 0,
        username: '',
        job: ''
    };

    for (const user of state.users.list) {
        if (user.id === Number(own_props.params.id)) {
            form_data = user;
            break;
        }
    }
    return {
        initialValues: form_data
    };
}

export default connect(mapStateToProps)(UserEdit);