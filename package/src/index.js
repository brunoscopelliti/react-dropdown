import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import cssClass from "@bscop/css-class";

import useBool from "@bscop/use-bool";
import useClickOut from "@bscop/use-click-out";
import useId from "@bscop/use-id";
import useForwardRef from "@bscop/use-forward-ref";

const useKeydownWhenActive =
  (el, onKeydown) => {
    const [hasFocus, onFocus, onBlur] = useBool(el === document.activeElement);

    useEffect(
      () => {
        if (hasFocus) {
          document.addEventListener("keydown", onKeydown);
          return () => {
            document.removeEventListener("keydown", onKeydown);
          };
        }
      },
      [hasFocus, onKeydown]
    );

    return { onBlur, onFocus };
  };

const DropdownHook =
  (props) => {
    const {
      "aria-labelledby": labelledby,
      id,
      label,
      show,
      visible,
      ...hookProps
    } = props;

    const ref = useRef(null);

    const onKeydown =
      (event) => {
        switch (event.code) {
          case "ArrowDown":
          case "ArrowUp":
            show();
            break;
        }
      };

    const { onBlur, onFocus } = useKeydownWhenActive(ref.current, onKeydown);

    return (
      <button
        ref={ref}
        {...hookProps}
        aria-expanded={visible || undefined}
        aria-labelledby={
          labelledby
            ? `${labelledby} ${id}`
            : id
        }
        className="ui-dd-hook"
        id={id}
        onBlur={onBlur}
        onClick={show}
        onFocus={onFocus}
        type="button"
      >
        {label}
      </button>
    );
  };

DropdownHook.propTypes = {
  "aria-labelledby": PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  show: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

const DropdownContent =
  (props) => {
    const { children, visible, ...boxProps } = props;

    const ref = useRef(null);

    useEffect(
      () => {
        if (visible) {
          ref.current.focus();
        }
      },
      [visible]
    );

    return (
      <div
        ref={ref}
        {...boxProps}
        className="ui-dd-box"
        tabIndex={-1}
        hidden={!visible}
      >
        {children}
      </div>
    );
  };

DropdownContent.propTypes = {
  children: PropTypes.node.isRequired,
  role: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

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
