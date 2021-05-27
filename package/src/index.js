import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import cssClass from "@bscop/css-class";

import useBool from "@bscop/use-bool";
import useId from "@bscop/use-id";

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
        className="ui-dd-hook"
        id={id}
        onBlur={onBlur}
        onClick={show}
        onFocus={onFocus}
        type="button"
        aria-expanded={visible || undefined}
        aria-labelledby={
          labelledby
            ? `${labelledby} ${id}`
            : id
        }
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

    /**
     * @TODO
     * Depending on the role we might need to set additional attributes;
     * eg. aria-activedescendant
     */

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
    const {
      "aria-labelledby": labelledby,
      children,
      className,
      disabled,
      label,
      role,
    } = props;

    const buttonId = useId({ prefix: "dd-hook" });

    const [visible, show] = useBool();

    /**
     * @TODO
     * Close dropdown.
     */

    return (
      <div className={cssClass("ui-dropdown", className)} >
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
          aria-labelledby={labelledby || buttonId}
          role={role}
          visible={visible}
        >
          {children}
        </DropdownContent>
      </div>
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
