import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import useBool from "@bscop/use-bool";

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
            event.preventDefault();
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

export default DropdownHook;
