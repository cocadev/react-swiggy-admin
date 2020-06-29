import React from "react";
import { Row, Col, FormGroup, Input } from "reactstrap";
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import connect from "react-redux/es/connect/connect";
import "react-table/react-table.css";
import * as productAction from "../../redux/actions/productAction";
import { Search, Trash2  , EyeOff } from "react-feather";

const CheckboxTable = checkboxHOC(ReactTable);

class ReactSelectTableProductsC extends React.Component {

    constructor() {
        super();
        this.state = {
            selection: [],
            selectAll: false,
            redirect: false
        };
    }

    toggleSelection = (key, shift, row) => {
        let selection = [...this.state.selection];
        const keyIndex = selection.indexOf(key);
        if (keyIndex >= 0) {
            selection = [
                ...selection.slice(0, keyIndex),
                ...selection.slice(keyIndex + 1)
            ];
        } else {
            selection.push(key);
        }
        this.setState({ selection });
    };

    toggleAll = () => {
        const selectAll = this.state.selectAll ? false : true;
        const selection = [];
        if (selectAll) {
            const wrappedInstance = this.checkboxTable.getWrappedInstance();
            const currentRecords = wrappedInstance.getResolvedState().sortedData;
            currentRecords.forEach(item => {
                selection.push(item._original._id);
            });
        }
        this.setState({ selectAll, selection });
    };

    isSelected = key => {
        return this.state.selection.includes(key);
    };

    logSelection = () => {
        console.log("selection:", this.state.selection);
    };

    delSelection = () => {
        console.log("del selection:1", this.state.selection);
        this.props.actions.deleteProduct(this.state.selection);
    };

    renderRedirect = () => {
        let path = '/'+ this.props.type +'/profile/' + this.state.num;
        if (this.state.redirect) {
            return <Redirect to={path} />
        }
    };

    render() {
        const { toggleSelection, toggleAll, isSelected } = this;
        const { selectAll } = this.state;
        const { data, columns } = this.props;

        const checkboxProps = {
            selectAll,
            isSelected,
            toggleSelection,
            toggleAll,
            selectType: "checkbox",
            getTrProps: (state, rowInfo,) => {
                const selected = this.isSelected(rowInfo&&rowInfo.original._id);
                return {
                    style: {
                        backgroundColor: selected ? "lightgreen" : "inherit"
                    },
                    onClick: () => {
                        this.setState({redirect: true, num:rowInfo.index + 1});
                        this.props.actions.setProduct(rowInfo.original)
                    }
                };
            }
        };

        return (
            <div>
                <Row>
                    <Col xs="12" md="6" xl="6">
                        <FormGroup>
                            <div className="position-relative ">
                                <Input className=" pl-4 round" type="text" id="iconLeft" name="iconLeft" placeholder='Search'/>
                                <div className="position-absolute icon-position">
                                    <Search size={20} className="info" />
                                </div>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col xs="12" md="3"></Col>
                    <Col xs="12" md="3">
                        <div className="right-float">
                            <button className="btn btn-danger">
                                <Trash2 size="16" /> Delete
                            </button> {" "}
                            <button className="btn btn-danger">
                                <EyeOff size="16" /> Disable
                            </button>
                        </div>
                    </Col>
                </Row>
                {
                    data&&
                    <CheckboxTable
                        ref={r => (this.checkboxTable = r)}
                        data={data}
                        columns={columns}
                        defaultPageSize={15}
                        className="-highlight"
                        {...checkboxProps}
                    />
                }
                {this.renderRedirect()}
            </div>
        );
    }
}

const mapStateToProps = ({ product }) => ({ product });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...productAction }, dispatch),
});
export const ReactSelectTableProducts = connect(mapStateToProps, mapDispatchToProps)(ReactSelectTableProductsC);

