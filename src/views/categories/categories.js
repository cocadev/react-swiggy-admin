// import React, { Component, Fragment } from "react";
// import ContentHeader from "../../components/contentHead/contentHeader";
// import ContentHeaderButtons from "../../components/contentHead/contentHeaderButtons";
// import ContentSubHeader from "../../components/contentHead/contentSubHeader";
// import connect from "react-redux/es/connect/connect";
// import UtilService from '../../utils'
// import { Link } from "react-router-dom";
// import { Card, CardBody, Row, Col } from "reactstrap";
// import { FilePlus } from "react-feather";
// import  ReactSelectCategoryTable  from "../../Angle/Table/CategoryTable"
// import { bindActionCreators } from "redux";
// import "prismjs/themes/prism-okaidia.css"; //Include CSS
// import * as categoryAction from "../../redux/actions/categoryAction";
//
// class CustomerProductsTableC extends Component {
//
//     state={
//         data:''
//     };
//
//     componentDidMount(){
//         let data = UtilService.getData(this.props.category.categories);
//         this.setState({data})
//     }
//
//     render() {
//         let { data } = this.state;
//         let columns = [{
//             Header: "Categories",
//             columns:  [{accessor: "id", Header: "ID", maxWidth: 100},
//                        {accessor: "category_name", Header: "Name"},
//                        {accessor: "category_number", Header: "Position", maxWidth: 150},
//                        {accessor: "category_tax", Header: "Tax", maxWidth: 160},
//                        {accessor: "description", Header: "Description", sortable: false}]
//         }];
//         return (
//             <Fragment>
//                 <Row>
//                     <Col md="8">
//                         <ContentHeader>Categories</ContentHeader>
//                         <ContentSubHeader>
//                             Test
//                         </ContentSubHeader>
//                     </Col>
//                     <Col md="4">
//                         <ContentHeaderButtons className="content-header-btn">
//                             <Link className="btn btn-primary" to="categories/create">
//                                 <FilePlus size={16} color="#FFF" />
//                                 {" "} New Category
//                             </Link>
//                         </ContentHeaderButtons>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col sm="12">
//                         <Card>
//                             <CardBody>
//                                 <ReactSelectCategoryTable type={'categories'} data={data} columns={columns}/>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Fragment>
//         );
//     }
// }
//
// const mapStateToProps = ({ category }) => ({ category });
// const mapDispatchToProps = (dispatch) => ({
//     actions: bindActionCreators({ ...categoryAction }, dispatch),
// });
// export const LazyCategories = connect(mapStateToProps, mapDispatchToProps)(CustomerProductsTableC);
//
