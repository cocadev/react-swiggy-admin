import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { noUser} from "../../config";
import {bindActionCreators} from "redux";
import * as orderAction from "../../redux/actions/orderAction";
import * as clientAction from "../../redux/actions/clientAction";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Dropzone from "react-dropzone";

class CreateDeliveryPeopleForm extends Component {

    constructor(){
        super();
        this.state={
            startDate: new Date(),
            endDate: new Date(),
            selectedType1:'',
            selectedType2:'',
            files:noUser,
            options:[]
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    onDrop = files => {
        this.setState({
            files: files[0].preview
        });
    };

    componentDidMount(){
        this.setState({
            options: this.props.client.clients,
        })
    }

    handleTypeOneChange = (selectedType1) => {
        this.setState({ selectedType1 });
    };
    handleTypeTwoChange = (selectedType2) => {
        this.setState({ selectedType2 });
    };

    handleChange1(date) {
        this.setState({
            startDate: date
        });
    }
    handleChange2(date) {
        this.setState({
            endDate: date
        });
    }

    render() {
        let { limit, discount, code, coupon, image,selectedType2  } = this.state;
        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        // let id = this.props.order.orders.length + 1;
                        // let data = {
                        //     id:id,
                        //     date: this.state.startDate.toISOString().substring(0,10),
                        //     clientId: selectedClient.id ? selectedClient.id : '',
                        //     status: selectedStatus.value ? selectedStatus.value : '',
                        //     delivery_address: selectedClient.address ? selectedClient.address : ''
                        // };
                        //
                        // if ( selectedClient === '' || selectedStatus === ''){
                        //     return false
                        // }
                        // this.props.actions.createOrder(data);
                        // this.setState({ selectedClient:'', selectedStatus:''});
                    }}
                >

                    <ModalBody>
                        <Row>
                            <Col md={6}>
                                <Dropzone onDrop={this.onDrop.bind(this)} className='detail-img w-100 mt-3 mb-3'>
                                    <center><img src={this.state.files} className='detail-img' alt={''}/></center>
                                </Dropzone>
                            </Col>
                            <Col md={6} className='mt-3'>
                                <FormGroup>
                                    <Label for="code">Name</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="code"
                                        id="code"
                                        ref={node => (code = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="discount">Email Address</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="discount"
                                        id="discount"
                                        ref={node => (discount = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="coupon">Password</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="coupon"
                                        id="coupon"
                                        ref={node => (coupon = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="limit">Confirm Password</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="limit"
                                        id="limit"
                                        ref={node => (limit = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="coupon">address</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="coupon"
                                        id="coupon"
                                        ref={node => (coupon = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="coupon">Country Code</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="coupon"
                                        id="coupon"
                                        ref={node => (coupon = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="coupon">Phone Number</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="coupon"
                                        id="coupon"
                                        ref={node => (coupon = node)}
                                    />
                                </FormGroup>
                            </Col>

                        </Row>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="danger" type="submit">
                            Cancel
                        </Button>
                        <Button color="primary" type="submit">
                            Save
                        </Button>
                    </ModalFooter>
                </Form>
            </React.Fragment>);
    };
}

const mapStateToProps = ({ order, client }) => ({ order, client });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...orderAction, ...clientAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateDeliveryPeopleForm);

