import StatsCard from "../../../Components/StatsCard";
import { faCalendarCheck, faTasks } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import SectionTitle from "../../../Components/SectionTitle";
import HorizontalSpace from "../../../Components/Space/HorizontalSpace";
import Icon from "../../../Components/Icon";
import { Todo } from "../../../utils/types";


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

type IRecentActivitiesProp = {
  className?: string;
  todos: Todo[];
}

const Todos: Todo[] = [
  {
    name: "Dummy Task",
    createdAt: "2020-10-01",
    completed: true,
  },
  {
    name: "Dummy Task",
    createdAt: "2020-10-01",
    completed: true,
  },
  {
    name: "Dummy Task",
    createdAt: "2020-10-01",
    completed: true,
  },
  {
    name: "Dummy Task",
    createdAt: "2020-10-01",
    completed: true,
  },
];

const RecentActivities = ({ className, todos }: IRecentActivitiesProp) => {

  return (
   <>
      {
        todos.map((todo: Todo, index: number) => (
            <div className={className} key={index}>
               <span><Icon icon={ faTasks } /></span>
               <span>2021-10-01 11:10:03</span>
               <span>Name</span>
               <span>Status</span>
            </div>
        ))
      }
      </>
  );
};

const StyledRecentActivities = styled(RecentActivities)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  color: black;
  border-top: 1px solid #babfcc;
  padding: 0.5em;
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

        <HorizontalSpace />
        <HorizontalSpace />

        <SectionTitle title="Recent Tasks" />

        <StyledRecentActivities
          todos={Todos}
        />
      </>
    );
}

export default Home;