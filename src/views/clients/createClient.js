// import React, { Component, Fragment } from "react";
// import { Card, CardBody, CardTitle, Row, Col, Alert } from "reactstrap";
// import { Link } from "react-router-dom";
// import ContentHeader from "../../components/contentHead/contentHeader";
// import ContentSubHeader from "../../components/contentHead/contentSubHeader";
// import {ProductForm} from "../../components/products/productForm"
//
// class CustomerProductsForm extends Component {
//
//    render() {
//       return (
//          <Fragment>
//             <Row>
//                <Col md="12">
//                   <ContentHeader><Link to="/clients">Clients</Link> | Create Client</ContentHeader>
//                   <ContentSubHeader>
//                      <a
//                         href="https://github.com/react-tools/react-table"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                      >
//                         Clients
//                      </a>{" "}
//                      is lightweight, fast and extendable datagrid built for React
//                   </ContentSubHeader>
//                </Col>
//             </Row>
//             <Alert color="info" className="mt-2">
//                <strong>Note:</strong> Below example tables use{" "}
//                <a
//                   href="https://www.npmjs.com/package/namor"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                >
//                   namor
//                </a>{" "}
//                for generating random data for table using utils.js file.
//             </Alert>
//             <Row>
//                <Col sm="12">
//                   <Card>
//                      <CardBody>
//                         <CardTitle>Formik</CardTitle>
//                         <p><a href="https://github.com/jaredpalmer/formik" target="_blank" rel="noopener noreferrer">Formik</a> is designed to manage forms with complex validation with ease. Formik supports synchronous and asynchronous form-level and field-level validation. Furthermore, it comes with baked-in support for schema-based form-level validation through Yup.</p>
//                         {/*<ProductForm buttonName={"Create"} topBorder={true} />*/}
//                      </CardBody>
//                   </Card>
//                </Col>
//             </Row>
//          </Fragment>
//       );
//    }
// }
//
// export default CustomerProductsForm;
//
