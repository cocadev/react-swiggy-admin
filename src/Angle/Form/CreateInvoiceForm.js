import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import Select from "react-select";
import { STATUS } from "../../config";
import {bindActionCreators} from "redux";
import * as orderAction from "../../redux/actions/orderAction";
import * as clientAction from "../../redux/actions/clientAction";
import DateRangePicker from "react-bootstrap-daterangepicker";
import * as Icon from "react-feather";

class CreateInvoiceForm extends Component {

    constructor(){
        super();
        this.state={
            dateRange:'',
            selectedClient: '',
            selectedStatus: '',
            options:[]
        };
        this.handleAppy = this.handleAppy.bind(this);
    }

    componentDidMount(){
        this.setState({
            options: this.props.client.clients,
        })
    }

    handleClientChange = (selectedClient) => {
        this.setState({ selectedClient });
    };

    handleStatusChange = (selectedStatus) => {
        this.setState({ selectedStatus });
    };

    handleAppy(event, picker){
        this.setState({
            dateRange: picker.startDate.format('D/MM/YYYY') + " - " + picker.endDate.format('D/MM/YYYY')
        })
    }

    render() {
        let  client, status;
        let { selectedClient, selectedStatus, options } = this.state;
        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        let id = this.props.order.orders.length + 1;
                        let data = {
                            id:id,
                            date: this.state.dateRange,
                            clientId: selectedClient.id ? selectedClient.id : '',
                            status: selectedStatus.value ? selectedStatus.value : '',
                            delivery_address: selectedClient.address ? selectedClient.address : ''
                        };

                        if (this.state.dateRange === '' || selectedClient.value === '' || selectedStatus.value === ''){ return false }
                        this.props.actions.createOrder(data);
                        this.setState({dateRange:'', selectedClient:'', selectedStatus:''});
                    }}
                >

                    <ModalBody>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="client">Client</Label>
                                    <Select
                                        getOptionLabel={option => option.firstname}
                                        getOptionValue={option => option.firstname}
                                        classNamePrefix="select"
                                        value={selectedClient}
                                        id="client"
                                        name="client"
                                        onChange={this.handleClientChange}
                                        options={options}
                                        ref={node => (client = node)}
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
                                        ref={node => (status = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <div className="position-relative ">
                                        <Label for="date">Date</Label>
                                        <div className="pl-4 pt-1 rounded date-picker">
                                            <span className='font-small-3'>{this.state.dateRange}</span>
                                        </div>
                                        <div className="position-absolute icon-position-modal">
                                            <DateRangePicker onApply={this.handleAppy} className='float-right'>
                                                <Icon.Calendar size={20} strokeWidth="1.3" color="#0CC27E" />
                                            </DateRangePicker>
                                        </div>
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" type="submit">
                            + Create
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
export default connect(mapStateToProps, mapDispatchToProps)(CreateInvoiceForm);

