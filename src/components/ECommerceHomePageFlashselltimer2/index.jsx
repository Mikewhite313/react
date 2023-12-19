import React from "react";

import { Text } from "components";

const ECommerceHomePageFlashselltimer2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-8 h-[35px] mb-[5px] mt-0.5 relative w-[43px]">
          <Text
            className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-max"
            size="txtPoppinsSemiBold16Black900"
          >
            {props?.textvalue}
          </Text>
          <Text
            className="absolute bottom-[-2%] inset-x-[0] mx-auto text-[11px] text-black-900 w-max"
            size="txtPoppinsRegular11"
          >
            {props?.textlabel}
          </Text>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageFlashselltimer2.defaultProps = {
  textvalue: "59",
  textlabel: "Minutes",
};

export default ECommerceHomePageFlashselltimer2;
