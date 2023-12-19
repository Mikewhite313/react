import React from "react";

import { Text } from "components";

const ECommerceHomePageFlashselltimer1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[-4px] items-center justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsSemiBold16Black900"
          >
            {props?.fivetext}
          </Text>
          <Text
            className="text-[11px] text-black-900 w-auto"
            size="txtPoppinsRegular11"
          >
            {props?.daystext}
          </Text>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageFlashselltimer1.defaultProps = {
  fivetext: "05",
  daystext: "Days",
};

export default ECommerceHomePageFlashselltimer1;
