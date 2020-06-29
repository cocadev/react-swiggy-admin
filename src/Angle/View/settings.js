import React, { Component, Fragment } from "react";
import { Card, CardBody, Row, Col, Form, FormGroup, Label, Modal, ModalHeader } from "reactstrap";
import ContentHeader from "../../components/contentHead/contentHeader";
import SettingCustomerForm from "../Form/settingCustomerForm";
import SettingBankForm from "../Form/settingBankForm";
import SettingTermsForm from "../Form/settingTermsForm";
import SettingNotificationForm from "../Form/settingNotificationForm";
import Logo from "../../assets/img/logos/logo.png";

class Settings extends Component {

    constructor(){
        super();
        this.state={
            modalCustomer:false,
            modalBank:false,
            modalTerms:false,
            modalNotification:false,
        };
        this.togglemodalCustomer = this.togglemodalCustomer.bind(this);
        this.togglemodalBank = this.togglemodalBank.bind(this);
        this.togglemodalTerms = this.togglemodalTerms.bind(this);
        this.togglemodalNotification = this.togglemodalNotification.bind(this);
    }

    togglemodalCustomer() {
        this.setState({
            modalCustomer: !this.state.modalCustomer
        });
    }

    togglemodalBank() {
        this.setState({
            modalBank: !this.state.modalBank
        });
    }

    togglemodalTerms() {
        this.setState({
            modalTerms: !this.state.modalTerms
        });
    }

    togglemodalNotification() {
        this.setState({
            modalNotification: !this.state.modalNotification
        });
    }

    render() {
        return (
            <Fragment>
                <ContentHeader>Settings</ContentHeader>

                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <div className="px-3">
                                    <Form className="form-horizontal">
                                        <div className="form-body">

                                            <div className='position-relative'>
                                                <h4 className="form-section"> Customer Informations</h4>
                                                <h6 className='settings-edit' onClick={this.togglemodalCustomer}>Edit</h6>
                                            </div>

                                            <img src={Logo} className='detail-img' alt={''}/>

                                            <Row>
                                                <Col md="6">
                                                    <FormGroup row>
                                                        <Label for="userinput2" sm={3} className='w-label'>Company Name:</Label>
                                                        <h4>OrderAngle OA</h4>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup row>
                                                        <Label for="userinput2" sm={3} className='w-label'>Address:</Label>
                                                        <h4>musterstreet 2</h4>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup row>
                                                        <Label for="userinput3" sm={3}>E-mail:</Label>
                                                        <h4>Contact@example.com</h4>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup row>
                                                        <Label for="userinput3" sm={3}>Postal Code:</Label>
                                                        <h4>33432</h4>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup row>
                                                        <Label for="userinput3" sm={3}>Phone:</Label>
                                                        <h4>012321372819321</h4>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup row>
                                                        <Label for="userinput3" sm={3}>City:</Label>
                                                        <h4>Hamburg</h4>
                                                    </FormGroup>
                                                </Col>
                                            </Row>


                                            <div className='position-relative'>
                                                <h4 className="form-section">Bank Informations</h4>
                                                <h6 className='settings-edit' onClick={this.togglemodalBank}>Edit</h6>
                                            </div>

                                            <Row>
                                                <Col md="6">
                                                    <FormGroup row>
                                                        <Label for="userinput3" sm={3}>Bank Name:</Label>
                                                        <h4>ABC Bank</h4>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup row>
                                                        <Label for="userinput3" sm={3}>Acc Name:</Label>
                                                        <h4>Bank Holder</h4>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup row>
                                                        <Label for="userinput3" sm={3}>IBAN:</Label>
                                                        <h4>**************766</h4>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup row>
                                                        <Label for="userinput3" sm={3}>BIC:</Label>
                                                        <h4>HASPDXXX</h4>
                                                    </FormGroup>
                                                </Col>
                                            </Row>  <Row>
                                        </Row>

                                        </div>

                                        <div className='position-relative'>
                                            <h4 className="form-section">Terms of Conditions</h4>
                                            <h6 className='settings-edit' onClick={this.togglemodalTerms}>Edit</h6>
                                        </div>

                                        <div className='position-relative'>
                                            <h4 className="form-section">Notification</h4>
                                            <h6 className='settings-edit' onClick={this.togglemodalNotification}>Edit</h6>
                                        </div>

                                    </Form>

                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modalCustomer} toggle={this.togglemodalCustomer} size="lg">
                    <ModalHeader toggle={this.togglemodalCustomer}>Customer Informations</ModalHeader>
                    <SettingCustomerForm />
                </Modal>
                <Modal isOpen={this.state.modalBank} toggle={this.togglemodalBank} size="lg">
                    <ModalHeader toggle={this.togglemodalBank}>Bank Informations</ModalHeader>
                    <SettingBankForm />
                </Modal>
                <Modal isOpen={this.state.modalTerms} toggle={this.togglemodalTerms} size="lg">
                    <ModalHeader toggle={this.togglemodalTerms}>Terms of Condition (TOC)</ModalHeader>
                    <SettingTermsForm />
                </Modal>
                <Modal isOpen={this.state.modalNotification} toggle={this.togglemodalNotification} size="lg">
                    <ModalHeader toggle={this.togglemodalNotification}>Notification</ModalHeader>
                    <SettingNotificationForm />
                </Modal>
            </Fragment>
        );
    }
}

export default Settings;
