import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { avatarlist, noUser } from '../../config'
import Select from "react-select";
import {COUNTRY, CITY} from "../../config";
import {bindActionCreators} from "redux";
import * as employeAction from "../../redux/actions/employAction";

class AddContactC extends Component {

    state = {
        selectedCountry: '',
        selectedCity: '',
    };

    handleCountryChange = (selectedCountry) => {
        this.setState({ selectedCountry });
    };

    handleCityChange = (selectedCity) => {
        this.setState({ selectedCity });
    };

    render() {
        let  firstname,lastname,position, password,phone,email,address,notes,img,city, country;
        let { selectedCountry, selectedCity } = this.state;
        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!firstname.value.trim() || !phone.value.trim() || !email.value.trim()) {
                            return;
                        }
                        let id = this.props.employe.employees.length;
                        let data = {
                            id:id,
                            firstname: firstname.value,
                            lastname: lastname.value,
                            password: password.value,
                            position: position.value,
                            email: email.value,
                            phone: phone.value,
                            address: address.value,
                            notes: notes.value,
                            img: img.src,
                            country: selectedCountry.value ? selectedCountry.value : '',
                            city: selectedCity.value ? selectedCity.value : ''
                        };
                        this.props.actions.createEmploye(data);

                        firstname.value = "";
                        lastname.value = "";
                        password.value = "";
                        position.value = "";
                        email.value = "";
                        phone.value = "";
                        address.value = "";
                        notes.value = "";
                        img.src = noUser;
                        country.value = "";
                        city.value = "";
                    }}
                >

                    <ModalBody>
                        <Row>
                            <Col md={6}>
                                <div className="card p-3" onDrop={(files) => {
                                    img.src = files[0].preview
                                }}>
                                    <img
                                        src={noUser}
                                        alt="no-user"
                                        ref={node => (img = node)}
                                        className="rounded-circle img-center"
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                {avatarlist.map((item) => (
                                    <img src={item.image} alt="no-avatar" key={item.id} className='avatar-list-image'
                                         onClick={() => {
                                             img.src = item.image
                                         }}/>
                                ))}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <input
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
                                    <Label for="lastName">Last Name</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="lastname"
                                        id="lastName"
                                        ref={node => (lastname = node)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="position">Position</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="position"
                                        id="position"
                                        ref={node => (position = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        id="password"
                                        ref={node => (password = node)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <input
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
                                    <Label for="address">Address</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="address"
                                        id="address"
                                        ref={node => (address = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="notes">Notes</Label>
                                    <input
                                        className="form-control"
                                        type="textarea"
                                        name="notes"
                                        id="notes"
                                        ref={node => (notes = node)}
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
                                        ref={node => (country = node)}
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
                                        ref={node => (city = node)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" type="submit">
                            + Save
                        </Button>
                    </ModalFooter>
                </Form>
            </React.Fragment>);
    };
}

const mapStateToProps = ({ employe }) => ({ employe });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...employeAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddContactC);

