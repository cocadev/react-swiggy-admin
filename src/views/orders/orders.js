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
import OrdersContent from '../clients/orders'
import { Modal, ModalHeader } from "reactstrap";
import CreateInvoiceForm from "../../Angle/Form/CreateInvoiceForm";

class Orders extends Component {

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
                        <ContentHeader>Orders</ContentHeader>
                        <ContentSubHeader>
                            Test
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
                               <OrdersContent data={this.props.order.orders}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="md-2">
                    <ModalHeader toggle={this.toggle}>Create Invoice</ModalHeader>
                    <CreateInvoiceForm />
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ order }) => ({ order });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...orderAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Orders);

