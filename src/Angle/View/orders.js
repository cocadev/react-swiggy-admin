import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentHeaderButtons from "../../components/contentHead/contentHeaderButtons";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import connect from "react-redux/es/connect/connect";
import { Card, CardBody, Row, Col } from "reactstrap";
import { FilePlus } from "react-feather";
import { bindActionCreators } from "redux";
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import * as orderAction from "../../redux/actions/orderAction";
import  MainCheckBoxTable  from "../Table/mainCheckBoxTable"
import { Modal, ModalHeader } from "reactstrap";
import InvoiceForm from "../Form/deliverySearchForm";
import {ORDERS_COLUMN, ORDERS_DATA} from "../../config";
import UtilService from "../../utils";

class LazyOrders extends Component {

    constructor(){
        super();
        this.state={
            modal:false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Col md="8">
                        <ContentHeader></ContentHeader>
                        <ContentSubHeader>
                            <div className="btn btn-primary ml-2" >
                                Copy
                            </div>
                            <div className="btn btn-primary ml-2" >
                                CSV
                            </div>
                            <div className="btn btn-primary ml-2" >
                                Excel
                            </div>
                            <div className="btn btn-primary ml-2" >
                                Print
                            </div>
                            <div className="btn btn-primary ml-2" >
                                PDF
                            </div>
                        </ContentSubHeader>
                    </Col>
                    <Col md="4">
                        <ContentHeaderButtons className="content-header-btn">
                            <div className="btn btn-primary" onClick={this.toggle}>
                                <FilePlus size={16} color="#FFF" />
                                {" "} Create Invoice
                            </div>

                        </ContentHeaderButtons>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                               <MainCheckBoxTable type={'orders'} data={UtilService.getData(ORDERS_DATA)} columns = { ORDERS_COLUMN }/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <ModalHeader toggle={this.toggle}>Create Invoice</ModalHeader>
                    <InvoiceForm />
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ order }) => ({ order });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...orderAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(LazyOrders);

