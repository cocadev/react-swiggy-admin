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
import * as clientAction from "../../redux/actions/clientAction";
import CreateClientForm from "../../Angle/Form/ClientForm";
import {CLIENTS_COLUMN, CLIENTS_DATA} from "../../config";

class LazyClients extends Component {

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
                        <ContentHeader>Clients</ContentHeader>
                        <ContentSubHeader>
                            Test
                        </ContentSubHeader>
                    </Col>
                    <Col md="4">
                        <ContentHeaderButtons className="content-header-btn">
                            <div className="btn btn-primary" onClick={this.toggle}>
                                <FilePlus size={16} color="#FFF" />
                                {" "} New Client
                            </div>
                        </ContentHeaderButtons>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <MainCheckBoxTable type={'clients'} data={UtilService.getData(CLIENTS_DATA)} columns={ CLIENTS_COLUMN }/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <ModalHeader toggle={this.toggle}>New Client</ModalHeader>
                    <CreateClientForm />
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ client }) => ({ client });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...clientAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(LazyClients);

