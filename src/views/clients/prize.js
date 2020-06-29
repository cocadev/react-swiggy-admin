import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import Select from "react-select";
import { PRODUCT, UNIT } from "../../config";
import { bindActionCreators } from "redux";
import * as clientAction from "../../redux/actions/clientAction";
import ReactTable from "react-table";

class Prize extends Component {

    state = {
        selectedProduct: '',
        selectedUnit: '',
        data:[],
    };

    handleProductChange = (selectedProduct) => {
        this.setState({ selectedProduct });
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
                        // if (!firstname.value.trim() || !phone.value.trim() || !email.value.trim()) {
                        //     return;
                        // }
                        let id = this.props.client.clients.length + 1;
                        let data = {
                            id:id,
                            prize: prize.value,
                            product: selectedProduct.value ? selectedProduct.value : '',
                            unit: selectedUnit.value ? selectedUnit.value : ''
                        };

                        console.log('data', data)
                        // this.props.actions.createClient(data);

                        product.value = "";
                        prize.value = "";
                        unit.value = "";
                    }}
                >

                    <ModalBody>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="country">Product</Label>
                                    <Select
                                        classNamePrefix="select"
                                        id="product"
                                        name="product"
                                        value={selectedProduct}
                                        onChange={this.handleProductChange}
                                        options={PRODUCT}
                                        ref={node => (product = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
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
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="prize">Prize</Label>
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
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" type="submit">
                            Add
                        </Button>
                    </ModalFooter>
                </Form>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: "Orders",
                            columns: [
                                {
                                    Header: "Product",
                                    accessor: "product"
                                },
                                {
                                    Header: "Unit",
                                    accessor: "unit"
                                },
                                {
                                    Header: "Prize",
                                    accessor: "prize"
                                },
                                {
                                    Header: "Action",
                                    accessor: "action"
                                }
                            ]
                        },
                    ]}
                    defaultSorted={[
                        {
                            id: "product",
                            desc: true
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </React.Fragment>);
    };
}

const mapStateToProps = ({ client }) => ({ client });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...clientAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Prize);

