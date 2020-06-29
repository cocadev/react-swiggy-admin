// import React, { Component, Fragment } from "react";
// import { Card, CardBody, CardTitle, Row, Col, TabContent, TabPane, CardText, Nav, NavItem, Button, NavLink } from "reactstrap";
// import { Link } from "react-router-dom";
// import { CategoryForm } from "../../components/categories/categoryForm"
// import { bindActionCreators } from "redux";
// import classnames from "classnames";
// import ContentHeader from "../../components/contentHead/contentHeader";
// import connect from "react-redux/es/connect/connect";
// import * as productAction from "../../redux/actions/productAction";
//
// class CustomerProductsProfileC extends Component {
//
//    state = {
//       activeTab: "1"
//    };
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
//        let product = this.props.product.productData;
//        return (
//          <Fragment>
//             <Row>
//                <Col md="12">
//                   <ContentHeader><Link to="/products">Products</Link> | {product.product_name}</ContentHeader>
//                </Col>
//             </Row>
//             <Row>
//                <Col sm="12">
//                   <Card>
//                      <CardBody>
//                         <CardTitle>Formik</CardTitle>
//                         <p><a href="https://github.com/jaredpalmer/formik" target="_blank" rel="noopener noreferrer">Formik</a> is designed to manage forms with complex validation with ease. Formik supports synchronous and asynchronous form-level and field-level validation. Furthermore, it comes with baked-in support for schema-based form-level validation through Yup.</p>
//                         <div>
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
//                                  Information
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
//                                  Pricing
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
//                                  Statistic
//                               </NavLink>
//                            </NavItem>
//                         </Nav>
//                         <TabContent activeTab={this.state.activeTab}>
//                            <TabPane tabId="1">
//                               <CategoryForm selectedData={product} buttonName={"Edit"} productID={this.props.match.params.id} />
//                            </TabPane>
//                            <TabPane tabId="2">
//                               <Row>
//                                  <Col sm="6">
//                                     <Card body>
//                                        <CardTitle>Special Title Treatment</CardTitle>
//                                        <CardText>
//                                           With supporting text below as a natural lead-in to
//                                           additional content.
//                                        </CardText>
//                                        <Button className="btn btn-success">Go somewhere</Button>
//                                     </Card>
//                                  </Col>
//                                  <Col sm="6">
//                                     <Card body>
//                                        <CardTitle>Special Title Treatment</CardTitle>
//                                        <CardText>
//                                           With supporting text below as a natural lead-in to
//                                           additional content.
//                                        </CardText>
//                                        <Button className="btn btn-danger">Go somewhere</Button>
//                                     </Card>
//                                  </Col>
//                               </Row>
//                            </TabPane>
//                            <TabPane tabId="3">
//                               <Row>
//                                  <Col sm="12">
//                                     <h4>Tab 3 Contents</h4>
//                                     <p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly. Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah.</p>
//                                  </Col>
//                               </Row>
//                            </TabPane>
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
//  const mapStateToProps = ({ product }) => ({ product });
//  const mapDispatchToProps = (dispatch) => ({
//      actions: bindActionCreators({ ...productAction }, dispatch),
//  });
//  export const LazyCategoryProfile = connect(mapStateToProps, mapDispatchToProps)(CustomerProductsProfileC);
//
