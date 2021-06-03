import React from "react";
import PropTypes from "prop-types";

import cssClass from "@bscop/css-class";

import useBool from "@bscop/use-bool";
import useClickOut from "@bscop/use-click-out";
import useId from "@bscop/use-id";
import useForwardRef from "@bscop/use-forward-ref";

import DropdownContent from "./content";
import DropdownHook from "./hook";

const Dropdown =
  (props) => {
    const [visible, show, hide] = useBool();

    /**
     * When it is used as dropdown menu the
     * dropdown content should be closed as soon
     * as the user clicks outside the wrapper.
     */
    const ref = useClickOut(hide, visible);

    return (
      <ControlledDropdown {...props} ref={ref} visible={visible} show={show} />
    );
  };

Dropdown.propTypes = {
  "aria-labelledby": PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  onBlur: PropTypes.func,
  role: PropTypes.string.isRequired,
};

export default Dropdown;

const ControlledDropdown = React.forwardRef(
  /**
   * @param {import("./index").ControlledDropdownProps} props
   * @param {React.ForwardedRef<HTMLDivElement>} maybeRef
   */
  (props, maybeRef) => {
    const {
      "aria-labelledby": labelledby,
      "aria-activedescendant": activedescendant,
      children,
      className,
      disabled,
      label,
      onBlur,
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
          role={role}
          visible={visible}
        >
          {children}
        </DropdownContent>
      </div>
    );
  }
);

ControlledDropdown.propTypes = {
  ...Dropdown.propTypes,
  "aria-activedescendant": PropTypes.string,
  visible: PropTypes.bool.isRequired,
  show: PropTypes.func.isRequired,
};

export { ControlledDropdown };
