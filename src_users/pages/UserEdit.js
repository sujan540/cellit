import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form, FormGroup, Col,Button, FormControl, HelpBlock, InputGroup, Glyphicon } from "react-bootstrap";
import {goBack} from 'react-router-redux';


// User add/edit page component
export class UserEdit extends React.Component {
    // constructor
    constructor(props) {
        super(props);

        // bind <this> to the event method
        this.formSubmit = this.formSubmit.bind(this);
    }

    // render
    render() {
        const {user, handleSubmit, error, invalid, submitting} = this.props;
        return (
            <div className="page-user-edit">
                <PageHeader>{'User ' + (user.id ? 'edit' : 'add')}</PageHeader>

                <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
                    <Field name="username" component={UserEdit.renderUsername}/>
                    <Field name="job" component={UserEdit.renderJob}/>
                    <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Button type="submit"
                                    disabled={this.props.invalid || this.props.submitting}>
                                Save User
                            </Button>
                        </Col>
                    </FormGroup>


                </Form>
            </div>
        );
    }

    static renderUsername(props) {
        return (
            <FormGroup validationState={!props.meta.touched ? null :
                (props.meta.error ? 'error' : 'success')}>
                <Col sm={2}>Username</Col>
                <Col sm={8}>
                    <FormControl {...props.input} id="username" type="text"
                                 placeholder="Username"/>
                    {/*<FormControl.FeedBack/>*/}
                    <HelpBlock>{props.meta.touched && props.meta.error ?
                        props.meta.error : null}</HelpBlock>
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

    // submit the form
    formSubmit(values) {
        const {dispatch} = this.props;
        return new Promise((resolve, reject) => {
            dispatch({
                type: 'USERS_ADD_EDIT',
                user: {
                    id: values.id || 0,
                    username: values.username,
                    job: values.job,
                },
                callbackError: (error) => {
                    reject(new SubmissionError({_error: error}));
                },
                callbackSuccess: () => {
                    this.props.dispatch(goBack());
                }
            });
        });
    }
}

// decorate the form component
const UserEditForm = reduxForm({
    form: 'user_edit',
    validate: function (values) {
        const errors = {};
        if (!values.username) {
            errors.username = 'Username is required';
        }
        return errors;
    },
})(UserEdit);

// export the connected class
function mapStateToProps(state, own_props) {
    let form_data = {
        id: 0,
        username: '',
        job: ''
    };

    for (const user of state.users) {
        if (user.id === Number(own_props.params.id)) {
            form_data = user;
            break;
        }
    }
    return {
        initialValues: form_data,
        user: form_data
    };
}
export default connect(mapStateToProps)(UserEditForm);
