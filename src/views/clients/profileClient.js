// import React, { Component, Fragment } from "react";
// import { Card, CardBody, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
// import { Link } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import ContentHeader from "../../components/contentHead/contentHeader";
// import classnames from "classnames";
// import connect from "react-redux/es/connect/connect";
// import * as clientAction from "../../redux/actions/clientAction";
// import Orders from './orders'
// import Prize from './prize'
// import Statics from './statics'
// import ClientForm from "../../Angle/Form/ClientForm";
// import UtilService from "../../utils";
//
//
// class LazyClientProfile extends Component {
//    state = {
//       activeTab: "4"
//    };
//
//    componentDidMount(){
//        this.setState({
//            activeTab:'1'
//        })
//    }
//
//    toggle = tab => {
//       if (this.state.activeTab !== tab) {
//          this.setState({
//             activeTab: tab
//          });
//       }
//    };
//
//    render() {
//        let client = this.props.client.clientData;
//        return (
//          <Fragment>
//             <Row>
//                <Col md="12">
//                   <ContentHeader><Link to="/clients">Clients</Link> | {client.client_name}</ContentHeader>
//                </Col>
//             </Row>
//             <Row>
//                <Col sm="12">
//                   <Card>
//                      <CardBody>
//                        <div>
//                         <Nav tabs className="nav-justified">
//                            <NavItem>
//                               <NavLink
//                                  className={classnames({
//                                     active: this.state.activeTab === "1"
//                                  })}
//                                  onClick={() => {
//                                     this.toggle("1");
//                                  }}
//                               >
//                                  Profile
//                               </NavLink>
//                            </NavItem>
//                            <NavItem>
//                               <NavLink
//                                  className={classnames({
//                                     active: this.state.activeTab === "2"
//                                  })}
//                                  onClick={() => {
//                                     this.toggle("2");
//                                  }}
//                               >
//                                  Orders
//                               </NavLink>
//                            </NavItem>
//                            <NavItem>
//                               <NavLink
//                                  className={classnames({
//                                     active: this.state.activeTab === "3"
//                                  })}
//                                  onClick={() => {
//                                     this.toggle("3");
//                                  }}
//                               >
//                                  Prizes
//                               </NavLink>
//                            </NavItem>
//                             <NavItem>
//                                 <NavLink
//                                     className={classnames({
//                                         active: this.state.activeTab === "4"
//                                     })}
//                                     onClick={() => {
//                                         this.toggle("4");
//                                     }}
//                                 >
//                                     Statistics
//                                 </NavLink>
//                             </NavItem>
//                         </Nav>
//                         <TabContent activeTab={this.state.activeTab}>
//                            <TabPane tabId="1">
//                                <ClientForm selectedClient={UtilService.getDataById(window.location.pathname.substring(17), this.props.client.clients)}/>
//                            </TabPane>
//                            <TabPane tabId="2">
//                                <Orders />
//                            </TabPane>
//                            <TabPane tabId="3">
//                               <Prize />
//                            </TabPane>
//                             <TabPane tabId="4">
//                                 <Statics />
//                             </TabPane>
//                         </TabContent>
//                         </div>
//                      </CardBody>
//                   </Card>
//                </Col>
//             </Row>
//          </Fragment>
//       );
//    }
// }
//
//  const mapStateToProps = ({ client }) => ({ client });
//  const mapDispatchToProps = (dispatch) => ({
//      actions: bindActionCreators({ ...clientAction }, dispatch),
//  });
//  export default connect(mapStateToProps, mapDispatchToProps)(LazyClientProfile);
//
