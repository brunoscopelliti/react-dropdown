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
    <ul>
      <li>
        <a href="#account">Account</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  ),
  label: "Demo",
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  children: (
    <div />
  ),
  disabled: true,
  label: "Demo",
};
