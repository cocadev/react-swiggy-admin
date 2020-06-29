import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";

import * as Icon from "react-feather";

import { StaticCardData } from "../cards/staticCardData";
import { AdvancedCardData } from "../cards/advancedCardData";

import MinimalStatisticsChart from "../../components/cards/minimalStatisticsWithChartCard";
import ProductsSalesChartCard from "../../components/cards/productsSalesChartCard";

import MonthlySalesStatisticsBarChartCard from "../../components/cards/monthlySalesStatisticsBarChartCard";
import ShoppingCartCard from "../../components/cards/shoppingCartCard";

import VisitSalesStatisticsCard from "../../components/cards/visitSalesStatistics";
import WeeklyStatisticsLineChartCard from "../../components/cards/weeklyStatisticsLineChartCard";

import HobbiesStatisticsBarChartCard from "../../components/cards/hobbiesStatisticsBarChartCard";
import UserListCard from "../../components/cards/userListCard";
import ProjectStatsDonutChartCard from "../../components/cards/projectStatsDonutChartCard";

// Styling

class Dashboard1 extends Component {
   render() {
      return (
         <Fragment>
            {/* Minimal statistics charts */}
            <Row className="row-eq-height">
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart
                     chartData={StaticCardData.ChartistData}
                     range='80'
                     color="text-info"
                     cardBgColor="bg-white"
                     statistics="850"
                     text="Products Sold"
                     iconSide="right"
                     rangeColor="info"
                  >
                     <Icon.PieChart size={36} strokeWidth="1.3" color="#1CBCD8" />
                  </MinimalStatisticsChart>
               </Col>
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart
                     chartData={StaticCardData.ChartistData}
                     range='70'
                     color="text-warning"
                     cardBgColor="bg-white"
                     statistics="$748"
                     text="Net Profit"
                     iconSide="right"
                     rangeColor="warning"
                  >
                     <Icon.Box size={36} strokeWidth="1.3" color="#FF8D60" />
                  </MinimalStatisticsChart>
               </Col>
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart
                     chartData={StaticCardData.ChartistData}
                     range='75'
                     cardBgColor="bg-white"
                     color="text-success"
                     statistics="146"
                     text="New Customers"
                     iconSide="right"
                     rangeColor="success"
                  >
                     <Icon.Filter size={36} strokeWidth="1.3" color="#0CC27E" />
                  </MinimalStatisticsChart>
               </Col>
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart
                     chartData={StaticCardData.ChartistData}
                     range='85'
                     color="text-danger"
                     cardBgColor="bg-white"
                     statistics="99.89%"
                     text="Customer Satisfaction"
                     iconSide="right"
                     rangeColor="danger"
                  >
                     <Icon.DollarSign size={36} strokeWidth="1.3" color="#FF586B" />
                  </MinimalStatisticsChart>
               </Col>
            </Row>
            {/* VISIT & SALES STATISTICS */}
            <Row>
               <Col sm="12">
                  <ProductsSalesChartCard
                     productsSalesData={AdvancedCardData.ProductsSalesData}
                     cardTitle="Products Sales"
                     salesText="Sales"
                     visitText="Visits"
                  />
               </Col>
            </Row>
            {/* Momthly Statistics & Shopping Cart */}
            <Row className="row-eq-height">
               <Col sm="12" md="4">
                  <MonthlySalesStatisticsBarChartCard
                     monthlySalesStatisticsBarChartData={AdvancedCardData.MonthlySalesStatisticsBarChartData}
                     cardTitle="Statistics"
                     cardSubTitle="Last 6 Months Sales"
                  />
               </Col>
               <Col sm="12" md="8">
                  <ShoppingCartCard shoppingCart={AdvancedCardData.ShoppingCart} cardTitle="Shopping Cart" />
               </Col>
            </Row>
            {/* Visit - Sales Statistics & Weekly Statistics */}
            <Row className="row-eq-height">
               <Col sm="12" md="8">
                  <VisitSalesStatisticsCard
                     visitSalesData={AdvancedCardData.VisitSalesData}
                     cardTitle="Visit & Sales Statistics"
                     salesText="Sales"
                     visitText="Visits"
                  />
               </Col>
               <Col sm="12" md="4">
                  <WeeklyStatisticsLineChartCard
                     weeklySalesStatisticsBarChartData={AdvancedCardData.WeeklySalesStatisticsBarChartData}
                     cardBgColor="gradient-blackberry"
                     cardTitle="Statistics"
                     statisticsAmount="$ 78.89"
                     statisticsRangeAmount="Week2 +15.44"
                  />
               </Col>
            </Row>
            {/* Hobbies, USer List & Projects Stats */}
            <Row className="row-eq-height">
               <Col sm="12" md="4">
                  <ProjectStatsDonutChartCard
                     projectStatsDonutChartData={AdvancedCardData.ProjectStatsDonutChartData}
                     cardTitle="Projects Stats"
                     cardSubTitle="Project Tasks"
                  />
               </Col>

               <Col sm="12" md="4">
                  <UserListCard userListData={AdvancedCardData.UserListData} cardTitle="Users List" />
               </Col>
               <Col sm="12" md="4">
                  <HobbiesStatisticsBarChartCard
                     hobbiesStatisticsBarChartData={AdvancedCardData.HobbiesStatisticsBarChartData}
                     cardTitle="Statistics"
                     cardSubTitle="Hobbies"
                  />
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default Dashboard1;
