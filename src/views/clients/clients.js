// import React, { Component, Fragment } from "react";
// import ContentHeader from "../../components/contentHead/contentHeader";
// import ContentHeaderButtons from "../../components/contentHead/contentHeaderButtons";
// import ContentSubHeader from "../../components/contentHead/contentSubHeader";
// import connect from "react-redux/es/connect/connect";
// import UtilService from '../../utils'
// import { Card, CardBody, Row, Col } from "reactstrap";
// import { FilePlus } from "react-feather";
// import  ReactSelectClientsTable  from "../../Angle/Table/ReactSelectClientsTable"
// import { bindActionCreators } from "redux";
// import "prismjs/themes/prism-okaidia.css"; //Include CSS
// import * as clientAction from "../../redux/actions/clientAction";
// import { Modal, ModalHeader } from "reactstrap";
// import CreateClientForm from "../../Angle/Form/ClientForm";
//
// class CustomerProductsTable extends Component {
//
//     constructor(){
//         super();
//         this.state={
//             modal:false
//         };
//         this.toggle = this.toggle.bind(this)
//     }
//
//     toggle() {
//         this.setState({
//             modal: !this.state.modal
//         });
//     }
//
//     render() {
//         let columns = [{
//             Header: "Clients",
//             columns:  [{accessor: "id", Header: "ID"},
//                        {accessor: "firstname", Header: "Firstname"},
//                        {accessor: "lastname", Header: "Lastname"},
//                        {accessor: "tax", Header: "Tax"},
//                        {accessor: "company", Header: "Company"},
//                        {accessor: "email", Header: "E-mail"},
//                        {accessor: "phone", Header: "Phone Number"},
//                        {accessor: "address", Header: "Address"},
//                        {accessor: "postal", Header: "Postal Code"},
//                        {accessor: "country", Header: "Country"},
//                        {accessor: "city", Header: "City"}]
//         }];
//         return (
//             <Fragment>
//                 <Row>
//                     <Col md="8">
//                         <ContentHeader>Clients</ContentHeader>
//                         <ContentSubHeader>
//                             Test
//                         </ContentSubHeader>
//                     </Col>
//                     <Col md="4">
//                         <ContentHeaderButtons className="content-header-btn">
//                             <div className="btn btn-primary" onClick={this.toggle}>
//                                 <FilePlus size={16} color="#FFF" />
//                                 {" "} New Client
//                             </div>
//                         </ContentHeaderButtons>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col sm="12">
//                         <Card>
//                             <CardBody>
//                                 <ReactSelectClientsTable type={'clients'} data={UtilService.getData(this.props.client.clients)} columns={columns}/>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//                 <Modal isOpen={this.state.modal} toggle={this.toggle} size="md-2">
//                     <ModalHeader toggle={this.toggle}>Add Client</ModalHeader>
//                     <CreateClientForm />
//                 </Modal>
//             </Fragment>
//         );
//     }
// }
//
// const mapStateToProps = ({ client }) => ({ client });
// const mapDispatchToProps = (dispatch) => ({
//     actions: bindActionCreators({ ...clientAction }, dispatch),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(CustomerProductsTable);
//
