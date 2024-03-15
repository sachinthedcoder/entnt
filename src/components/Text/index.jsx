import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroySemiBold20: "font-gilroy font-semibold",
  txtGilroyMedium18Black900: "font-gilroy font-medium",
  txtGilroyMedium18Green600: "font-gilroy font-medium",
  txtGilroySemiBold16WhiteA700: "font-gilroy font-semibold",
  txtGilroySemiBold16Gray90001: "font-gilroy font-semibold",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroySemiBold28: "font-gilroy font-semibold",
  txtGilroyMedium24Black90002: "font-gilroy font-medium",
  txtGilroyMedium14BlueA200: "font-gilroy font-medium",
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtGilroyRegular14Bluegray900: "font-gilroy font-normal",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtOpenSansMedium18: "font-medium font-opensans",
  txtGilroySemiBold14Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtOpenSansMedium14: "font-medium font-opensans",
  txtGilroySemiBold18Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium18Black90002: "font-gilroy font-medium",
  txtOpenSansMedium18Bluegray400: "font-medium font-opensans",
  txtGilroyMedium12WhiteA700: "font-gilroy font-medium",
  txtGilroyBold28: "font-bold font-gilroy",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18Bluegray90001: "font-gilroy font-semibold",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroySemiBold36: "font-gilroy font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtOpenSansRomanRegular14: "font-normal font-opensans",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
  txtOpenSansMedium24: "font-medium font-opensans",
  txtGilroySemiBold16BlueA700: "font-gilroy font-semibold",
  txtGilroyMedium24Green600: "font-gilroy font-medium",
  txtOpenSansMedium20: "font-medium font-opensans",
  txtOpenSansRomanSemiBold16BlueA700: "font-opensans font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
