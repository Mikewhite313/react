import React from "react";

import { Img, Text } from "components";

const ECommerceHomePageRowdays = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 h-[55px] md:h-auto items-start justify-start w-auto">
          <Text
            className="text-black-900 text-xs w-auto"
            size="txtPoppinsMedium12"
          >
            {props?.days}
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[1.28px] w-[46px]"
            size="txtInterBold32"
          >
            {props?.daysvalue}
          </Text>
        </div>
        <Img
          className="h-4 mt-[26px] w-1"
          src="images/img_semiclone.svg"
          alt="semiclone"
        />
        <div className="flex flex-col gap-1 h-14 md:h-auto items-start justify-start w-[43px]">
          <Text
            className="text-black-900 text-xs w-auto"
            size="txtPoppinsMedium12"
          >
            {props?.hours}
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[1.28px] w-auto"
            size="txtInterBold32"
          >
            {props?.hoursvalue}
          </Text>
        </div>
        <Img
          className="h-4 mt-[26px] w-1"
          src="images/img_semiclone.svg"
          alt="semiclone_One"
        />
        <div className="flex flex-col gap-1 h-[57px] md:h-auto items-start justify-start w-[49px]">
          <Text
            className="text-black-900 text-xs w-auto"
            size="txtPoppinsMedium12"
          >
            {props?.minutes}
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[1.28px]"
            size="txtInterBold32"
          >
            {props?.minutesvalue}
          </Text>
        </div>
        <Img
          className="h-4 mt-[26px] w-1"
          src="images/img_semiclone.svg"
          alt="semiclone_Two"
        />
        <div className="flex flex-col gap-1 h-[57px] md:h-auto items-start justify-start w-[52px]">
          <Text
            className="text-black-900 text-xs w-auto"
            size="txtPoppinsMedium12"
          >
            {props?.seconds}
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[1.28px] w-auto"
            size="txtInterBold32"
          >
            {props?.secondsvalue}
          </Text>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageRowdays.defaultProps = {
  days: "Days",
  daysvalue: "03",
  hours: "Hours",
  hoursvalue: "23",
  minutes: "Minutes",
  minutesvalue: "19",
  seconds: "Seconds",
  secondsvalue: "56",
};

export default ECommerceHomePageRowdays;
