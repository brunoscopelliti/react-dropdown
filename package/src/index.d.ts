import React from "react";

export type DropdownProps = {
  "aria-labelledby" ?: string;
  children : React.ReactNode;
  className ?: string;
  disabled ?: boolean;
  label : React.ReactNode;
  onBlur ?: (event : React.FocusEvent) => void;
  onKeyDown ?: (event : React.KeyboardEvent) => void;
  role : string;
};

declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;

export default Dropdown;

export type ControlledDropdownProps = DropdownProps & {
  "aria-activedescendant" ?: string;
  hide : () => void;
  show : () => void;
  visible : boolean;
};

declare const ControlledDropdown: React.ForwardRefExoticComponent<ControlledDropdownProps & React.RefAttributes<HTMLDivElement>>;

export { ControlledDropdown };
