// import React, { Component, Fragment } from "react";
// import ContentHeader from "../../components/contentHead/contentHeader";
// import ContentHeaderButtons from "../../components/contentHead/contentHeaderButtons";
// import ContentSubHeader from "../../components/contentHead/contentSubHeader";
// import connect from "react-redux/es/connect/connect";
// import UtilService from '../../utils'
// import { Link } from "react-router-dom";
// import { Card, CardBody, Row, Col } from "reactstrap";
// import { FilePlus } from "react-feather";
// import { ReactSelectTableProducts } from "../../components/products/productTable"
// import { bindActionCreators } from "redux";
// import "prismjs/themes/prism-okaidia.css"; //Include CSS
// import * as productAction from "../../redux/actions/productAction";
//
// class CustomerProductsTableC extends Component {
//
//     state={
//         data:''
//     };
//
//     componentDidMount(){
//          let data = UtilService.getData(this.props.product.products);
//          this.setState({ data})
//     }
//
//     render() {
//         let {data} = this.state;
//         let columns = [{
//             Header: "Products",
//             columns:  [{accessor: "id", Header: "ID", maxWidth: 100},
//                            {accessor: "product_name", Header: "Name"},
//                            {accessor: "article_number", Header: "Article Number", maxWidth: 150},
//                            {accessor: "availability_period", Header: "Availability Period", maxWidth: 200},
//                            {accessor: "category", Header: "Category", maxWidth: 150},
//                            {accessor: "short_description", Header: "Short Description"},
//                            {accessor: "long_description", Header: "Long Description"}]
//         }];
//         return (
//             <Fragment>
//                 <Row>
//                     <Col md="8">
//                         <ContentHeader>Products</ContentHeader>
//                         <ContentSubHeader>
//                            Test
//                         </ContentSubHeader>
//                     </Col>
//                     <Col md="4">
//                         <ContentHeaderButtons className="content-header-btn">
//                             <Link className="btn btn-primary" to="products/create">
//                                 <FilePlus size={16} color="#FFF" />
//                                 {" "} New Product
//                             </Link>
//                         </ContentHeaderButtons>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col sm="12">
//                         <Card>
//                             <CardBody>
//                                 <ReactSelectTableProducts type={'products'} data={data} columns={columns}/>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Fragment>
//         );
//     }
// }
//
// const mapStateToProps = ({ product }) => ({ product });
// const mapDispatchToProps = (dispatch) => ({
//     actions: bindActionCreators({ ...productAction }, dispatch),
// });
// export const LazyProducts = connect(mapStateToProps, mapDispatchToProps)(CustomerProductsTableC);
//
