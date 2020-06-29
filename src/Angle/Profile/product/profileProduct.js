import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import ContentHeader from "../../../components/contentHead/contentHeader";
import {ProductForm} from "../../../components/products/productForm"
import {bindActionCreators} from "redux";
import * as productAction from "../../../redux/actions/productAction";
import connect from "react-redux/es/connect/connect";
import Pricing from './pricing'
import ChartForm from '../../Form/chatForm'

class LazyProductProfile extends Component {
   state = {
      activeTab: "3"
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
       let product = this.props.product.productData;
       return (
         <Fragment>
            <Row>
               <Col md="12">
                  <ContentHeader><Link to="/products">Products</Link> | {product.product_name}</ContentHeader>
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
                                 Pricing
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
                                 Statistic
                              </NavLink>
                           </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                           <TabPane tabId="1">
                              <ProductForm selectedData={product} buttonName={"Edit"} productID={this.props.match.params.id} />
                           </TabPane>
                           <TabPane tabId="2">
                             <Pricing />
                           </TabPane>
                           <TabPane tabId="3">
                              <ChartForm type={'Products'}/>
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

 const mapStateToProps = ({ product }) => ({ product });
 const mapDispatchToProps = (dispatch) => ({
     actions: bindActionCreators({ ...productAction }, dispatch),
 });
 export default connect(mapStateToProps, mapDispatchToProps)(LazyProductProfile);

