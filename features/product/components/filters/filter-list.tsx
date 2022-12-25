import React from "react";
import styled from "styled-components";

type FilterListProps = {
  title: string;
  items: string[];
};

const FilterListStyles = styled.div``;

const Title = styled.h4`
  font-weight: 300;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 160% */
  margin: 3.2rem 0;
  letter-spacing: 0.2px;

  /* text-color */

  color: #252b42;
`;

const ListItem = styled.p`
  font-weight: 300;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 160% */
  margin-top: 1.6rem;
  letter-spacing: 0.2px;

  /* second-text-color */

  color: #737373;
`;

export function FilterList({ title, items }: FilterListProps) {
  return (
    <FilterListStyles>
      <Title>{title}</Title>
      {items.map((item: string) => {
        return <ListItem key={item}>{item}</ListItem>;
      })}
    </FilterListStyles>
  );
}
