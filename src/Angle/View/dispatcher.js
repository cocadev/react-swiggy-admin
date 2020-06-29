// import external modules
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import {
   TabContent,
   TabPane,
   NavLink,
   Row,
   Col,
   Button,
   Form,
   Input,
   FormGroup,
   Card,
   CardHeader,
   CardBody,
   CardFooter
} from "reactstrap";
import classnames from "classnames";

// import internal(own) modules
import gallery1 from "../../assets/img/gallery/1.jpg";
import gallery2 from "../../assets/img/gallery/2.jpg";
import gallery3 from "../../assets/img/gallery/3.jpg";
import gallery4 from "../../assets/img/gallery/4.jpg";
import gallery5 from "../../assets/img/gallery/5.jpg";
import gallery6 from "../../assets/img/gallery/6.jpg";
import gallery7 from "../../assets/img/gallery/7.jpg";
import gallery8 from "../../assets/img/gallery/8.jpg";
import gallery9 from "../../assets/img/gallery/9.jpg";
import gallery10 from "../../assets/img/gallery/10.jpg";
import gallery11 from "../../assets/img/gallery/11.jpg";
import gallery12 from "../../assets/img/gallery/12.jpg";
import gallery13 from "../../assets/img/gallery/13.jpg";
import gallery14 from "../../assets/img/gallery/14.jpg";
import gallery15 from "../../assets/img/gallery/15.jpg";
import gallery16 from "../../assets/img/gallery/16.jpg";

import logo from "../../assets/img/images.png";
import avatarS3 from "../../assets/img/portrait/small/avatar-s-3.png";
import avatarS5 from "../../assets/img/portrait/small/avatar-s-5.png";
import avatarS6 from "../../assets/img/portrait/small/avatar-s-6.png";
import avatarS9 from "../../assets/img/portrait/small/avatar-s-9.png";
import avatarS11 from "../../assets/img/portrait/small/avatar-s-11.png";
import avatarS12 from "../../assets/img/portrait/small/avatar-s-12.png";
import avatarS14 from "../../assets/img/portrait/small/avatar-s-14.png";
import avatarS16 from "../../assets/img/portrait/small/avatar-s-16.png";
import avatarS18 from "../../assets/img/portrait/small/avatar-s-18.png";
import photo6 from "../../assets/img/photos/06.jpg";
import photo7 from "../../assets/img/photos/07.jpg";
import photo8 from "../../assets/img/photos/08.jpg";
import photo9 from "../../assets/img/photos/09.jpg";
import photo14 from "../../assets/img/photos/14.jpg";
import GoogleMap from "../../views/maps/google";

class Dispatcher extends Component {
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
               <Col xs="12" id="user-profile">
                  <Card className="profile-with-cover">
                     <div
                        className="card-img-top img-fluid bg-cover height-300"
                        style={{ background: `url("${photo14}") 50%` }}
                     />
                     <Row className="media profil-cover-details">
                        <Col xs="5">
                           <div className="align-self-start halfway-fab pl-3 pt-2">
                              <div className="text-left">
                                 <h3 className="card-title text-white">Orders</h3>
                              </div>
                           </div>
                        </Col>
                        <Col xs="2">
                           <div className="align-self-center halfway-fab text-center">
                              <Link to="/pages/user-profile" className="profile-image">
                                 <img
                                    src={logo}
                                    className="rounded-circle img-border gradient-summer width-100"
                                    alt="Card avatar"
                                 />
                              </Link>
                           </div>
                        </Col>

