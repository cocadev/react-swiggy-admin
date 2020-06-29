import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentHeaderButtons from "../../components/contentHead/contentHeaderButtons";
import connect from "react-redux/es/connect/connect";
import { Card, CardBody, Row, Col } from "reactstrap";
import { FilePlus } from "react-feather";
import { bindActionCreators } from "redux";
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import * as orderAction from "../../redux/actions/orderAction";
import { Modal, ModalHeader } from "reactstrap";
import Invoice from "./invoice";
import CreateInvoiceProductForm from "../../Angle/Form/CreateInvoiceProductForm";

class InvoiceOrder extends Component {

    constructor(){
        super();
        this.state={
            modal:false,
            dateRange: "Date Filter",
        };
        this.toggle = this.toggle.bind(this);
        this.handleAppy = this.handleAppy.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleAppy(event, picker){
        this.setState({
            dateRange: picker.startDate.format('D/MM/YYYY') + " - " + picker.endDate.format('D/MM/YYYY')
        })
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Col md="8">
                        <ContentHeader>Invoice</ContentHeader>
                    </Col>
                    <Col md="4">
                        <ContentHeaderButtons className="content-header-btn">
                            <div className="btn btn-primary" onClick={this.toggle}>
                                <FilePlus size={16} color="#FFF" />
                                {" "} Add Product
                            </div>
                        </ContentHeaderButtons>

                        <ContentHeaderButtons className="content-header-btn mr-3">
                            <div className="btn btn-primary" >
                                <FilePlus size={16} color="#FFF" />
                                {" "} Export
                            </div>
                        </ContentHeaderButtons>

                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <Invoice />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="md-2">
                    <ModalHeader toggle={this.toggle}>Add Product</ModalHeader>
                    <CreateInvoiceProductForm />
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ order }) => ({ order });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...orderAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceOrder);

