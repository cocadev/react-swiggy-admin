import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button } from "reactstrap";
import { connect } from "react-redux";
import Select from "react-select";
import {PRICEING_COLUMN, UNIT} from "../../../config";
import { bindActionCreators } from "redux";
import * as clientAction from "../../../redux/actions/clientAction";
import ReactTable from "react-table";

class Pricing extends Component {

    state = {
        selectedProduct: '',
        selectedUnit: '',
        data:[],
    };

    handleUnitChange = (selectedUnit) => {
        this.setState({ selectedUnit });
    };

    render() {
        let  product,unit,prize;
        let { selectedProduct, selectedUnit, data } = this.state;
        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        let id = this.props.client.clients.length + 1;
                        let data = {
                            id:id,
                            prize: prize.value,
                            product: selectedProduct.value ? selectedProduct.value : '',
                            unit: selectedUnit.value ? selectedUnit.value : ''
                        };

                        console.log('data', data);
                        // this.props.actions.createClient(data);

                        product.value = "";
                        prize.value = "";
                        unit.value = "";
                    }}
                >

                    <Row>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="unit">Unit</Label>
                                <Select
                                    classNamePrefix="select"
                                    value={selectedUnit}
                                    id="unit"
                                    name="unit"
                                    onChange={this.handleUnitChange}
                                    options={UNIT}
                                    ref={node => (unit = node)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="prize">Pricing</Label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="prize"
                                    id="prize"
                                    ref={node => (prize = node)}
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
                    columns={PRICEING_COLUMN}
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
export default connect(mapStateToProps, mapDispatchToProps)(Pricing);

