import { MouseEventHandler } from "react";
import { ToggleButtonWrapper } from "./AddTaskModal.wrappers";

export const ToggleButton = ({
  text,
  isSelected,
  onClick,
}: {
  text: string;
  isSelected: boolean;
  onClick: MouseEventHandler;
}) => (
  <ToggleButtonWrapper isSelected={isSelected} onClick={onClick}>
    {text}
  </ToggleButtonWrapper>
);
