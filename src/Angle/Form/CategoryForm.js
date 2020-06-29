import React, {Component} from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import Select from "react-select";
import { CATEGORY_TAX } from "../../config";
import {bindActionCreators} from "redux";
import * as categoryAction from "../../redux/actions/categoryAction";
import UtilService from "../../utils";
import { Redirect } from 'react-router'
import _ from "underscore";

class ClientForm extends Component {

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

    handleTaxChange = (selectedTax) => {
        this.setState({ selectedTax });
    };

    render() {

        let  category_name, category_number, description;
        let { selectedTax, err } = this.state;
        let { selectedData } = this.props;

        if(this.state.redirect){
            return (<Redirect to='/categories'/>)
        }

        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();

                        let mapping = _.find(this.props.category.categories, (u)=>{
                            return u.category_number === category_number.value
                        });

                        if (mapping){
                            let filter = this.props.selectedData?this.props.selectedData.category_number:'';
                            if(category_number.value !== filter){
                                this.setState({err:true});
                                return false
                            }
                        }

                        let id = selectedData ? selectedData.id : this.props.category.categories.length + 1;
                        let data = {
                            id:id,
                            category_name: category_name.value,
                            category_number: category_number.value,
                            description: description.value,
                            category_tax: selectedTax.value ? selectedTax.value : '',
                        };

                        if(selectedData){
                            this.props.actions.updateCategory(data);
                            this.setState({redirect:true})
                        } else {
                            this.props.actions.createCategory(data);
                        }

                        category_name.value = '';
                        category_number.value = '';
                        description.value = '';
                        this.setState({selectedTax:''});
                    }}
                >

                    <ModalBody>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="category_name">Category Name</Label>
                                    <input
                                        defaultValue={selectedData?selectedData.category_name:''}
                                        className="form-control"
                                        type="text"
                                        name="category_name"
                                        id="category_name"
                                        ref={node => (category_name = node)}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category_number">Category Number</Label>
                                    <input
                                        defaultValue={selectedData?selectedData.category_number:''}
                                        className="form-control"
                                        type="text"
                                        name="category_number"
                                        id="category_number"
                                        ref={node => (category_number = node)}
                                        required
                                    />{err? <span className='text-danger'>This field must be unique</span> : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category_tax">Category Tax</Label>
                                    <Select
                                        classNamePrefix="select"
                                        id="category_tax"
                                        name="category_tax"
                                        value={selectedTax}
                                        onChange={this.handleTaxChange}
                                        options={CATEGORY_TAX}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <textarea
                                        defaultValue={selectedData?selectedData.description:''}
                                        className="form-control height-133"
                                        name="description"
                                        id="description"
                                        ref={node => (description = node)}
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
export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);