                     </Row>
                     <div className="profile-section">
                        <Row>
                           <Col lg="5" md="5">
                              <ul className="profile-menu no-list-style">
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "1"
                                       })}
                                       onClick={() => {
                                          this.toggle("1");
                                       }}
                                    >
                                       Pending Orders
                                    </NavLink>
                                 </li>
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "2"
                                       })}
                                       onClick={() => {
                                          this.toggle("2");
                                       }}
                                    >
                                       Accepted Orders
                                    </NavLink>
                                 </li>
                              </ul>
                           </Col>

                           <Col lg="2" md="2" className="text-center">
                              <span className="font-medium-2 text-uppercase">Swiggy</span>
                              <p className="grey font-small-2">Welcome to Orders</p>
                           </Col>

                           <Col lg="5" md="5">
                              <ul className="profile-menu no-list-style">
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "3"
                                       })}
                                       onClick={() => {
                                          this.toggle("3");
                                       }}
                                    >
                                       Ongoing Orders
                                    </NavLink>
                                 </li>
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "4"
                                       })}
                                       onClick={() => {
                                          this.toggle("4");
                                       }}
                                    >
                                       Cancelled Orders
                                    </NavLink>
                                 </li>
                              </ul>
                           </Col>
                        </Row>
                     </div>
                  </Card>
               </Col>
            </Row>

            <TabContent activeTab={this.state.activeTab}>
               <TabPane tabId="1">
                   <Row>
                       <Col xs="12">
                           <div className="content-header" />
                       </Col>
                   </Row>
                   <Row>
                       <Col xs="12" md="8" lg="8">
                           <Card>
                               <CardBody>
                                   <Row>
                                       <Col xs="12" md="5" lg="5" className='center text-center mt-1'>
                                           <img src={avatarS5} alt="Brek" width="120" className="rounded-circle gradient-mint" />
                                       </Col>
                                       <Col xs="12" md="7" lg="7">
                                           <h4 className="card-title">Perl Padio</h4>
                                           <p className="category text-gray font-small-4">#32dd / +39234231</p>
                                           <Link
                                               to="#"
                                               className="btn btn-lg gradient-mint font-small-2 white p-2 mr-2"
                                           >
                                               Order List
                                           </Link>
                                           <Link to="#" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                               Message
                                           </Link>
                                           <Link to="#" className="btn btn-lg btn-danger font-small-2 p-2 ml-2">
                                               Delete
                                           </Link>
                                       </Col>
                                   </Row>
                                   <hr className="grey" />
                               </CardBody>
                               <CardBody>
                                   <Row>
                                       <Col xs="12" md="5" lg="5" className='center text-center mt-1'>
                                           <img src={avatarS14} alt="Brek" width="120" className="rounded-circle gradient-mint" />
                                       </Col>
                                       <Col xs="12" md="7" lg="7">
                                           <h4 className="card-title">Brek Padio</h4>
                                           <p className="category text-gray font-small-4">#412 / +092132183092183</p>
                                           <Link
                                               to="#"
                                               className="btn btn-lg gradient-mint font-small-2 white p-2 mr-2"
                                           >
                                               Order List
                                           </Link>
                                           <Link to="#" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                               Message
                                           </Link>
                                           <Link to="#" className="btn btn-lg btn-danger font-small-2 p-2 ml-2">
                                               Delete
                                           </Link>
                                       </Col>
                                   </Row>
                                   <hr className="grey" />
                               </CardBody>
                           </Card>
                       </Col>
                       <Col xs="12" md="4" lg="4">
                           <GoogleMap/>
                       </Col>
                   </Row>
               </TabPane>
               {/* Friends */}
               <TabPane tabId="2">

               </TabPane>
               {/* User Timeline */}

               <TabPane tabId="3">
                  <Row>
                     <Col xs="12">
                        <div className="content-header" />
                     </Col>
                  </Row>
                  <Row>
                     <Col xs="12" md="8" lg="8">
                        <Card>
                           <CardBody>
                              <Row>
                                  <Col xs="12" md="5" lg="5" className='center text-center mt-1'>
                                      <img src={avatarS3} alt="Brek" width="120" className="rounded-circle gradient-mint" />
                                  </Col>
                                  <Col xs="12" md="7" lg="7">
                                      <h4 className="card-title">Brek Padio</h4>
                                      <p className="category text-gray font-small-4">#412 / +092132183092183</p>
                                      <Link
                                          to="#"
                                          className="btn btn-lg gradient-mint font-small-2 white p-2 mr-2"
                                      >
                                          Order List
                                      </Link>
                                      <Link to="#" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                          Message
                                      </Link>
                                      <Link to="#" className="btn btn-lg btn-danger font-small-2 p-2 ml-2">
                                          Delete
                                      </Link>
                                  </Col>
                              </Row>
                              <hr className="grey" />
                           </CardBody>
                            <CardBody>
                                <Row>
                                    <Col xs="12" md="5" lg="5" className='center text-center mt-1'>
                                        <img src={avatarS6} alt="Brek" width="120" className="rounded-circle gradient-mint" />
                                    </Col>
                                    <Col xs="12" md="7" lg="7">
                                        <h4 className="card-title">John Padio</h4>
                                        <p className="category text-gray font-small-4">#412 / +34543534</p>
                                        <Link
                                            to="#"
                                            className="btn btn-lg gradient-mint font-small-2 white p-2 mr-2"
                                        >
                                            Order List
                                        </Link>
                                        <Link to="#" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                            Message
                                        </Link>
                                        <Link to="#" className="btn btn-lg btn-danger font-small-2 p-2 ml-2">
                                            Delete
                                        </Link>
                                    </Col>
                                </Row>
                                <hr className="grey" />
                            </CardBody>
                            <CardBody>
                                <Row>
                                    <Col xs="12" md="5" lg="5" className='center text-center mt-1'>
                                        <img src={avatarS5} alt="Brek" width="120" className="rounded-circle gradient-mint" />
                                    </Col>
                                    <Col xs="12" md="7" lg="7">
                                        <h4 className="card-title">Perl Padio</h4>
                                        <p className="category text-gray font-small-4">#32dd / +39234231</p>
                                        <Link
                                            to="#"
                                            className="btn btn-lg gradient-mint font-small-2 white p-2 mr-2"
                                        >
                                            Order List
                                        </Link>
                                        <Link to="#" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                            Message
                                        </Link>
                                        <Link to="#" className="btn btn-lg btn-danger font-small-2 p-2 ml-2">
                                            Delete
                                        </Link>
                                    </Col>
                                </Row>
                                <hr className="grey" />
                            </CardBody>
                            <CardBody>
                                <Row>
                                    <Col xs="12" md="5" lg="5" className='center text-center mt-1'>
                                        <img src={avatarS14} alt="Brek" width="120" className="rounded-circle gradient-mint" />
                                    </Col>
                                    <Col xs="12" md="7" lg="7">
                                        <h4 className="card-title">Brek Padio</h4>
                                        <p className="category text-gray font-small-4">#412 / +092132183092183</p>
                                        <Link
                                            to="#"
                                            className="btn btn-lg gradient-mint font-small-2 white p-2 mr-2"
                                        >
                                            Order List
                                        </Link>
                                        <Link to="#" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                            Message
                                        </Link>
                                        <Link to="#" className="btn btn-lg btn-danger font-small-2 p-2 ml-2">
                                            Delete
                                        </Link>
                                    </Col>
                                </Row>
                                <hr className="grey" />
                            </CardBody>
                        </Card>
                     </Col>
                      <Col xs="12" md="4" lg="4">
                         <GoogleMap/>
                      </Col>
                  </Row>
               </TabPane>
               {/* Photos */}
               <TabPane tabId="4">

               </TabPane>
            </TabContent>
         </Fragment>
      );
   }
}

export default Dispatcher;
