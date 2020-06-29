import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { CATEGORY_TAX } from "../../config";
import {bindActionCreators} from "redux";
import * as categoryAction from "../../redux/actions/categoryAction";
import UtilService from "../../utils";
import { Redirect } from 'react-router'

class TermsForm extends Component {

    state = {
        selectedTax: '',
        redirect:false,
        err:false
    };

    componentDidMount(){
        this.setState({
            selectedTax: UtilService.filterParam(this.props.selectedData, CATEGORY_TAX),
        });
    }

    render() {

        let  condition, invoice ;

        if(this.state.redirect){
            return (<Redirect to='/categories'/>)
        }

        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();

                        let data = {
                            condition: condition.value,
                            invoice: invoice.value,
                        };

                        console.log(' data', data );

                        condition.value = '';
                        invoice.value = '';
                    }}
                >

                    <ModalBody>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="invoice">Toc for Invoice</Label>
                                    <textarea
                                        className="form-control height-33"
                                        name="invoice"
                                        id="invoice"
                                        ref={node => (invoice = node)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="condition">Terms of Condtion</Label>
                                    <textarea
                                        className="form-control height-133"
                                        name="condition"
                                        id="condition"
                                        ref={node => (condition = node)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" type="submit">
                            {'+ Save'}
                        </Button>
                    </ModalFooter>
                </Form>
            </React.Fragment>);
    };
}

const mapStateToProps = ({ category }) => ({ category });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...categoryAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(TermsForm);

