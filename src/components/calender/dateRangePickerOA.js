import React from "react";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

export default class DateRangePickerOA  extends React.Component {
    constructor(props) {
        super(props);
        this.handleAppy = this.handleAppy.bind(this);
    }
    handleAppy(event, picker){
        this.props.action(picker)
    }
    render(){
        return(
            <div>
                <DateRangePicker  onApply={this.handleAppy}>
                    {this.props.children}
                </DateRangePicker>
            </div>
        )
    }
}