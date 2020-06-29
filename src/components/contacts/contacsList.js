import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import connect from "react-redux/es/connect/connect";

import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import { Star, Trash } from "react-feather";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as employeAction from "../../redux/actions/employAction";

class ContactsList extends Component {

    constructor(){
        super();
        this.state={
            modal:false
        };
        this.setEmploye = this.setEmploye.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onApprove = this.onApprove.bind(this);
    }

    setEmploye(data) {
        this.props.actions.setEmploye(data)
    };

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onApprove() {
       this.toggle();
       this.setEmploye(null);
       this.props.actions.deleteEmploye(this.props.employe.employeData.id);
    };

    render(){
        return(
            <div className="contact-app-list">
                <PerfectScrollbar>
                    {
                        this.props.list.map((data)=>(
                            <Row key={data.id} className='pl-2 pr-2 pb-1 -highlight' onClick={()=>{this.setEmploye(data)}}>
                                <Col xs={3} >
                                    <img src={data.img} className="rounded-circle filter-img" alt='No imaeg' />
                                </Col>
                                <Col xs={7} >
                                    <p className="mb-0 text-truncate">
                                        {data.firstname} {data.lastname}
                                    </p>
                                    <p className="mb-0 text-muted font-small-3">{data.position}</p>
                                </Col>
                                <Col xs={2}>
                                    <Trash size={18} onClick={this.toggle} className="float-right mt-1 mb-2 width-25 d-block"
                                           style={{color: "#FF586B"}}/>
                                    <Star
                                        size={18}
                                        className="float-right width-25 d-block"
                                        // style={{color: starred ? "#FFC107" : "#495057"}}
                                    />
                                </Col>
                                <Modal
                                    isOpen={this.state.modal}
                                    toggle={this.toggleNested}
                                >
                                    <ModalHeader>Remove Employeer</ModalHeader>
                                    <ModalBody>Are you sure that remove this employeer?</ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={()=>this.toggle()}>
                                            Reject
                                        </Button>{" "}
                                        <Button color="primary" onClick={()=>this.onApprove()}>
                                            Approve
                                        </Button>
                                    </ModalFooter>
                                </Modal>
                            </Row>
                            )
                        )
                    }
                </PerfectScrollbar>
            </div>
        )
    }
}

const mapStateToProps = ({ employe }) => ({ employe });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...employeAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

