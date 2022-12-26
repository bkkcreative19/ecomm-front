import React, { useState } from "react";
import styled, { css } from "styled-components";
import { color } from "../../../styles/theme";
import { FiCheck } from "react-icons/fi";
import { useStore } from "../../../store";

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium";
  label: string;
  disabled: boolean;
  title: string;
}

const StyledCheckbox = styled.div<CheckboxProps>`
  display: flex;
  align-items: center;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  & input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  & input:disabled ~ div {
    background: ${color("gray", 100)} !important;
    border: 1px solid ${color("gray", 200)} !important;
  }

  & input:disabled ~ div img {
    opacity: 0.2;
    filter: grayscale(80%);
  }
  & input:disabled ~ span {
    color: ${color("gray", 300)} !important;
  }

  & div {
    margin-right: 8px;
  }
`;

const Label = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: 0.2px;

  /* second-text-color */

  color: #737373;

  &:focus-within {
    color: red;
  }
`;

type IconContainerProps = {
  status: string;
  tabIndex: number;
  disabled: boolean;
};

const IconnContainer = styled.div<IconContainerProps>`
  box-sizing: border-box;
  height: 16px;
  width: 16px;
  padding: 5px 4px;
  border: 1px solid #7f56d9;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f9f5ff important;
    border: 1px solid #7f56d9 important;
  }
`;

const Iconn = styled.img`
  fill: red;
  stroke: red;
`;

export function Checkbox({
  children,
  size,
  label,
  disabled,
  title,
  ...props
}: CheckboxProps) {
  const [status, setStatus] = useState("notChecked");
  const { changeFilters, removeFilters } = useStore();

  return (
    <StyledCheckbox title={title} size={size} label={label} disabled={disabled}>
      <input disabled={disabled} />
      <IconnContainer
        onClick={() => {
          if (status === "notChecked") {
            setStatus("isChecked");
            changeFilters(title, label);
          } else {
            setStatus("notChecked");
            removeFilters(title, label);
          }
        }}
        style={{
          height: size === "small" ? "16px" : "20px",
          width: size === "small" ? "16px" : "20px",
          borderRadius: size === "small" ? "4px" : "6px",
          backgroundColor: status === "notChecked" ? "#ffffff" : "#F9F5FF",
          border:
            status === "notChecked" ? "1px solid #D0D5DD" : "1px solid #7f56d9",
        }}
        status={status}
        tabIndex={1}
        disabled={disabled}
      >
        {status === "isChecked" && <FiCheck size={"4rem"} />}
      </IconnContainer>
      <Label>{label}</Label>
    </StyledCheckbox>
  );
}
