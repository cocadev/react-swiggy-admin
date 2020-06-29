import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import Select from "react-select";
import {DELIVERYPEOPLE, PAYMENT, RESTAURANT, STATUS} from "../../config";
import {bindActionCreators} from "redux";
import * as orderAction from "../../redux/actions/orderAction";
import * as clientAction from "../../redux/actions/clientAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DeliverySearchForm extends Component {

    constructor(){
        super();
        this.state={
            startDate: new Date(),
            endDate: new Date(),
            selectedRestaurant: '',
            selectedDeliveryPeople: '',
            selectedPayment: '',
            selectedStatus: '',
            options:[]
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    componentDidMount(){
        this.setState({
            options: this.props.client.clients,
        })
    }

    handleRestaurantChange = (selectedRestaurant) => {
        this.setState({ selectedRestaurant });
    };
    handleDeliveryPeopleChange = (selectedDeliveryPeople) => {
        this.setState({ selectedDeliveryPeople });
    };
    handlePaymentChange = (selectedPayment) => {
        this.setState({ selectedPayment });
    };
    handleStatusChange = (selectedStatus) => {
        this.setState({ selectedStatus });
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
        let { selectedStatus, selectedDeliveryPeople, selectedPayment, selectedRestaurant, options } = this.state;
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
                                <FormGroup>
                                    <Label for="status">Restaurant</Label>
                                    <Select
                                        classNamePrefix="select"
                                        id="status"
                                        name="status"
                                        value={selectedRestaurant}
                                        onChange={this.handleRestaurantChange}
                                        options={RESTAURANT}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="status">Delivery People</Label>
                                    <Select
                                        classNamePrefix="select"
                                        id="status"
                                        name="status"
                                        value={selectedDeliveryPeople}
                                        onChange={this.handleDeliveryPeopleChange}
                                        options={DELIVERYPEOPLE}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="status">Status</Label>
                                    <Select
                                        classNamePrefix="select"
                                        id="status"
                                        name="status"
                                        value={selectedStatus}
                                        onChange={this.handleStatusChange}
                                        options={STATUS}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="status">Payment Method</Label>
                                    <Select
                                        classNamePrefix="select"
                                        id="status"
                                        name="status"
                                        value={selectedPayment}
                                        onChange={this.handlePaymentChange}
                                        options={PAYMENT}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <div className="">
                                        <Label for="date">End Date</Label>
                                        <br/>
                                        <DatePicker
                                            className="datepicker-icon"
                                            selected={this.state.startDate}
                                            onChange={this.handleChange1}
                                            minDate={new Date()}
                                        />
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <div className="">
                                        <Label for="date">End Date</Label>
                                        <br/>
                                        <DatePicker
                                            className="datepicker-icon"
                                            selected={this.state.endDate}
                                            onChange={this.handleChange2}
                                            minDate={new Date()}
                                        />
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" type="submit">
                            Search
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
export default connect(mapStateToProps, mapDispatchToProps)(DeliverySearchForm);

