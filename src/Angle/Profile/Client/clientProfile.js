import React, { Component, Fragment } from "react";
import { Card, CardBody, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import ContentHeader from "../../../components/contentHead/contentHeader";
import classnames from "classnames";
import connect from "react-redux/es/connect/connect";
import * as clientAction from "../../../redux/actions/clientAction";
import Orders from './orders'
import Prize from './prize'
import Address from './address'
import ChatForm from '../../Form/chatForm'
import ClientForm from "../../Form/ClientForm";
import UtilService from "../../../utils";

class LazyClientProfile extends Component {
    state = {
        activeTab: "5"
    };

    componentDidMount(){
        this.setState({
            activeTab:'1'
        })
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    render() {
        return (
            <Fragment>
                <Row>
                    <Col md="12">
                        <ContentHeader><Link to="/clients">Clients</Link></ContentHeader>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <div>
                                    <Nav tabs className="nav-justified">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.activeTab === "1"
                                                })}
                                                onClick={() => {
                                                    this.toggle("1");
                                                }}
                                            >
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.activeTab === "2"
                                                })}
                                                onClick={() => {
                                                    this.toggle("2");
                                                }}
                                            >
                                                Address
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.activeTab === "3"
                                                })}
                                                onClick={() => {
                                                    this.toggle("3");
                                                }}
                                            >
                                                Prizes
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.activeTab === "4"
                                                })}
                                                onClick={() => {
                                                    this.toggle("4");
                                                }}
                                            >
                                                Orders
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.activeTab === "5"
                                                })}
                                                onClick={() => {
                                                    this.toggle("5");
                                                }}
                                            >
                                                Statistics
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <ClientForm selectedClient={UtilService.getDataById(window.location.pathname.substring(17), this.props.client.clients)}/>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Address />
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Prize />
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <Orders />
                                        </TabPane>
                                        <TabPane tabId="5">
                                            <ChatForm type={'Orders'}/>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ client }) => ({ client });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...clientAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(LazyClientProfile);

