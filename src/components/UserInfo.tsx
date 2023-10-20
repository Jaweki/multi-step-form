import { ChangeEvent } from "react";
import { UserInfoInputTypes, UserInfoInputValidity } from "../types/type";

type UserInfoProps = {
  input: UserInfoInputTypes;
  validity: UserInfoInputValidity;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const UserInfo = ({ input, validity, handleInputChange }: UserInfoProps) => {
  return (
    <div className="w-full h-[80%] max-mobile:h-[85%] text-primary-marineBlue max-mobile:rounded-xl max-mobile:bg-white max-mobile:px-6 max-mobile:pt-5">
      <span className="flex flex-col mobile:gap-1">
        <h1 className=" text-[33px] max-mobile:text-[27px] font-extrabold">
          Personal info
        </h1>
        <p className=" text-neutral-coolGray">
          Please provide your name, email address, and phone number.
        </p>
      </span>

      <form
        // onSubmit={handleFormSubmit}
        className=" mobile:mt-8 mobile:gap-5 max-mobile:mt-5 max-mobile:gap-4 flex flex-col"
      >
        <label className="flex flex-col mobile:gap-2">
          <div className="w-full flex flex-row justify-between text-[13px]">
            <span>Name</span>
            <span className={`${!validity.name ? "text-red-500" : "hidden"}`}>
              This field is required
            </span>
          </div>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            placeholder="e.g. Stephen King"
            className={`w-full h-[40px] border rounded-lg p-4 font-extrabold text-[13px] outline-neutral-coolGray focus:outline-primary-purplishBlue outline-1 ${
              !validity.name ? " border-red-500" : ""
            }`}
          />
        </label>
        <label className="flex flex-col mobile:gap-2">
          <div className="w-full flex flex-row justify-between text-[13px]">
            <span className="">Email Address</span>
            <span className={`${!validity.email ? "text-red-500" : "hidden"}`}>
              This field is required
            </span>
          </div>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            placeholder="e.g. stephenking@lorem.com"
            className={`w-full h-[40px] border rounded-lg p-4 font-extrabold text-[13px] outline-neutral-coolGray focus:outline-primary-purplishBlue outline-1 ${
              !validity.email ? " border-red-500" : ""
            }`}
          />
        </label>
        <label className="flex flex-col mobile:gap-2">
          <div className="w-full flex flex-row justify-between text-[13px]">
            <span className="">Phone Number</span>
            <span className={`${!validity.phone ? "text-red-500" : "hidden"}`}>
              This field is required
            </span>
          </div>
          <input
            type="tel"
            name="phone"
            value={input.phone}
            onChange={handleInputChange}
            placeholder="e.g. +1 234 567 890"
            className={`w-full h-[40px] border rounded-lg p-4 font-extrabold text-[13px] outline-neutral-coolGray focus:outline-primary-purplishBlue outline-1 ${
              !validity.phone ? " border-red-500" : ""
            }`}
          />
        </label>
      </form>
    </div>
  );
};

export default UserInfo;
