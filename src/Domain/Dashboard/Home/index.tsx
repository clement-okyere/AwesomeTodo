import StatsCard from "../../../Components/StatsCard";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import SectionTitle from "../../../Components/SectionTitle";


const StyledStatsCard = styled(StatsCard)`
 display: flex;
 flex-direction: column;
 width: 15em;
`

const StatsCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 0em;
`;

const Home = () => {
    return (
      <>
        <h1>Dashboard</h1>
        <StatsCardWrapper>
          <StyledStatsCard
            icon={faCalendarCheck}
            value={1200}
            percentageIncrease={14}
          />

          <StyledStatsCard
            icon={faCalendarCheck}
            value={1200}
            percentageIncrease={14}
          />

          <StyledStatsCard
            icon={faCalendarCheck}
            value={1200}
            percentageIncrease={14}
          />

          <StyledStatsCard
            icon={faCalendarCheck}
            value={1200}
            percentageIncrease={14}
          />
            </StatsCardWrapper>
            
        <SectionTitle title="Recent Tasks" />
      </>
    );
}

export default Home;