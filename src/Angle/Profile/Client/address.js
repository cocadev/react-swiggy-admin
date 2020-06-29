import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button } from "reactstrap";
import { connect } from "react-redux";
import Select from "react-select";
import {ADDRESS_COLUMN, ADDRESS_TYPE, CITY, COUNTRY} from "../../../config";
import { bindActionCreators } from "redux";
import * as clientAction from "../../../redux/actions/clientAction";
import ReactTable from "react-table";
import UtilService from "../../../utils";

class Address extends Component {

    state = {
        selectedType: '',
        data:[],
        selectedCountry: '',
        selectedCity: '',
        redirect:false
    };

    componentDidMount(){
        this.setState({
            selectedCountry: UtilService.filterParam(this.props.selectedClient, COUNTRY),
            selectedCity: UtilService.filterParam(this.props.selectedClient, CITY)
        });
    }

    handleCountryChange = (selectedCountry) => {
        this.setState({ selectedCountry });
    };

    handleCityChange = (selectedCity) => {
        this.setState({ selectedCity });
    };

    handleTypeChange = (selectedType) => {
        this.setState({ selectedType });
    };

    render() {
        let  type,address, postal;
        let { selectedCountry, selectedCity, selectedType, data } = this.state;

        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();

                        let data = {
                            address: address.value,
                            postal: postal.value,
                            type: selectedType.value ? selectedType.value : ''
                        };

                        console.log('data', data);
                        // this.props.actions.createClient(data);

                        address.value = "";
                        type.value = "";
                    }}
                >

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="address"
                                        id="address"
                                        ref={node => (address = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="country">Country</Label>
                                    <Select
                                        classNamePrefix="select"
                                        id="country"
                                        name="country"
                                        value={selectedCountry}
                                        onChange={this.handleCountryChange}
                                        options={COUNTRY}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <Label for="postal">Postal Code</Label>
                                <input
                                    className="form-control"
                                    type="textarea"
                                    name="postal"
                                    id="postal"
                                    ref={node => (postal = node)}
                                />
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="type">Type</Label>
                                    <Select
                                        classNamePrefix="select"
                                        value={selectedType}
                                        id="type"
                                        name="type"
                                        onChange={this.handleTypeChange}
                                        options={ADDRESS_TYPE}
                                        ref={node => (type = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <Select
                                        classNamePrefix="select"
                                        value={selectedCity}
                                        id="city"
                                        name="city"
                                        onChange={this.handleCityChange}
                                        options={selectedCountry?CITY:[]}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Button className='float-right' color="primary" type="submit">
                            Add
                        </Button>
                </Form>
                <div className='clear-both'/>
                <ReactTable
                    data={data}
                    columns={ADDRESS_COLUMN}
                    defaultSorted={[
                        {
                            id: "product",
                            desc: true
                        }
                    ]}
                    defaultPageSize={10}
                    className="-highlight"
                />
            </React.Fragment>);
    };
}

const mapStateToProps = ({ client }) => ({ client });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...clientAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Address);

