import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentHeaderButtons from "../../components/contentHead/contentHeaderButtons";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import UtilService from '../../utils'
import { Card, CardBody, Row, Col, Modal, ModalHeader } from "reactstrap";
import { FilePlus } from "react-feather";
import  MainCheckBoxTable  from "../Table/mainCheckBoxTable"
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import {RESTAURANT_COLUMN, RESTAURANT_DATA} from "../../config";
import RestaurantForm from "../Form/restaurantForm";

class Restaurant extends Component {

    constructor(){
        super();
        this.state={
            modal:false
        };
        this.toggle = this.toggle.bind(this)
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
                        <ContentHeader>Restaurant</ContentHeader>
                        <ContentSubHeader>
                            Test
                        </ContentSubHeader>
                    </Col>
                    <Col md="4">
                        <ContentHeaderButtons className="content-header-btn">
                            <div className="btn btn-primary" onClick={this.toggle}>
                                <FilePlus size={16} color="#FFF" />
                                {" "} Add Restaurant
                            </div>
                        </ContentHeaderButtons>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <MainCheckBoxTable type={'clients'} data={UtilService.getData(RESTAURANT_DATA)} columns={ RESTAURANT_COLUMN }/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <ModalHeader toggle={this.toggle}>Create Shop</ModalHeader>
                    <RestaurantForm/>
                </Modal>
            </Fragment>
        );
    }
}

export default Restaurant
