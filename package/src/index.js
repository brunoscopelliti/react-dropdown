import React from "react";
import PropTypes from "prop-types";

import cssClass from "@bscop/css-class";

import useBool from "@bscop/use-bool";
import useClickOut from "@bscop/use-click-out";
import useId from "@bscop/use-id";
import useForwardRef from "@bscop/use-forward-ref";

import DropdownContent from "./content";
import DropdownHook from "./hook";

const Dropdown = React.forwardRef(
  /**
   * @param {import("./index").DropdownProps} props
   * @param {React.ForwardedRef<HTMLDivElement>} maybeRef
   */
  function Dropdown (props, maybeRef) {
    const [visible, show, hide] = useBool();

    /**
     * When it is used as dropdown menu the
     * dropdown content should be closed as soon
     * as the user clicks outside the wrapper.
     * @type React.RefObject<HTMLDivElement>
     */
    const ref = useClickOut(hide, { active: visible, ref: maybeRef });

    return (
      <ControlledDropdown
        {...props}
        ref={ref}
        hide={hide}
        show={show}
        visible={visible}
      />
    );
  }
);

Dropdown.propTypes = {
  "aria-labelledby": PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  role: PropTypes.string.isRequired,
};

const ControlledDropdown = React.forwardRef(
  /**
   * @param {import("./index").ControlledDropdownProps} props
   * @param {React.ForwardedRef<HTMLDivElement>} maybeRef
   */
  function ControlledDropdown (props, maybeRef) {
    const {
      "aria-labelledby": labelledby,
      "aria-activedescendant": activedescendant,
      children,
      className,
      disabled,
      hide,
      label,
      onBlur,
      onKeyDown,
      role,
      show,
      visible,
    } = props;

    const ref = useForwardRef(maybeRef);

    const buttonId = useId({ prefix: "dd-hook" });

    return (
      <div ref={ref} className={cssClass("ui-dropdown", className)} >
        <DropdownHook
          aria-labelledby={labelledby}
          aria-haspopup={role}
          disabled={disabled}
          id={buttonId}
          label={label}
          show={show}
          visible={visible}
        />
        <DropdownContent
          aria-activedescendant={activedescendant}
          aria-labelledby={labelledby || buttonId}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          role={role}
          visible={visible}
        >
          {
            typeof children == "function"
              ? children(hide)
              : children
          }
        </DropdownContent>
      </div>
    );
  }
);

ControlledDropdown.propTypes = {
  ...Dropdown.propTypes,
  "aria-activedescendant": PropTypes.string,
  hide: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Dropdown;

export { ControlledDropdown };
