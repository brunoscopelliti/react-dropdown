import React from "react";

export type DropdownProps = {
  "aria-labelledby" ?: string;
  children : React.ReactNode;
  className ?: string;
  disabled ?: boolean;
  label : React.ReactNode;
  role : "listbox" | "menu";
};

declare const Dropdown: React.FC<DropdownProps>;

export default Dropdown;
