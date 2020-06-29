// import external modules
import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Input, Form, FormGroup, Button, Card, CardBody, CardFooter } from "reactstrap";

const ForgotPassword = props => {
   return (
      <div className="container">
         <Row className="full-height-vh">
            <Col xs="12" className="d-flex align-items-center justify-content-center">
               <Card className="gradient-indigo-purple text-center width-400">                  
                  <CardBody>
                     <div className="text-center">
                        <h4 className="text-uppercase text-bold-400 white">Forgot Password</h4>
                     </div>
                     <Form className="pt-2">
                        <FormGroup>
                           <Col md="12">
                              <Input
                                 type="email"
                                 className="form-control"
                                 name="inputEmail"
                                 id="inputEmail"
                                 placeholder="Your Email Address"
                              />
                           </Col>
                        </FormGroup>
                        <FormGroup className="pt-2">
                           <Col md="12">
                              <div className="text-center mt-3">
                                 <Button color="danger" block>
                                    Submit
                                 </Button>
                                 <NavLink to="/login">
                                    <Button color="secondary" block>
                                       Cancel
                                    </Button>
                                 </NavLink>
                              </div>
                           </Col>
                        </FormGroup>
                     </Form>
                  </CardBody>
                  <CardFooter>
                     <div className="float-left white">
                        <NavLink exact className="text-white" to="/">
                           Login
                        </NavLink>
                     </div>
                     <div className="float-right white">
                        <NavLink exact className="text-white" to="/register">
                           Register Now
                        </NavLink>
                     </div>
                  </CardFooter>
               </Card>
            </Col>
         </Row>
      </div>
   );
};

export default ForgotPassword;
