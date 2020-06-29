import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import Select from "react-select";
import { UNIT } from "../../config";
import {bindActionCreators} from "redux";
import * as orderAction from "../../redux/actions/orderAction";
import * as clientAction from "../../redux/actions/clientAction";
import * as productAction from "../../redux/actions/productAction";

class CreateInvoiceProductForm extends Component {

    constructor(){
        super();
        this.state={
            dateRange:'',
            selectedProduct: '',
            selectedUnit: '',
            options:[]
        };
        this.handleAppy = this.handleAppy.bind(this);
    }

    componentDidMount(){
        this.setState({
            options: this.props.product.products,
        })
    }

    handleClientChange = (selectedProduct) => {
        this.setState({ selectedProduct });
    };

    handleStatusChange = (selectedUnit) => {
        this.setState({ selectedUnit });
    };

    handleAppy(event, picker){
        this.setState({
            dateRange: picker.startDate.format('D/MM/YYYY') + " - " + picker.endDate.format('D/MM/YYYY')
        })
    }

    render() {
        let quantity, product, unit;
        let { selectedProduct, selectedUnit, options } = this.state;
        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        let id = this.props.order.orders.length + 1;
                        let data = {
                            id:id,
                            date: this.state.dateRange,
                            product: selectedProduct.product_name ? selectedProduct.product_name : '',
                            quantity: selectedUnit.value ? selectedUnit.value : '',
                            // delivery_address: selectedClient.address ? selectedClient.address : ''
                        };

                        if ( selectedProduct.product_name === '' || selectedUnit.value === ''){ return false }
                        // this.props.actions.createOrder(data);
                        this.setState({dateRange:'', selectedClient:'', selectedStatus:''});
                    }}
                >

                    <ModalBody>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="product">Product</Label>
                                    <Select
                                        getOptionLabel={option => option.product_name}
                                        getOptionValue={option => option.product_name}
                                        classNamePrefix="select"
                                        value={selectedProduct}
                                        id="product"
                                        name="product"
                                        onChange={this.handleClientChange}
                                        options={options}
                                        ref={node => (product = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="unit">Unit</Label>
                                    <Select
                                        classNamePrefix="select"
                                        id="unit"
                                        name="unit"
                                        value={selectedUnit}
                                        onChange={this.handleStatusChange}
                                        options={UNIT}
                                        ref={node => (unit = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <div className="position-relative ">
                                        <Label for="quantity">Quantity</Label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="quantity"
                                            id="quantity"
                                            ref={node => (quantity = node)}
                                        />
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" type="submit">
                            + Add
                        </Button>
                    </ModalFooter>
                </Form>
            </React.Fragment>);
    };
}

const mapStateToProps = ({ order, client, product }) => ({ order, client, product });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...orderAction, ...clientAction, ...productAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateInvoiceProductForm);

