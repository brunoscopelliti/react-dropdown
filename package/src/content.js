import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

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
  onBlur: PropTypes.func,
  role: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default DropdownContent;
