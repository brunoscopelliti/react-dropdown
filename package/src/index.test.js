import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Dropdown from "./";

describe("Dropdown", () => {
  it("renders the dropdown", () => {
    render(
      <Dropdown
        label="Toggle menu"
        role="menu"
      >
        <a role="menuitem" href="#about">About</a>
        <a role="menuitem" href="#contact">Contact</a>
      </Dropdown>
    );

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Toggle menu");

    expect(button).not.toHaveAttribute("aria-expanded");
    expect(button).toHaveAttribute("aria-haspopup", "menu");
    expect(button).toHaveAttribute("aria-labelledby", button.id);

    const menu = screen.getByRole("menu", { hidden: true });

    expect(menu).toHaveAttribute("aria-labelledby", button.id);
    expect(menu).toHaveAttribute("hidden", "");
    expect(menu).toHaveAttribute("tabindex", "-1");

    const items = screen.getAllByRole("menuitem", { hidden: true });

    expect(items).toHaveLength(2);
  });

  it("renders the dropdown / disabled", () => {
    render(
      <Dropdown
        disabled
        label="Toggle menu"
        role="menu"
      >
        <a role="menuitem" href="#about">About</a>
        <a role="menuitem" href="#contact">Contact</a>
      </Dropdown>
    );

    expect(screen.getByRole("button")).toHaveAttribute("disabled", "");
  });

  it("open the dropdown when button is clicked", () => {
    render(
      <Dropdown
        label="Toggle menu"
        role="menu"
      >
        <a role="menuitem" href="#about">About</a>
        <a role="menuitem" href="#contact">Contact</a>
      </Dropdown>
    );

    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");

    const menu = screen.getByRole("menu");

    expect(menu).toBeVisible();
    expect(menu).toHaveFocus();
  });

  it("open the dropdown using keyboard / ArrowDown", async () => {
    render(
      <Dropdown
        label="Toggle menu"
        role="menu"
      >
        <a role="menuitem" href="#about">About</a>
        <a role="menuitem" href="#contact">Contact</a>
      </Dropdown>
    );

    const button = screen.getByRole("button");
    button.focus();

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-node-access
      expect(button).toBe(document.activeElement);
    });

    fireEvent.keyDown(document, { code: "ArrowDown" });

    expect(button).toHaveAttribute("aria-expanded", "true");

    const menu = screen.getByRole("menu");

    expect(menu).toBeVisible();
    expect(menu).toHaveFocus();
  });

  it("open the dropdown using keyboard / ArrowUp", async () => {
    render(
      <Dropdown
        label="Toggle menu"
        role="menu"
      >
        <a role="menuitem" href="#about">About</a>
        <a role="menuitem" href="#contact">Contact</a>
      </Dropdown>
    );

    const button = screen.getByRole("button");
    button.focus();

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-node-access
      expect(button).toBe(document.activeElement);
    });

    fireEvent.keyDown(document, { code: "ArrowUp" });

    expect(button).toHaveAttribute("aria-expanded", "true");

    const menu = screen.getByRole("menu");

    expect(menu).toBeVisible();
    expect(menu).toHaveFocus();
  });

  it.skip("close the dropdown when click outside", () => {
    render(
      <Dropdown
        label="Toggle menu"
        role="menu"
      >
        <a role="menuitem" href="#about">About</a>
        <a role="menuitem" href="#contact">Contact</a>
      </Dropdown>
    );

    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");

    userEvent.click(document.body);

    expect(button).not.toHaveAttribute("aria-expanded");
  });
});
