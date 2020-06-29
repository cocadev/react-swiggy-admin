import React, {Component} from "react";
import { Row, Col, Media, Table, Button, Input } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import * as Icon from "react-feather";
import {bindActionCreators} from "redux";
import * as employeAction from "../../redux/actions/employAction";
import connect from "react-redux/es/connect/connect";
import UtilService from "../../utils";
import Select from "react-select";
import {COUNTRY, CITY} from "../../config";

class ContactsDetails extends Component {

    constructor(){
        super();
        this.state= {
            status: false,
        };
        this.onEditClick = this.onEditClick.bind(this)
    }

    onEditClick(){
        this.setState({
            status:!this.state.status
        })
    }

    render() {
        let selectedContacts = this.props.data;
        let { status } = this.state;
        return (
            <div className="contact-app-content-detail">
                <Row>
                    <Col className="text-right">
                        {
                            selectedContacts&&selectedContacts.id !== undefined&&
                            <Button className="btn-outline-success mr-1 mt-1" size="sm" onClick={()=>this.onEditClick()}>
                                {status ? <Icon.Check size={16} /> : <Icon.Edit2 size={16} />}
                            </Button>
                        }
                    </Col>
                </Row>
                {selectedContacts&&selectedContacts.id !== undefined &&
                <PerfectScrollbar>
                    <Media>
                        <Media left href="#">
                            <Media
                                object
                                src={selectedContacts.img}
                                alt="Generic placeholder image"
                                className="img-fluid rounded-circle detail-img"
                            />
                        </Media>
                        <Media body>
                            <Media heading>
                                {selectedContacts.firstname} {selectedContacts.lastname}
                            </Media>
                            {selectedContacts.position}
                        </Media>
                    </Media>
                    <Table responsive borderless size="sm" className="mt-4">
                        <tbody>
                        <tr className="d-flex">
                            <td className="col-3 text-bold-400">
                                First Name
                            </td>
                            <td className="col-9">
                                {status ? (
                                    <Input
                                      type="text"
                                      ref='firstname'
                                      value={selectedContacts.firstname}
                                      onChange={(e)=>{this.props.actions.updateEmployeData('firstname',e.target.value)}}
                                    />
                                    ) : (
                                    ": " + selectedContacts.firstname
                                )}
                            </td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-3 text-bold-400">
                                Last Name
                            </td>
                            <td className="col-9">
                                {status ? (
                                    <Input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        value={selectedContacts.lastname}
                                        onChange={(e)=>{this.props.actions.updateEmployeData('lastname',e.target.value)}}
                                    />
                                ) : (
                                    ": " + selectedContacts.lastname
                                )}
                            </td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-3 text-bold-400">
                                Password
                            </td>
                            <td className="col-9">
                                {status ? (

                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        defaultValue={selectedContacts.password}
                                        onChange={(e)=>{this.props.actions.updateEmployeData('password',e.target.value)}}
                                    />
                                ) : (
                                    <span>
                                        :  <b>Password is hidden</b>
                                    </span>
                                )}
                            </td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-3 text-bold-400">
                                Position:
                            </td>
                            <td className="col-9">
                                {status ? (
                                    <Input
                                        type="text"
                                        name="position"
                                        id="position"
                                        defaultValue={selectedContacts.position}
                                        onChange={(e)=>{this.props.actions.updateEmployeData('position',e.target.value)}}
                                    />
                                ) : (
                                    ": " + selectedContacts.position
                                )}
                            </td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-3 text-bold-400">
                                Email
                            </td>
                            <td className="col-9">
                                {status ? (
                                    <Input
                                        type="text"
                                        name="email"
                                        id="email"
                                        defaultValue={selectedContacts.email}
                                        onChange={(e)=>{this.props.actions.updateEmployeData('email',e.target.value)}}
                                    />
                                ) : (
                                    ": " + selectedContacts.email
                                )}
                            </td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-3 text-bold-400">
                                Phone
                            </td>
                            <td className="col-9">
                                {status ? (
                                    <Input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        defaultValue={selectedContacts.phone}
                                        onChange={(e)=>{this.props.actions.updateEmployeData('phone',e.target.value)}}
                                    />
                                ) : (
                                    ": " + selectedContacts.phone
                                )}
                            </td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-3 text-bold-400">
                                Address
                            </td>
                            <td className="col-9">
                                {status ? (
                                    <Input
                                        type="text"
                                        name="address"
                                        id="address"
                                        value={selectedContacts.address}
                                        onChange={(e)=>{this.props.actions.updateEmployeData('address',e.target.value)}}
                                    />
                                ) : (
                                    ": " + selectedContacts.address
                                )}
                            </td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-3 text-bold-400">
                                Note
                            </td>
                            <td className="col-9">
                                {status ? (
                                    <Input
                                        type="text"
                                        name="notes"
                                        id="notes"
                                        defaultValue={selectedContacts.notes}
                                        onChange={(e)=>{this.props.actions.updateEmployeData('notes',e.target.value)}}
                                    />
                                ) : (
                                    ": " + selectedContacts.notes
                                )}
                            </td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-3 text-bold-400">
                                Country
                            </td>
                            <td className="col-9">
                                {status ?
                                    <Select
                                        defaultValue={UtilService.filterParamCountry(selectedContacts, COUNTRY)}
                                        classNamePrefix="select"
                                        id="category_tax"
                                        name="category_tax"
                                        onChange={(e)=>{this.props.actions.updateEmployeData('country',e.value)}}
                                        options={COUNTRY}
                                    />
                                    : ": " + selectedContacts.country
                                }
                            </td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-3 text-bold-400">
                                City
                            </td>
                            <td className="col-9">
                                {status ?
                                    <Select
                                        defaultValue={UtilService.filterParamCity(selectedContacts, CITY)}
                                        classNamePrefix="select"
                                        id="category_tax"
                                        name="category_tax"
                                        onChange={(e)=>{this.props.actions.updateEmployeData('city',e.value)}}
                                        // onChange={ev => this.handleCategoryChange(ev, setFieldValue)}
                                        options={CITY}
                                    />
                                    : ": " + selectedContacts.city
                                }
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </PerfectScrollbar>}
            </div>
        )
    }
}

const mapStateToProps = ({ employe }) => ({ employe });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...employeAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsDetails);

