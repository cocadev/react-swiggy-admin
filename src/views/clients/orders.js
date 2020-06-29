import React from "react";
import { Col, Row, FormGroup, Input } from "reactstrap";
import ReactTable from "react-table";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import * as Icon from "react-feather";
import { Search } from "react-feather";
import {Redirect} from "react-router-dom";

class Orders extends React.Component {
    constructor() {
        super();
        this.state = {
            dateRange: "Date Filter",
            redirect:false
        };
        this.handleAppy = this.handleAppy.bind(this);
    }

    handleAppy(event, picker){
        this.setState({
            dateRange: picker.startDate.format('D/MM/YYYY') + " - " + picker.endDate.format('D/MM/YYYY')
        })
    }

    renderRedirect = () => {
        let path = '/'+ this.props.type +'/orders/' + this.state.num;
        if (this.state.redirect) {
            return <Redirect to={path} />
        }
    };

    onRowClick = (state, rowInfo) => {return {
        onClick: e => {
            this.setState({redirect:true, path : '/orders/invoice/' + rowInfo.original.id})
        }
    }
    };

    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.path} />
        }
        return (
            <div>
                {this.state.path}
                <Row className="row-eq-height">
                    <Col sm="12" md="6" xl="3">
                        <FormGroup>
                            <div className="position-relative ">
                                <Input className=" pl-4 round" type="text" id="iconLeft" name="iconLeft" placeholder='Search'/>
                                <div className="position-absolute icon-position">
                                    <Search size={20} className="info" />
                                </div>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="6" xl="3">
                        <FormGroup>
                            <div className="position-relative ">
                                <div className="pl-4 pt-1 rounded date-picker">
                                    {this.state.dateRange}
                                </div>
                                <div className="position-absolute icon-position">
                                    <DateRangePicker onApply={this.handleAppy} className='float-right'>
                                        <Icon.Calendar size={20} strokeWidth="1.3" color="#0CC27E" />
                                    </DateRangePicker>
                                </div>
                            </div>
                        </FormGroup>

                    </Col>
                </Row>

                <ReactTable
                    data={this.props.data}
                    columns={[
                        {
                            Header: "Orders",
                            columns: [
                                {
                                    Header: "Invoice ID",
                                    accessor: "id"
                                },
                                {
                                    Header: "Date",
                                    accessor: "date"
                                },
                                {
                                    Header: "Status",
                                    accessor: "status"
                                },
                                {
                                    Header: "Delivery Address",
                                    accessor: "delivery_address",
                                }
                            ]
                        },
                    ]}
                    getTrProps={this.onRowClick}
                    defaultSorted={[
                        {
                            id: "age",
                            desc: true
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                {this.renderRedirect()}
                <br />
            </div>
        );
    }
}

export default Orders;

