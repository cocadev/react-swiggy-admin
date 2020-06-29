import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentHeaderButtons from "../../components/contentHead/contentHeaderButtons";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import connect from "react-redux/es/connect/connect";
import UtilService from '../../utils'
import { Card, CardBody, Row, Col, Modal, ModalHeader } from "reactstrap";
import { FilePlus } from "react-feather";
import  MainCheckBoxTable  from "../Table/mainCheckBoxTable"
import { bindActionCreators } from "redux";
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import * as productAction from "../../redux/actions/productAction";
import {DELIVERIES_COLUMN, DELIVERIES_DATA, PRODUCTS_COLUMN} from "../../config";
import ProductForm from "../Form/ProductForm";

class CustomerProductsTableC extends Component {

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
                        <ContentHeader>Products</ContentHeader>
                        <ContentSubHeader>
                           Test
                        </ContentSubHeader>
                    </Col>
                    <Col md="4">
                        <ContentHeaderButtons className="content-header-btn">
                            <div className="btn btn-primary" onClick={this.toggle}>
                                <FilePlus size={16} color="#FFF" />
                                {" "} Search
                            </div>
                        </ContentHeaderButtons>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <MainCheckBoxTable type={'deliveries'} data={UtilService.getData(DELIVERIES_DATA)} columns={DELIVERIES_COLUMN}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <ModalHeader toggle={this.toggle}>Search</ModalHeader>
                    <ProductForm />
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ product }) => ({ product });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...productAction }, dispatch),
});
export const LazyProducts = connect(mapStateToProps, mapDispatchToProps)(CustomerProductsTableC);

