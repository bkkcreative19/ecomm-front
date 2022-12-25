import React from "react";
import styled from "styled-components";
import { FilterList } from "./filter-list";
import { BsSearch } from "react-icons/bs";

const FilterStyles = styled.div`
  width: 20%;
`;

const InputContainer = styled.div`
  border: 1px solid #dadada;
  border-radius: 5px;

  padding: 1.6rem 0;
  display: flex;
  align-items: center;
  max-width: 186px;
  background: #f5f5f5;
  margin: 2.5rem 0 5.5rem 0;
`;

const Input = styled.input`
  border: none;
  font-weight: 400;
  background: transparent;

  &:focus {
    border: none;
    outline: none;
  }
  &:active {
    border: none;
    outline: none;
  }
`;

const Head = styled.h5`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height, or 138% */

  letter-spacing: 0.2px;
  margin-top: 25px;
  /* text-color */

  color: #252b42;
`;

const SearchIcon = styled(BsSearch)`
  margin: 0 20px;
`;

export function Filters() {
  return (
    <FilterStyles>
      <Head>Filter:</Head>
      <InputContainer>
        <SearchIcon size={"1.7rem"} color="#737373" />
        <Input placeholder="Search" type="text" />
      </InputContainer>

      <FilterList
        title="Bering"
        items={[
          "Bering",
          "Olivia burton",
          "Olivia burton",
          "Timberland",
          "Timex",
          "Nixon",
        ]}
      />
      <FilterList title="Cocomi" items={["Timberland", "Timex"]} />
      <FilterList title="Nixon" items={["Cocomi", "Timberland"]} />
    </FilterStyles>
  );
}
