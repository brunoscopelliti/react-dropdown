import React from "react";

import Dropdown from "../src";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const SimpleDropdown = Template.bind({});
SimpleDropdown.args = {
  children: (
    <div>TODO!</div>
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
