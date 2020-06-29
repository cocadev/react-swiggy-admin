import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import Select from "react-select";
import {bindActionCreators} from "redux";
import * as productAction from "../../redux/actions/productAction";
import connect from "react-redux/es/connect/connect";

class AddInvoiceProductForm extends Component {

    state = {
        redirect:false,
        err:false,
        selectedProduct: '',
    };

    handleProductChange = (selectedProduct) => {
        this.setState({ selectedProduct });
    };

    render() {
        let  hours, rate, description, amount ;
        let { selectedProduct } = this.state;

        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();

                        let data = {
                            product: selectedProduct.product_name ? selectedProduct.product_name : '',
                            description: description.value,
                            hours: hours.value,
                            rate: rate.value,
                            amount: amount.value,
                            short_description : selectedProduct.short_description ? selectedProduct.short_description : '',
                        };

                        console.log('product data', data);

                        this.props.onHeaderClick(data);

                        description.value = '';
                        hours.value = '';
                        rate.value = '';
                        amount.value = '';
                        this.setState({selectedProduct:''});

                    }}
                >

                    <ModalBody>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="category_name">Product</Label>
                                    <Select
                                        getOptionLabel={option => option.product_name}
                                        getOptionValue={option => option.product_name}
                                        classNamePrefix="select"
                                        id="country"
                                        name="country"
                                        value={selectedProduct}
                                        onChange={this.handleProductChange}
                                        options={this.props.product.products}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <textarea
                                        className="form-control height-137"
                                        name="description"
                                        id="description"
                                        ref={node => (description = node)}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <Label for="category_number">Rate</Label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="rate"
                                        id="rate"
                                        ref={node => (rate = node)}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="hours">Hours</Label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="hours"
                                        id="hours"
                                        ref={node => (hours = node)}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="amount">Amount</Label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        ref={node => (amount = node)}
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

const mapStateToProps = ({ product }) => ({ product });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...productAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddInvoiceProductForm);

