import React from "react";
import styled from "styled-components";
import { getFirstName, getInitials } from "../../utils/helpers";

type IProfileAvatarProps = {
  fullname: string;
  className?: string;
};

const Initials = styled.span`
  margin: 0;
  background-color: white;
  width: max-content;
  border-radius: 50%;
  margin: 0;
  color: black;
  vertical-align: top;
  vertical-align: middle;
`;

const Greetings = styled.span`
  vertical-align: middle;
`;

const ProfileAvatar = ({ fullname, className }: IProfileAvatarProps) => {
  const initials = getInitials(fullname);
  return (
    <>
      <Initials>{initials}</Initials>
      <Greetings>&nbsp;&nbsp;Welcome {getFirstName(fullname)}</Greetings>
    </>
  );
};

export default ProfileAvatar;