import React from "react";

import { Button, Img, Text } from "components";

const WishlistCart4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col gap-[7px] items-center justify-end pt-3 rounded w-full">
          <div className="flex flex-col relative w-[92%]">
            <div className="flex flex-col items-center justify-start mx-auto w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="bg-red-600 flex flex-col items-center justify-center mb-2 px-3 py-1 rounded w-auto">
                  <Text
                    className="text-gray-50 text-xs w-auto"
                    size="txtPoppinsRegular12Gray50"
                  >
                    {props?.thirtyfive}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[34px]">
                  <Button
                    className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                    shape="circle"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_quickview.svg"
                      alt="quickview"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[-24px] mx-auto p-[7px] w-[78%] z-[1]">
              <Img
                className="h-[166px] md:h-auto object-cover w-[90%]"
                src="images/img_ideapadgaming3i01500x500.png"
                alt="ideapadgaming3i"
              />
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-end p-2 rounded-bl rounded-br w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_cart1_white_a700.svg"
                alt="cartOne"
              />
              <Text
                className="text-white-A700 text-xs w-auto"
                size="txtPoppinsRegular12WhiteA700"
              >
                {props?.addtocart}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.asusfhdgaming}
          </Text>
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
            <Text
              className="text-base text-red-600 w-auto"
              size="txtPoppinsMedium16Red600"
            >
              {props?.price}
            </Text>
            <Text
              className="line-through text-base text-black-900_87 w-auto"
              size="txtPoppinsMedium16Black90087"
            >
              {props?.priceOne}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            <Img
              className="h-5 w-[100px]"
              src="images/img_signal.svg"
              alt="signal"
            />
            <Text
              className="text-black-900_87 text-sm w-[30px]"
              size="txtPoppinsSemiBold14"
            >
              {props?.sixtyfive}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

WishlistCart4.defaultProps = {
  thirtyfive: "-35%",
  addtocart: "Add To Cart",
  asusfhdgaming: "ASUS FHD Gaming Laptop",
  price: "$960",
  priceOne: "$1160",
  sixtyfive: "(65)",
};

export default WishlistCart4;
