import React from "react";

import { Img, List, Text } from "components";

const ECommerceHomePageHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-10 gap-40 items-start justify-between w-auto md:w-full">
          <div className="flex flex-col items-center justify-start">
            {!!props?.exclusivetext ? (
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                size="txtInterBold24"
              >
                {props?.exclusivetext}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-row gap-12 items-start justify-start w-auto">
            <div className="flex flex-col items-center justify-start">
              {!!props?.hometext ? (
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtPoppinsRegular16"
                >
                  {props?.hometext}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-start">
              {!!props?.contacttext ? (
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtPoppinsRegular16"
                >
                  {props?.contacttext}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-start">
              {!!props?.abouttext ? (
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtPoppinsRegular16"
                >
                  {props?.abouttext}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-start pt-0.5">
              {!!props?.signuptext ? (
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtPoppinsRegular16"
                >
                  {props?.signuptext}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-center pl-5 pr-3 py-[7px] rounded w-auto">
            <div className="flex flex-row gap-[34px] items-center justify-center w-auto">
              {!!props?.searchtext ? (
                <Text
                  className="text-black-900_87 text-xs w-auto"
                  size="txtPoppinsRegular12"
                >
                  {props?.searchtext}
                </Text>
              ) : null}
              {!!props?.searchimage ? (
                <Img
                  className="h-6 w-6"
                  alt="search"
                  src={props?.searchimage}
                />
              ) : null}
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center w-auto">
            <List
              className="sm:flex-col flex-row gap-4 grid grid-cols-2 w-[63%]"
              orientation="horizontal"
            >
              <div className="h-8 md:h-[18px] pb-1.5 pl-1.5 relative w-full">
                {!!props?.favoriteimage ? (
                  <Img
                    className="absolute h-[18px] inset-[0] justify-center m-auto"
                    alt="favorite"
                    src={props?.favoriteimage}
                  />
                ) : null}
                <div className="absolute h-[17px] md:h-[18px] right-[0] top-[0] w-4">
                  {!!props?.ellipseone ? (
                    <div className="absolute bg-red-600 h-4 inset-[0] justify-center m-auto rounded-[50%] w-4"></div>
                  ) : null}
                  {!!props?.favoritecount ? (
                    <Text
                      className="absolute h-max inset-y-[0] left-1/4 my-auto text-center text-gray-50 text-xs"
                      size="txtPoppinsRegular12Gray50"
                    >
                      {props?.favoritecount}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="md:h-6 h-8 relative w-full">
                {!!props?.cartimage ? (
                  <Img
                    className="absolute bottom-[0] h-6 left-[0] w-6"
                    alt="cartOne"
                    src={props?.cartimage}
                  />
                ) : null}
                <div className="absolute h-[18px] right-[0] top-[0] w-1/2">
                  {!!props?.ellipseone1 ? (
                    <div className="absolute bg-red-600 bottom-[0] h-4 inset-x-[0] mx-auto rounded-[50%] w-4"></div>
                  ) : null}
                  {!!props?.cartcount ? (
                    <Text
                      className="absolute h-full inset-y-[0] my-auto right-1/4 text-center text-gray-50 text-xs"
                      size="txtPoppinsRegular12Gray50"
                    >
                      {props?.cartcount}
                    </Text>
                  ) : null}
                </div>
              </div>
            </List>
            {!!props?.userimage ? (
              <Img className="h-8 w-8" alt="user" src={props?.userimage} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageHeader.defaultProps = {};

export default ECommerceHomePageHeader;
