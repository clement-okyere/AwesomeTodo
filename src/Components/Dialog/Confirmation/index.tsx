import React from "react";
import styled from "styled-components";

type IAction = {
  name: string;
  action: () => void;
};

type IConfirmationDialogProps = {
  className?: string;
  visible: boolean;
  question: string;
  caption: string;
  actions?: IAction[];
};

const StyledCaption = styled.span`
  font-weight: bold;
  margin-bottom: 1em;
`;

const StyledQuestion = styled.span`
  margin-bottom: 1em;
`;

const StyledConfirmActionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;


const ConfirmationDialog = ({
  className,
  question,
  caption,
  actions,
}: IConfirmationDialogProps) => {
  return (
    <div className={className}>
      <StyledCaption>{caption}</StyledCaption>
      <StyledQuestion>{question}</StyledQuestion>
      <StyledConfirmActionsWrapper>
        {actions?.map((action, index) => (
          <button key={index} onClick={action.action}>
            {action?.name}
          </button>
        ))}
      </StyledConfirmActionsWrapper>
    </div>
  );
};

export default ConfirmationDialog;

