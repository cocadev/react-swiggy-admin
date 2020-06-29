// import external modules
import React, {Component, Fragment} from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import { Bar, Pie } from "react-chartjs-2";
import { BarData, PieData } from "../../views/charts/chartjs/chartData";

class ChartForm extends Component {

    render() {
        return (
            <Fragment>
                <Row>
                    <Col sm="12" md="6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Top {this.props.type}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Pie height={400} data={PieData.data} options={PieData.options}/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="6">
                        <Card>
                            <CardHeader>
                                <CardTitle>{this.props.type} by Date</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Bar height={400} data={BarData.data} options={BarData.options}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default ChartForm;
