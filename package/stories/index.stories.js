import React from "react";

import Dropdown from "../src";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const Template = (args) => {
  return (
    <Dropdown {...args} />
  );
};

export const SimpleDropdown = Template.bind({});
SimpleDropdown.args = {
  children: (
    <>
      <a role="menuitem" href="#account">Account</a>
      <a role="menuitem" href="#about">About</a>
      <a role="menuitem" href="#contact">Contact</a>
      <hr />
      <a role="menuitem" href="#logout">Logout</a>
    </>
  ),
  label: "Demo",
  role: "menu",
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  children: (
    <div />
  ),
  disabled: true,
  label: "Demo",
};
