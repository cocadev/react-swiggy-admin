import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as categoryAction from "../../redux/actions/categoryAction";

class BankForm extends Component {

    render() {
        let iban, bank_name, bic, acc_name;
        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();

                        let data = {
                            iban: iban.value,
                            bank_name: bank_name.value,
                            bic: bic.value,
                            acc_name: acc_name.value,
                        };

                        console.log(' data', data );

                        iban.value = '';
                        bank_name.value = '';
                        bic.value = '';
                        acc_name.value = '';
                    }}
                >

                    <ModalBody>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="bank_name">Bank Name</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="bank_name"
                                        id="bank_name"
                                        ref={node => (bank_name = node)}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="iban">IBAN</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="iban"
                                        id="iban"
                                        ref={node => (iban = node)}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="bic">BIC</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="bic"
                                        id="bic"
                                        ref={node => (bic = node)}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="acc_name">ACC Name</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="acc_name"
                                        id="acc_name"
                                        ref={node => (acc_name = node)}
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

const mapStateToProps = ({ category }) => ({ category });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...categoryAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(BankForm);

