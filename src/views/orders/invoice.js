import React, { Fragment } from "react";
import { Row, Col, Table, Card, CardBody } from "reactstrap";

const Invoice = props => {
    return (
        <Fragment>

            <div className="invoice-template">
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
                            <Row id="invoice-footer">
                                <Col md="9" xs="12">

                                </Col>
                                <Col md="3" xs="12" className="text-center">
                                    <button type="button" className="btn btn-primary btn-raised my-1">
                                        <i className="fa fa-paper-plane-o" /> Send Invoice
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Fragment>
    );
};

export default Invoice;
