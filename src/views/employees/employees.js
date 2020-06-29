import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";

import ContactsFilter from "../../components/contacts/contactsFilter";
import ContactsSearch from "../../components/contacts/contactsSearch";

import ContactsList from "../../components/contacts/contacsList";
import ContactsDetails from "../../components/contacts/contactsDetails";
import {bindActionCreators} from "redux";
import * as employeAction from "../../redux/actions/employAction";
import connect from "react-redux/es/connect/connect";

class Contacts extends Component {

   render() {

       return (
         <Fragment>
            <div className="contact-application">
               <div className="content-overlay" />
               <ContactsFilter />
               <Row className="contact-app-content">
                  <div className="contact-app-content-area w-100">
                     <div className="contact-app-list-mails p-0">
                         <ContactsSearch />
                         <ContactsList list={this.props.employe.employees}/>
                     </div>
                     <div className="contact-app-mail-content d-none d-md-block">
                         <ContactsDetails data={this.props.employe.employeData}/>
                     </div>
                  </div>
               </Row>
            </div>
         </Fragment>
      );
   }
}

const mapStateToProps = ({ employe }) => ({ employe });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...employeAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

