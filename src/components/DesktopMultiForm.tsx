import { ChangeEvent, useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import UserInfo from "./UserInfo";
import { UserInfoInputTypes } from "../types/type";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { submit } from "../features/userInfoSlice";
import { switchToStep } from "../features/navigationSlice";
import PlanSelection from "./PlanSelection";
import Add_ons from "./Add_ons";
import FinishUp from "./FinishUp";
import Conclusion from "./Conclusion";

const DesktopMultiForm = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppSelector((state) => state.navigation);
  const [input, setInput] = useState<UserInfoInputTypes>({
    name: "",
    email: "",
    phone: "",
  });

  const [validity, setValidity] = useState({
    name: true,
    email: true,
    phone: true,
  });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (navigation.step1) {
      setStep(1);
    } else if (navigation.step2) {
      setStep(2);
    } else if (navigation.step3) {
      setStep(3);
    } else if (navigation.step4) {
      setStep(4);
    } else if (navigation.finale) {
      setStep(5);
    }
  }, [navigation]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInput({ ...input, [name]: value });

    if (value !== "") {
      setValidity((prevValidity) => ({ ...prevValidity, [name]: true }));
    }
  };

  const handleNext = () => {
    if (step == 1) {
      if (input.name === "" || input.name === null) {
        setValidity({ ...validity, name: false });
        return;
      }
      if (input.email === "" || input.email === null) {
        setValidity({ ...validity, email: false });
        return;
      }
      if (input.phone === "" || input.phone === null) {
        setValidity({ ...validity, phone: false });
        return;
      }
    }

    dispatch(submit(input));
    dispatch(switchToStep(step + 1));
  };

  const handleBack = () => {
    if (step > 1) {
      dispatch(switchToStep(step - 1));
    }
  };

  const handleNavigation = () => {
    if (navigation.step1) {
      return (
        <UserInfo
          input={input}
          validity={validity}
          handleInputChange={handleInputChange}
        />
      );
    } else if (navigation.step2) {
      return <PlanSelection />;
    } else if (navigation.step3) {
      return <Add_ons />;
    } else if (navigation.step4) {
      return <FinishUp />;
    } else if (navigation.finale) {
      return <Conclusion />;
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-neutral-magnolia">
      <div className="bg-white w-[862px] h-[590px] rounded-2xl flex flex-row p-3 relative container">
        <div className=" basis-[274px]">
          <img
            src="/images/bg-sidebar-desktop.svg"
            alt="desktop sidebar image"
          />
          <div className="flex flex-col absolute top-2  p-10 gap-8">
            <DesktopNav stepNumber={1} label="YOUR INFO" />
            <DesktopNav stepNumber={2} label="SELECT PLAN" />
            <DesktopNav stepNumber={3} label="ADD-ONS" />
            <DesktopNav stepNumber={4} label="SUMMARY" />
          </div>
        </div>
        <div className="grow  px-[7%] pt-[4%] h-[100%] relative">
          {handleNavigation()}

          <div
            className={`w-full flex flex-row absolute bottom-0 justify-between right-0 px-[13%] py-8 ${
              navigation.finale ? "hidden" : ""
            }`}
          >
            <button
              type="button"
              onClick={handleBack}
              className={`w-[110px] h-[45px] rounded-lg text-neutral-coolGray hover:bg-neutral-coolGray hover:text-primary-marineBlue ${
                step == 1 ? "hidden" : ""
              }`}
            >
              Go Back
            </button>
            <button
              type="submit"
              onClick={handleNext}
              className={`w-[110px] h-[45px] rounded-lg hover:bg-primary-purplishBlue bg-primary-marineBlue text-white text-opacity-80 absolute right-16 bottom-8 `}
            >
              {`${
                navigation.step4
                  ? "Confirm"
                  : !navigation.finale
                  ? "Next Step"
                  : ""
              }`}
            </button>
          </div>
        </div>
      </div>

      <span className="text-[10px] w-full flex justify-center my-3">
        Challenge by{"  "}
        <a
          href="https://www.frontendmentor.io/?ref=challenge"
          className=" text-blue-700 underline"
        >
          Frontend Mentor.
        </a>
        {"  "}
        Coded by{"  "}
        <a href="portfolio.jaweki.com" className="text-blue-700 underline">
          Jaweki.
        </a>
      </span>
    </div>
  );
};

export default DesktopMultiForm;
