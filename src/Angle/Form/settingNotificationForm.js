import React, {Component} from "react";
import { Col, Row, Form, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as clientAction from "../../redux/actions/clientAction";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import "../../assets/scss/views/components/extra/switch.scss";

class NotificationForm extends Component {

    state = {
        productIsReady: false,
        userIsReady: true,
        orderIsReady: false,
    };

    render() {

        let { productIsReady, userIsReady, orderIsReady } = this.state;

        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                    }}
                >

                    <ModalBody>
                        <Row>
                            <Col md={12}>
                                    <div className="example">
                                        <label className="label-text float-left">Notify me on product change</label>

                                        <Toggle
                                            className='float-right'
                                            defaultChecked={productIsReady}
                                            icons={false}
                                            onChange={this.handleTofuChange}
                                        />
                                    </div>
                                <br/>
                                    <div className="example">
                                        <label className="label-text float-left">Notify me on user login</label>

                                        <Toggle
                                            className='float-right'
                                            defaultChecked={userIsReady}
                                            icons={false}
                                            onChange={this.handleTofuChange}
                                        />
                                    </div>
                                <br/>
                                    <div className="example">
                                        <label className="label-text float-left">Notify me on order change</label>

                                        <Toggle
                                            className='float-right'
                                            defaultChecked={orderIsReady}
                                            icons={false}
                                            onChange={this.handleTofuChange}
                                        />
                                    </div>
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

const mapStateToProps = ({ client }) => ({ client });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...clientAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(NotificationForm);

