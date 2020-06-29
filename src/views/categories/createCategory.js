import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import {CategoryForm} from "../../components/categories/categoryForm"


class CustomerProductsForm extends Component {

   render() {
      return (
         <Fragment>
            <Row>
               <Col md="12">
                  <ContentHeader><Link to="/categories">Categories</Link> | Create Category</ContentHeader>
                  <ContentSubHeader>
                     Test
                  </ContentSubHeader>
               </Col>
            </Row>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Formik</CardTitle>
                        <p><a href="https://github.com/jaredpalmer/formik" target="_blank" rel="noopener noreferrer">Formik</a> is designed to manage forms with complex validation with ease. Formik supports synchronous and asynchronous form-level and field-level validation. Furthermore, it comes with baked-in support for schema-based form-level validation through Yup.</p>
                        <CategoryForm buttonName={"Create"} topBorder={true} />
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default CustomerProductsForm;

