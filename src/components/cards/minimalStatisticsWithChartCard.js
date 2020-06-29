import React, { PureComponent } from "react";
import { Card, CardBody, Media, Progress } from "reactstrap";
import PropTypes from "prop-types";
import classnames from "classnames";


//Chsrtis JS 

//Chsrtis CSS
import "chartist/dist/chartist.min.css";
//Component specific chart CSS
import "../../assets/scss/components/cards/minimalStatisticsCardWithChart.scss";

class MinimalStatisticsChart extends PureComponent {
   render() {
      let iconLeft;
      let iconRight;
      let textDirection;

      if (this.props.iconSide === "right") {
         iconRight = this.props.children;
      } else {
         iconLeft = this.props.children;
         textDirection = "text-right";
      }
      return (
         <Card className={classnames(this.props.cardBgColor)}>
            <CardBody className="pt-3 pb-0">
               <Media>
                  {iconLeft}
                  <Media body className={classnames("", textDirection)}>
                     <h3 className={classnames("font-medium-3 mb-1", this.props.color)}>{this.props.statistics}</h3>
                     <span className={classnames("text-normal")}>{this.props.text}</span>
                  </Media>
                  {iconRight}
               </Media>
            </CardBody>
            <Progress color={this.props.rangeColor} value={this.props.range}/>
         </Card>
      );
   }
}

MinimalStatisticsChart.propTypes = {
   iconSide: PropTypes.string,   
   statisticsColor: PropTypes.string,
   statistics: PropTypes.string,
   cardBgColor: PropTypes.string,
   text: PropTypes.string,
   rangeColor: PropTypes.string,
   chartData: PropTypes.object
};

export default MinimalStatisticsChart;
