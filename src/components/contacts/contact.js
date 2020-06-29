import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { Star, Trash } from "react-feather";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
        this.onApprove = this.onApprove.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onApprove(){
        this.props.onDeleteClick()
    }

    render() {
      let { onContactClick, onStarredClick, firstname, lastname, image, position, starred, active} = this.props;
        return (
            <li className={"list-group-item list-group-item-action no-border" + (active ? "bg-danger" : "")}>
                <Row>
                    <Col xs={3} onClick={onContactClick}>
                        <img src={image} className="rounded-circle filter-img" alt={image}/>
                    </Col>
                    <Col xs={7} onClick={onContactClick}>
                        <p className="mb-0 text-truncate">
                            {firstname} {lastname}
                        </p>
                        <p className="mb-0 text-muted font-small-3">{position}</p>
                    </Col>
                    <Col xs={2}>
                        <Trash size={18} onClick={this.toggle} className="float-right mt-1 mb-2 width-25 d-block"
                               style={{color: "#FF586B"}}/>
                        <Star
                            size={18}
                            onClick={onStarredClick}
                            className="float-right width-25 d-block"
                            style={{color: starred ? "#FFC107" : "#495057"}}
                        />
                    </Col>
                </Row>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggleNested}
                >
                    <ModalHeader>Remove Employeer</ModalHeader>
                    <ModalBody>Are you sure that remove this employeer?</ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>
                            Reject
                        </Button>{" "}
                        <Button color="primary" onClick={this.onApprove}>
                            Approve
                        </Button>
                    </ModalFooter>
                </Modal>
            </li>
        )
    }
}

Contact.propTypes = {
   firstname: PropTypes.string.isRequired,
   lastname: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   position: PropTypes.string.isRequired,
   starred: PropTypes.bool.isRequired,
   onStarredClick: PropTypes.func.isRequired,
   onDeleteClick: PropTypes.func.isRequired,
   onContactClick: PropTypes.func.isRequired
};

export default Contact;
