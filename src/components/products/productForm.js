import React, { Component } from "react";
import DateRangePicker from "./../calender/dateRangePickerOA";
import Select from "react-select";
import UtilService from "../../utils"

import { Redirect } from 'react-router'
import { Row, Col, Button, FormGroup, Label} from "reactstrap";
import { Formik, Field, Form } from "formik";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Yup from "yup";
import * as productAction from "../../redux/actions/productAction";
import * as categoryAction from "../../redux/actions/categoryAction";

const formSchema = Yup.object().shape({
   short_description: Yup.string().required("Required"),
   product_name: Yup.string().required("Required"),
   article_number: Yup.string().min(3, "Too Short!").required("Required"),
});

class ProductFormC extends Component {
   constructor(props) {
      super(props);
      this.state = {
          categoryError: false,
          formError: false,
          dateRange: this.props.selectedData?this.props.selectedData.availability_period:"",
          redirect:false,
          option: []
      };
      this.handlePeriodSelection = this.handlePeriodSelection.bind(this)
   }

   componentDidMount(){
       this.setState({
           options: this.props.category.categories,
           option: UtilService.filterParam(this.props.selectedData, this.props.category.categories)
       })
   }

   handleCategoryChange = (e, setFieldValue) => {
      setFieldValue('category', e, false);
      if(e.category === ""){
         this.setState({
            categoryError: true
         })
      }else{
         this.setState({
            categoryError: false
         })
      }
    };

   handlePeriodSelection(picker){
       this.setState({
           dateRange: picker.startDate.format('D/MM/YYYY') + " - " + picker.endDate.format('D/MM/YYYY')
       })
   }

    validate(values){
        if(values.category === ''){
            this.setState({
                categoryError: true,
                formError: true
            })
        }else {
            this.setState({
                formError: false
            })
        }
    }

   handleSubmition(values){
      if(this.state.formError){return false}
      values.availability_period = this.state.dateRange;
      values.category = values.category.category_name;
      if(values.category === undefined){values.category = this.state.option.category_name}
      this.props.selectedData ? this.props.actions.updateProduct(values) : this.props.actions.createProduct(values);
      this.setState({
         ...values,
         redirect:true
      })
   }

   render() {
      if(this.state.redirect){
         return (<Redirect to='/products'/>)
      }
      let { selectedData } = this.props;
       return (
         <div>
            <Formik
                       initialValues={{
                          id:selectedData?selectedData.id : this.props.product.products.length+1,
                          product_name: selectedData?selectedData.product_name : "",
                          article_number:selectedData?selectedData.article_number: "",
                          availability_period: selectedData?selectedData.availability_period: "",
                          category: selectedData?selectedData.category: "",
                          short_description:selectedData?selectedData.short_description: "",
                          long_description:selectedData?selectedData.long_description: ""
                       }}
                       validationSchema={formSchema}
                       validate={ev => this.validate(ev)}
                       onSubmit={values => this.handleSubmition(values)}
                    >
                           {({ setFieldTouched, setFieldValue, errors, touched }) => (
                              <Form>

                                   <div className="form-body">
                                       {this.props.topBorder ? <hr/> : null}
                                       <Row>
                                             <Col md="6">
                                                <FormGroup>
                                                   <Label for="product_name">Product name</Label>
                                                   <Field name="product_name" id="product_name" className={`form-control ${errors.product_name && touched.product_name && 'is-invalid'}`} />
                                                   {errors.product_name && touched.product_name ? <div className="invalid-feedback">{errors.product_name}</div> : null}
                                                </FormGroup>
                                             </Col>
                                             <Col md="6">
                                                 <FormGroup>
                                                   <Label for="required">Article number</Label>
                                                   <Field name="article_number" id="article_number" className={`form-control ${errors.article_number && touched.article_number && 'is-invalid'}`} />
                                                   {errors.product_name && touched.article_number ? <div className="invalid-feedback">{errors.article_number}</div> : null}
                                                 </FormGroup>
                                             </Col>
                                       </Row>
                                       <Row>
                                             <Col md="6">
                                                <FormGroup>
                                                   <Label for="category">Category</Label>
                                                   <Select
                                                      defaultValue={UtilService.filterParam(this.props.selectedData, this.props.category.categories)}
                                                      getOptionLabel={option => option.category_name}
                                                      getOptionValue={option => option.category_name}
                                                      classNamePrefix="select"
                                                      id="category"
                                                      name="category"
                                                      onChange={ev => this.handleCategoryChange(ev, setFieldValue)}
                                                      options={this.state.options}
                                                   />
                                                    {this.state.categoryError? <div className="invalid-feedback force_display">Required</div> : null}

                                                </FormGroup>
                                             </Col>
                                             <Col md="6">
                                                <FormGroup>
                                                      <Label for="availability_period">Availability period</Label>
                                                       <DateRangePicker
                                                           action={this.handlePeriodSelection}
                                                       >
                                                          <Field type="text" name="availability_period" id="availability_period"
                                                                  value={this.state.dateRange}
                                                                  className={`form-control ${errors.availability_period && touched.availability_period && 'is-invalid'}`} />
                                                       </DateRangePicker>
                                                      {errors.availability_period && touched.availability_period ? <div className="invalid-feedback">{errors.availability_period}</div> : null}
                                                </FormGroup>
                                             </Col>
                                       </Row>
                                       <Row>
                                             <Col md="6">
                                                <FormGroup>
                                                   <Label for="date">Short description</Label>
                                                   <Field component="textarea"  type="text" name="short_description" id="short_description" className={`form-control ${errors.short_description && touched.short_description && 'is-invalid'}`} />
                                                   {errors.short_description && touched.short_description ? <div className="invalid-feedback">{errors.short_description}</div> : null}
                                                </FormGroup>
                                             </Col>
                                             <Col md="6">
                                                <FormGroup>
                                                   <Label for="minlength">Long description</Label>
                                                   <Field  component="textarea" name="long_description" id="long_description" className="form-control " />
                                                </FormGroup>
                                             </Col>
                                       </Row>
                                               <Button type="submit">{this.props.buttonName}</Button>
                                 </div>
                              </Form>
                           )}
                        </Formik>
         </div>
      );
   }
}

const mapStateToProps = ({ product, category }) => ({ product, category });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...productAction, ...categoryAction }, dispatch),
});
export const ProductForm = connect(mapStateToProps, mapDispatchToProps)(ProductFormC);

