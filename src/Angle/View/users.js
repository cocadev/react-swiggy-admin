import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentHeaderButtons from "../../components/contentHead/contentHeaderButtons";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import UtilService from '../../utils'
import { Card, CardBody, Row, Col } from "reactstrap";
import  MainCheckBoxTable  from "../Table/mainCheckBoxTable"
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import {CLIENTS_COLUMN, CLIENTS_DATA} from "../../config";

class Users extends Component {

    render() {
        return (
            <Fragment>
                <Row>
                    <Col md="8">
                        <ContentHeader>Users</ContentHeader>
                        <ContentSubHeader>
                            Test
                        </ContentSubHeader>
                    </Col>
                    <Col md="4">
                        <ContentHeaderButtons className="content-header-btn">

                        </ContentHeaderButtons>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <MainCheckBoxTable type={'users'} data={UtilService.getData(CLIENTS_DATA)} columns={ CLIENTS_COLUMN }/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Fragment>
        );
    }
}

export default Users;

