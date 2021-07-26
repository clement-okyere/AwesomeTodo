import { Link } from "react-router-dom";
import styled from "styled-components";
import { IRoute } from "../../utils/routes";
import Icon from "../Icon";

type IMenuItemProp = {
  route: IRoute;
  className?: string;
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledNavIcon = styled(Icon)`
  margin-right: 1em;
`;


const MenuItem = ({ route, className }: IMenuItemProp) => {
  return (
    <div className={className}>
      <StyledNavIcon icon={route.icon} />
      <li>
        <StyledLink to={route.path}>{route.name}</StyledLink>
      </li>
    </div>
  );
};

export default MenuItem;


