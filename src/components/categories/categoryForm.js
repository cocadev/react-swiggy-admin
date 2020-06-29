// import React, { Component } from "react";
// import Select from "react-select";
// import { Redirect } from 'react-router'
// import { Row, Col, Button, FormGroup, Label} from "reactstrap";
// import { Formik, Field, Form } from "formik";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as categoryAction from "../../redux/actions/categoryAction";
// import * as Yup from "yup";
// import { category_tax_option } from '../../config'
// import UtilService from "../../utils";
// import _ from "underscore";
//
// const formSchema = Yup.object().shape({
//    category_name: Yup.string().required("Required"),
// });
//
// class CategoryFormC extends Component {
//
//    constructor(props) {
//       super(props);
//       this.state = {
//           redirect:false,
//           categoryError:false,
//           err:false,
//       };
//    }
//
//     handleCategoryChange = (e, setFieldValue) => {
//         setFieldValue('category_tax', e.value, false);
//     };
//
//     handleSubmition(values){
//
//       let mapping = _.find(this.props.category.categories, (u)=>{
//             return u.category_number === values.category_number
//       });
//
//       if (mapping){
//           let filter = this.props.selectedData?this.props.selectedData.category_number:'';
//           if(values.category_number !== filter){
//               this.setState({err:true});
//               return false
//           }
//       }
//
//       this.props.selectedData ? this.props.actions.updateCategory(values) : this.props.actions.createCategory(values);
//       this.setState({
//          ...values,
//          redirect:true
//       })
//    }
//
//     validate(){
//         this.setState({
//             formError: false
//         })
//     }
//
//    render() {
//       if(this.state.redirect){
//          return (<Redirect to='/categories'/>)
//       }
//       let { selectedData } = this.props;
//       return (
//          <div>
//             <Formik
//                        initialValues={{
//                           id:selectedData?selectedData.id : this.props.category.categories.length+1,
//                           category_name: selectedData?selectedData.category_name : "",
//                           category_number:selectedData?selectedData.category_number: "",
//                           category_tax:selectedData?selectedData.category_tax: "",
//                           description:selectedData?selectedData.description: ""
//                        }}
//                        validationSchema={formSchema}
//                        validate={ev => this.validate(ev)}
//                        onSubmit={values => this.handleSubmition(values)}
//                     >
//                            {({ setFieldTouched, setFieldValue, errors, touched }) => (
//                               <Form>
//                                    <div className="form-body">
//                                        {this.props.topBorder ? <hr/> : null}
//                                        <Row>
//                                              <Col md="6">
//                                                 <FormGroup>
//                                                    <Label for="category_name">Category name</Label>
//                                                    <Field name="category_name" id="category_name" className={`form-control ${errors.category_name && touched.category_name && 'is-invalid'}`} />
//                                                    {errors.category_name && touched.category_name ? <div className="invalid-feedback">{errors.category_name}</div> : null}
//                                                 </FormGroup>
//                                                  <FormGroup>
//                                                      <Label for="required">Category Number</Label>
//                                                      <Field name="category_number" id="category_number" className={`form-control ${errors.category_number && touched.category_number && 'is-invalid'}`} />
//                                                      {this.state.err ? <div className="invalid-feedback force_display">{'Category number should be unique.'}</div> : null}
//                                                  </FormGroup>
//                                                  <FormGroup>
//                                                      <Label for="required">Category Tax</Label>
//                                                      <Select
//                                                          defaultValue={UtilService.filterParam(this.props.selectedData, category_tax_option)}
//                                                          classNamePrefix="select"
//                                                          id="category_tax"
//                                                          name="category_tax"
//                                                          onChange={ev => this.handleCategoryChange(ev, setFieldValue)}
//                                                          options={category_tax_option}
//                                                      />
//                                                  </FormGroup>
//                                              </Col>
//
//                                              <Col md="6">
//                                                  <FormGroup>
//                                                      <Label for="minlength">Description</Label>
//                                                      <Field component="textarea" name="description" id="description" className="form-control height-133" />
//                                                  </FormGroup>
//                                              </Col>
//
//                                        </Row>
//
//                                        <Button type="submit">{this.props.buttonName}</Button>
//                                  </div>
//                               </Form>
//                            )}
//                         </Formik>
//          </div>
//       );
//    }
// }
//
// const mapStateToProps = ({ category }) => ({ category });
// const mapDispatchToProps = (dispatch) => ({
//     actions: bindActionCreators({ ...categoryAction }, dispatch),
// });
// export const CategoryForm = connect(mapStateToProps, mapDispatchToProps)(CategoryFormC);
//
