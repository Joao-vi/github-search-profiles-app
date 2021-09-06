import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import styled from "styled-components";

export const WrapperTab = styled(Tabs)``;
export const MenuTab = styled(TabList)`
  display: flex;
  gap: 10px;
`;
export const OptionTab = styled(Tab)`
  list-style: none;
  padding: 10px;
  background-color: #03120e;
  color: white;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  user-select: none;
  &.react-tabs__tab--selected {
    background-color: #26413c;
  }
`;
export const ItemTab = styled(TabPanel)``;
