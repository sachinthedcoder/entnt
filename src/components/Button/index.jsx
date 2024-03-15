import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-md" };
const variants = { fill: { blue_A700: "bg-blue-A700 text-white-A700" } };
const sizes = { xs: "pr-[9px] py-[9px]", sm: "p-3", md: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "md",
  variant = "fill",
  color = "blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_A700"]),
};

export { Button };
