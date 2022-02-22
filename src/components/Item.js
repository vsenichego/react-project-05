import React, { useState } from "react";
import { StyledButtonItem } from "../styled-components/StyledButtonItem";
import { StyledItemInfo } from "../styled-components/StyledItemInfo"
import { StyledButtonWrapFlex } from "../styled-components/StyledButtonWrapFlex";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <>
      <StyledItemInfo>
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </StyledItemInfo>
      <StyledButtonWrapFlex>
        <StyledButtonItem
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </StyledButtonItem>
        <h3>{total ? total : ""}</h3>
        <StyledButtonItem onClick={handleAddClick}>
          +
        </StyledButtonItem>
      </StyledButtonWrapFlex>
    </>
  );
}
