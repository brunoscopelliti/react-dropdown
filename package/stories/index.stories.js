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
    <div className="dropdown-story-content">
      Hello, world!
    </div>
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
