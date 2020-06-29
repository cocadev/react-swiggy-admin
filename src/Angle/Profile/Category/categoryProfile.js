import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import CategoryForm  from "../../Form/CategoryForm"
import { bindActionCreators } from "redux";
import classnames from "classnames";
import ContentHeader from "../../../components/contentHead/contentHeader";
import connect from "react-redux/es/connect/connect";
import * as categoryAction from "../../../redux/actions/categoryAction";
import UtilService from "../../../utils";

class LazyCategoryProfile extends Component {

    state = {
        activeTab: "1"
    };

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
                        <ContentHeader><Link to="/products">Products</Link></ContentHeader>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <CardTitle>Formik</CardTitle>
                                <p><a href="https://github.com/jaredpalmer/formik" target="_blank" rel="noopener noreferrer">Formik</a> is designed to manage forms with complex validation with ease. Formik supports synchronous and asynchronous form-level and field-level validation. Furthermore, it comes with baked-in support for schema-based form-level validation through Yup.</p>
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
                                                Information
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
                                                Statistic
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <CategoryForm selectedData={UtilService.getDataById(window.location.pathname.substring(20), this.props.category.categories)} buttonName={"Edit"} productID={window.location.pathname.substring(20)} />
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <h4>Tab 2 Contents</h4>
                                                </Col>
                                            </Row>
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

const mapStateToProps = ({ category }) => ({ category });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...categoryAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(LazyCategoryProfile);

