// import React, {Component} from "react";
// import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
// import { connect } from "react-redux";
// import Select from "react-select";
// import {COUNTRY, CITY} from "../../config";
// import {bindActionCreators} from "redux";
// import * as clientAction from "../../redux/actions/clientAction";
//
// class AddClient extends Component {
//
//     state = {
//         selectedCountry: '',
//         selectedCity: '',
//     };
//
//     handleCountryChange = (selectedCountry) => {
//         this.setState({ selectedCountry });
//     };
//
//     handleCityChange = (selectedCity) => {
//         this.setState({ selectedCity });
//     };
//
//     render() {
//         let  firstname,lastname,company, tax,phone,email,address,postal,city, country;
//         let { selectedCountry, selectedCity } = this.state;
//         return (
//             <React.Fragment>
//                 <Form
//                     onSubmit={e => {
//                         e.preventDefault();
//                         if (!firstname.value.trim() || !phone.value.trim() || !email.value.trim()) {
//                             return;
//                         }
//                         let id = this.props.client.clients.length + 1;
//                         let data = {
//                             id:id,
//                             firstname: firstname.value,
//                             lastname: lastname.value,
//                             tax: tax.value,
//                             company: company.value,
//                             email: email.value,
//                             phone: phone.value,
//                             address: address.value,
//                             postal: postal.value,
//                             country: selectedCountry.value ? selectedCountry.value : '',
//                             city: selectedCity.value ? selectedCity.value : ''
//                         };
//                         this.props.actions.createClient(data);
//
//                         firstname.value = "";
//                         lastname.value = "";
//                         tax.value = "";
//                         company.value = "";
//                         email.value = "";
//                         phone.value = "";
//                         address.value = "";
//                         postal.value = "";
//                         country.value = "";
//                         city.value = "";
//                     }}
//                 >
//
//                     <ModalBody>
//                         <Row>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label for="firstName">First Name</Label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         name="firstname"
//                                         id="firstName"
//                                         ref={node => (firstname = node)}
//                                         required
//                                     />
//                                 </FormGroup>
//                             </Col>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label for="lastName">Last Name</Label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         name="lastname"
//                                         id="lastName"
//                                         ref={node => (lastname = node)}
//                                     />
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label for="company">Company</Label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         name="company"
//                                         id="company"
//                                         ref={node => (company = node)}
//                                     />
//                                 </FormGroup>
//                             </Col>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label for="address">Address</Label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         name="address"
//                                         id="address"
//                                         ref={node => (address = node)}
//                                     />
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label for="phone">Phone</Label>
//                                     <input
//                                         className="form-control"
//                                         type="phone"
//                                         name="phone"
//                                         id="phone"
//                                         ref={node => (phone = node)}
//                                         required
//                                     />
//                                 </FormGroup>
//                             </Col>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label for="email">Email</Label>
//                                     <input
//                                         className="form-control"
//                                         type="email"
//                                         name="email"
//                                         id="email"
//                                         ref={node => (email = node)}
//                                         required
//                                     />
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label for="tax">Tax Number</Label>
//                                     <input
//                                         className="form-control"
//                                         type="tax"
//                                         name="tax"
//                                         id="tax"
//                                         ref={node => (tax = node)}
//                                     />
//                                 </FormGroup>
//                             </Col>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label for="postal">Postal Code</Label>
//                                     <input
//                                         className="form-control"
//                                         type="textarea"
//                                         name="postal"
//                                         id="postal"
//                                         ref={node => (postal = node)}
//                                     />
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label for="country">Country</Label>
//                                     <Select
//                                         classNamePrefix="select"
//                                         id="country"
//                                         name="country"
//                                         value={selectedCountry}
//                                         onChange={this.handleCountryChange}
//                                         options={COUNTRY}
//                                         ref={node => (country = node)}
//                                     />
//                                 </FormGroup>
//                             </Col>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label for="city">City</Label>
//                                     <Select
//                                         classNamePrefix="select"
//                                         value={selectedCity}
//                                         id="city"
//                                         name="city"
//                                         onChange={this.handleCityChange}
//                                         options={selectedCountry?CITY:[]}
//                                         ref={node => (city = node)}
//                                     />
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                     </ModalBody>
//
//                     <ModalFooter>
//                         <Button color="primary" type="submit">
//                             Add Employer
//                         </Button>
//                     </ModalFooter>
//                 </Form>
//             </React.Fragment>);
//     };
// }
//
// const mapStateToProps = ({ client }) => ({ client });
// const mapDispatchToProps = (dispatch) => ({
//     actions: bindActionCreators({ ...clientAction }, dispatch),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(AddClient);
//
