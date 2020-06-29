import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import Select from "react-select";
import {COUNTRY, CITY } from "../../config";
import {bindActionCreators} from "redux";
import * as clientAction from "../../redux/actions/clientAction";
import UtilService from "../../utils";
import { Redirect } from 'react-router'
import Logo from "../../assets/img/logos/logo.png";
import Dropzone from "react-dropzone";

class SettingCustomerForm extends Component {

    state = {
        selectedCountry: '',
        selectedCity: '',
        files:Logo,
        redirect:false
    };

    onDrop = files => {
        this.setState({
            files: files[0].preview
        });
    };

    componentDidMount(){
        this.setState({
            selectedCountry: UtilService.filterParam(this.props.selectedClient, COUNTRY),
            selectedCity: UtilService.filterParam(this.props.selectedClient, CITY)
        });
    }

    handleCountryChange = (selectedCountry) => {
        this.setState({ selectedCountry });
    };

    handleCityChange = (selectedCity) => {
        this.setState({ selectedCity });
    };

    render() {

        let  firstname,lastname,company, tax,phone,email,address,postal;
        let { selectedCountry, selectedCity, files } = this.state;
        let { selectedClient } = this.props;

        if(this.state.redirect){
            return (<Redirect to='/clients'/>)
        }

        console.log('files ', files);

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
                            address: address.value,
                            postal: postal.value,
                            country: selectedCountry.value ? selectedCountry.value : '',
                            city: selectedCity.value ? selectedCity.value : ''
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
                        address.value = '';
                        postal.value = '';
                        this.setState({selectedCountry:''});
                        this.setState({selectedCity:''});
                    }}
                >

                    <ModalBody>
                        <Dropzone onDrop={this.onDrop.bind(this)} className='detail-img'>
                            <img src={files} className='detail-img' alt={''}/>
                        </Dropzone>

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="firstName">Company Name</Label>
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
                                    <Label for="lastname">Company Address</Label>
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
                                    <Label for="company">E-Mail</Label>
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
                                    <Label for="address">Postal-Code</Label>
                                    <input
                                        defaultValue={selectedClient?selectedClient.address:''}
                                        className="form-control"
                                        type="text"
                                        name="address"
                                        id="address"
                                        ref={node => (address = node)}
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
                                    <Label for="email">Fax</Label>
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
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="tax">Tax-Number</Label>
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
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="postal">Tax-Office</Label>
                                    <input
                                        defaultValue={selectedClient?selectedClient.postal:''}
                                        className="form-control"
                                        type="textarea"
                                        name="postal"
                                        id="postal"
                                        ref={node => (postal = node)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="country">Country</Label>
                                    <Select
                                        classNamePrefix="select"
                                        id="country"
                                        name="country"
                                        value={selectedCountry}
                                        onChange={this.handleCountryChange}
                                        options={COUNTRY}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <Select
                                        classNamePrefix="select"
                                        value={selectedCity}
                                        id="city"
                                        name="city"
                                        onChange={this.handleCityChange}
                                        options={selectedCountry?CITY:[]}
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
export default connect(mapStateToProps, mapDispatchToProps)(SettingCustomerForm);

