import React from "react";

export type DropdownProps = {
  "aria-labelledby" ?: string;
  children : React.ReactNode;
  className ?: string;
  disabled ?: boolean;
  label : React.ReactNode;
  onBlur ?: () => void;
  role : string;
};

declare const Dropdown: React.FC<DropdownProps>;

export default Dropdown;

export type ControlledDropdownProps = DropdownProps & {
  "aria-activedescendant" ?: string;
  show : () => void;
  visible : boolean;
};

declare const ControlledDropdown: React.ForwardRefExoticComponent<ControlledDropdownProps & React.RefAttributes<HTMLDivElement>>;

export { ControlledDropdown };
