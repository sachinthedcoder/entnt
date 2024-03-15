import React from "react";

import { Button, Img, List, Text } from "components";

const ProjectPortfolioPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_7.svg"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-center justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text
                    className="ml-0.5 text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Products
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Resouces
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown One"
                  />
                </div>
              </List>
              <Text
                className="text-base text-gray-900"
                size="txtGilroyMedium16"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[220px] w-[18%] md:w-full">
              <Text
                className="text-base text-gray-900"
                size="txtGilroyMedium16"
              >
                Sign in
              </Text>
              <Button className="cursor-pointer font-medium min-w-[148px] text-base text-center">
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-6 items-center justify-start max-w-[1268px] mb-[220px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-end justify-between rounded-md w-full">
            <Text
              className="mt-2 text-blue_gray-900 text-xl"
              size="txtGilroySemiBold20"
            >
              Tenplates
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[86px]"
              leftIcon={
                <Img
                  className="h-4 ml-3 mr-2 my-[9px]"
                  src="images/img_filter.svg"
                  alt="filter"
                />
              }
              size="xs"
            >
              <div className="font-medium text-left text-sm">Filters</div>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start rounded-[3px] w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-7 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start rounded-[3px] w-[49%] md:w-full">
                  <Img
                    className="h-[257px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle10_257X620.png"
                    alt="RectangleTen"
                  />
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Hand Drawn Flat Design Presentation Templates
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start rounded-[3px] w-[49%] md:w-full">
                  <Img
                    className="h-[257px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle10_3.png"
                    alt="RectangleTen One"
                  />
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Gredient Business Presentation Templates Free Vector
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start rounded-[3px] w-[49%] md:w-full">
                <Img
                  className="h-[257px] sm:h-auto object-cover rounded-[3px] w-full"
                  src="images/img_rectangle10_4.png"
                  alt="RectangleTen Two"
                />
                <Text
                  className="text-base text-blue_gray-700"
                  size="txtGilroySemiBold16"
                >
                  Hand Drawn Flat Design Presentation Templates
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPortfolioPage;
