import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import {COUNTRY, CITY } from "../../config";
import {bindActionCreators} from "redux";
import * as clientAction from "../../redux/actions/clientAction";
import UtilService from "../../utils";
import { Redirect } from 'react-router'

class ClientForm extends Component {

    state = {
        selectedCountry: '',
        selectedCity: '',
        redirect:false
    };

    componentDidMount(){
        this.setState({
            selectedCountry: UtilService.filterParam(this.props.selectedClient, COUNTRY),
            selectedCity: UtilService.filterParam(this.props.selectedClient, CITY)
        });
    }

    render() {

        let  firstname,lastname,company, tax,phone,email;
        let { selectedClient } = this.props;

        if(this.state.redirect){
            return (<Redirect to='/clients'/>)
        }

        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!firstname.value.trim() || !phone.value.trim() || !email.value.trim()) {
                            return;
                        }
                        let id = selectedClient ? this.props.client.clients.length : this.props.client.clients.length + 1;
                        let data = {
                            id:id,
                            firstname: firstname.value,
                            lastname: lastname.value,
                            tax: tax.value,
                            company: company.value,
                            email: email.value,
                            phone: phone.value,
                        };
                            if(selectedClient){
                                this.props.actions.updateClient(data);
                                this.setState({redirect:true})
                            } else {
                                this.props.actions.createClient(data);
                            }

                            firstname.value = '';
                            lastname.value = '';
                            tax.value = '';
                            company.value = '';
                            email.value = '';
                            phone.value = '';
                    }}
                >

                    <ModalBody>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <input
                                        defaultValue={selectedClient?selectedClient.firstname:''}
                                        className="form-control"
                                        type="text"
                                        name="firstname"
                                        id="firstName"
                                        ref={node => (firstname = node)}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="lastname">Last Name</Label>
                                    <input
                                        defaultValue={selectedClient?selectedClient.lastname:''}
                                        className="form-control"
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        ref={node => (lastname = node)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="company">Company</Label>
                                    <input
                                        defaultValue={selectedClient?selectedClient.company:''}
                                        className="form-control"
                                        type="text"
                                        name="company"
                                        id="company"
                                        ref={node => (company = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="tax">Tax Number</Label>
                                    <input
                                        defaultValue={selectedClient?selectedClient.tax:''}
                                        className="form-control"
                                        type="tax"
                                        name="tax"
                                        id="tax"
                                        ref={node => (tax = node)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <input
                                        defaultValue={selectedClient?selectedClient.phone:''}
                                        className="form-control"
                                        type="phone"
                                        name="phone"
                                        id="phone"
                                        ref={node => (phone = node)}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <input
                                        defaultValue={selectedClient?selectedClient.email:''}
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        id="email"
                                        ref={node => (email = node)}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" type="submit">
                            {'+ Save'}
                        </Button>
                    </ModalFooter>
                </Form>
            </React.Fragment>);
    };
}

const mapStateToProps = ({ client }) => ({ client });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...clientAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);

