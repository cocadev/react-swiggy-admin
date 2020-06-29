import React, { Fragment, Component } from "react";
import { Row, Col, Table, Card, CardBody, Modal, ModalHeader } from "reactstrap";
import {bindActionCreators} from "redux";
import * as orderAction from "../../../redux/actions/orderAction";
import connect from "react-redux/es/connect/connect";
import {Download, FilePlus} from "react-feather";
import AddInvoiceProductForm from "../../Form/addInvoiceProductForm";

class LazyOrderProfile extends Component {

    constructor(){
        super();
        this.state={
            product:[],
            modal:false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    pushData(data){
        var joined = this.state.product.concat(data);
        this.setState({ product: joined })    }

    render() {
        return (
            <Fragment>

                <div className="btn btn-primary right-float" onClick={this.toggle}>
                    <FilePlus size={16} color="#FFF" />
                    {" "} Add Product
                </div>
                <button className="btn btn-secondary right-float mr-3">
                    <Download size="16" /> Export
                </button>
                <div className="invoice-template clear-both">
                    <Card>
                        <CardBody className="p-3">
                            <div id="invoice-template">
                                <Row id="invoice-company-details">
                                    <Col xs="6" className="text-left">
                                        <ul className="px-0 list-unstyled">
                                            <li className="text-bold-800">Pixinvent Creative Studio</li>
                                            <li>4025 Oak Avenue,</li>
                                            <li>Melbourne,</li>
                                            <li>Florida 32940,</li>
                                            <li>USA</li>
                                        </ul>
                                    </Col>
                                    <Col xs="6" className="text-right">
                                        <h2>INVOICE</h2>
                                        <p className="pb-3"># INV-001001</p>
                                        <ul className="px-0 list-unstyled">
                                            <li>Balance Due</li>
                                            <li className="lead text-bold-800">$ 12,000.00</li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row id="invoice-customer-details" className="pt-2">
                                    <Col xs="12" className="text-left">
                                        <p className="text-muted">Bill To</p>
                                    </Col>
                                    <Col xs="6" className="text-left">
                                        <ul className="px-0 list-unstyled">
                                            <li className="text-bold-800">Mr. Bret Lezama</li>
                                            <li>4879 Westfall Avenue,</li>
                                            <li>Albuquerque,</li>
                                            <li>New Mexico-87102.</li>
                                        </ul>
                                    </Col>
                                    <Col className="text-right">
                                        <p>
                                            <span className="text-muted">Invoice Date :</span> 06/05/2016
                                        </p>
                                        <p>
                                            <span className="text-muted">Terms :</span> Due on Receipt
                                        </p>
                                        <p>
                                            <span className="text-muted">Due Date :</span> 10/05/2016
                                        </p>
                                    </Col>
                                </Row>

                                <Row id="invoice-items-details" className="pt-2">
                                    <Col xs="12" className="table-responsive">
                                        <Table>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Item &amp; Description</th>
                                                <th className="text-right">Rate</th>
                                                <th className="text-right">Hours</th>
                                                <th className="text-right">Amount</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.product.map((item, index)=>(
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>
                                                            <p>{item.product}</p>
                                                            <p className="text-muted">
                                                                {item.description ? item.description : item.short_description}
                                                            </p>
                                                        </td>
                                                        <td className="text-right">$ {item.rate} .00/hr</td>
                                                        <td className="text-right">{item.hours} .00</td>
                                                        <td className="text-right">$ {item.amount} .00</td>
                                                    </tr>
                                                ))
                                            }

                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="6" xs="12" className="text-left">

                                    </Col>
                                    <Col md="6" xs="12">
                                        <p className="lead">Total due</p>
                                        <div className="table-responsive">
                                            <Table>
                                                <tbody>
                                                <tr>
                                                    <td>Sub Total</td>
                                                    <td className="text-right">$ 14,900.00</td>
                                                </tr>
                                                <tr>
                                                    <td>TAX (12%)</td>
                                                    <td className="text-right">$ 1,788.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-bold-800">Total</td>
                                                    <td className="text-bold-800 text-right">$ 16,688.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Payment Made</td>
                                                    <td className="pink text-right">(-) $ 4,688.00</td>
                                                </tr>
                                                <tr className="bg-grey bg-lighten-4">
                                                    <td className="text-bold-800">Balance Due</td>
                                                    <td className="text-bold-800 text-right">$ 12,000.00</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                        <ModalHeader toggle={this.toggle}>Add Product</ModalHeader>
                        <AddInvoiceProductForm data={this.state.product} onHeaderClick={(data)=>this.pushData(data)}/>
                    </Modal>
                </div>
            </Fragment>
        );
    };
}

const mapStateToProps = ({ order }) => ({ order });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...orderAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(LazyOrderProfile);

