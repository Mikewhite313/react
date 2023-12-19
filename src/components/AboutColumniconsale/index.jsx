import React from "react";

import { Img, Text } from "components";

const AboutColumniconsale = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-20"
          style={{
            backgroundImage: "url('images/img_services_white_a700.svg')",
          }}
        >
          <Img className="h-10 w-10" alt="iconsale" src={props?.saleicon} />
        </div>
        <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.28px] w-auto"
            size="txtInterBold32WhiteA700"
          >
            {props?.moneyamount}
          </Text>
          <Text
            className="text-base text-white-A700 w-auto"
            size="txtPoppinsRegular16WhiteA700"
          >
            {props?.saletext}
          </Text>
        </div>
      </div>
    </>
  );
};

AboutColumniconsale.defaultProps = { saleicon: "images/img_iconsale.svg" };

export default AboutColumniconsale;
