import Card from "../Card";
import Icon from "../Icon";
import {  IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

type IStatsCardProp = {
    className?: string;
    icon: IconDefinition;
    value: number;
    percentageIncrease: number;  
}

const StyledStatsValue = styled.span`
    font-weight: bold;
    font-size:1.5em;
    padding: 0.2em 0 0.2em 0;
`;

const StyledPercentageIncrease = styled.span`
  font-size: 0.8em;
  padding: 0.2em 0 0.2em 0;
  color: #abbacb;
`;

const StatsCard = ({
    className,
    icon,
    value,
    percentageIncrease,
}: IStatsCardProp) => {

    console.log("value", value);
    return (
      <Card>
        <div className={className}>
          <Icon icon={icon} iconSize="2x" />
          <StyledStatsValue>{value}</StyledStatsValue>
          <StyledPercentageIncrease>
            <strong>{percentageIncrease}%</strong> this week
          </StyledPercentageIncrease>
        </div>
      </Card>
    );
};

export default StatsCard;




