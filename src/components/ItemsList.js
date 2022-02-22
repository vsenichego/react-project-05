import React from "react";
import Item from "./Item";
import { StyledButtonRemove } from "../styled-components/StyledButtonRemove";
import { StyledItemList } from "../styled-components/StyledItemList";

export default function ItemsList(props) {
  return (
    <StyledItemList>
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <StyledButtonRemove onClick={() => props.onRemoveButton(item.id)}>
            Удалить
          </StyledButtonRemove>
        </li>
      ))}
    </StyledItemList>
  );
}
