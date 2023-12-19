import React from "react";

const sizeClasses = {
  txtPoppinsRegular14GreenA40090: "font-normal font-poppins",
  txtPoppinsMedium20Black900: "font-medium font-poppins",
  txtPoppinsMedium12Gray5099: "font-medium font-poppins",
  txtPoppinsRegular16Gray50: "font-normal font-poppins",
  txtInterSemiBold24Black900: "font-inter font-semibold",
  txtInterRegular20: "font-inter font-normal",
  txtPoppinsRegular16Black90087: "font-normal font-poppins",
  txtInterSemiBold48: "font-inter font-semibold",
  txtPoppinsRegular14Black90087: "font-normal font-poppins",
  txtPoppinsMedium16Black90087: "font-medium font-poppins",
  txtInterSemiBold24: "font-inter font-semibold",
  txtPoppinsRegular12WhiteA700: "font-normal font-poppins",
  txtInterBold32WhiteA700: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular12Gray50: "font-normal font-poppins",
  txtPoppinsRegular11: "font-normal font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium16Black900: "font-medium font-poppins",
  txtPoppinsRegular16Red600: "font-normal font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsSemiBold16Black900: "font-poppins font-semibold",
  txtInterSemiBold54: "font-inter font-semibold",
  txtPoppinsSemiBold16GreenA400: "font-poppins font-semibold",
  txtInterRegular24: "font-inter font-normal",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsRegular16Black90099: "font-normal font-poppins",
  txtPoppinsSemiBold14Gray50: "font-poppins font-semibold",
  txtPoppinsRegular14Black900: "font-normal font-poppins",
  txtInterMedium110: "font-inter font-medium",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterBold24Gray50: "font-bold font-inter",
  txtInterMedium32: "font-inter font-medium",
  txtPoppinsMedium16WhiteA700: "font-medium font-poppins",
  txtPoppinsMedium16Black90099: "font-medium font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtInterBold32: "font-bold font-inter",
  txtPoppinsMedium20Gray50: "font-medium font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtInterMedium36: "font-inter font-medium",
  txtPoppinsMedium16Red600: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular16Black9007e: "font-normal font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
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
