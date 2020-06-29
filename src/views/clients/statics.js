// import external modules
import React, { Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import { Bar, Pie } from "react-chartjs-2";
import { BarData, PieData } from "../../views/charts/chartjs/chartData";

const ChartJS = props => (
    <Fragment>
        <Row>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader>
                        <CardTitle>Top Orders</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Pie height={400} data={PieData.data} options={PieData.options} />
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader>
                        <CardTitle>Orders by Date</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Bar height={400} data={BarData.data} options={BarData.options} />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Fragment>
);

export default ChartJS;
