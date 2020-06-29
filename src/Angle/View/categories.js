import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentHeaderButtons from "../../components/contentHead/contentHeaderButtons";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import connect from "react-redux/es/connect/connect";
import UtilService from '../../utils'
import { Card, CardBody, Row, Col, Modal, ModalHeader } from "reactstrap";
import { FilePlus } from "react-feather";
import  MainCheckBoxTable  from "../Table/mainCheckBoxTable"
import { bindActionCreators } from "redux";
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import * as categoryAction from "../../redux/actions/categoryAction";
import {CATEGORIES_COLUMN} from "../../config";
import CategoryForm from "../Form/CategoryForm";

class LazyCategories extends Component {

    constructor(){
        super();
        this.state={
            modal:false
        };
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Col md="8">
                        <ContentHeader>Categories</ContentHeader>
                        <ContentSubHeader>
                            Test
                        </ContentSubHeader>
                    </Col>
                    <Col md="4">
                        <ContentHeaderButtons className="content-header-btn">
                            <div className="btn btn-primary" onClick={this.toggle}>
                                <FilePlus size={16} color="#FFF" />
                                {" "} New Category
                            </div>
                        </ContentHeaderButtons>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <MainCheckBoxTable type={'categories'} data={UtilService.getData(this.props.category.categories)} columns={CATEGORIES_COLUMN}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <ModalHeader toggle={this.toggle}>Add Category</ModalHeader>
                    <CategoryForm />
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ category }) => ({ category });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...categoryAction }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(LazyCategories);

