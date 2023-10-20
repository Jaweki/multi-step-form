import { ChangeEvent, useEffect, useState } from "react";
import { UserInfoInputTypes } from "../types/type";
import MobileNav from "./MobileNav";
import UserInfo from "./UserInfo";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { submit } from "../features/userInfoSlice";
import { switchToStep } from "../features/navigationSlice";
import PlanSelection from "./PlanSelection";
import Add_ons from "./Add_ons";
import FinishUp from "./FinishUp";
import Conclusion from "./Conclusion";

const MobileMultiForm = () => {
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
    <div className="w-full h-[120vh] flex flex-col bg-white">
      <div className=" bg-neutral-magnolia w-full h-[100%] flex flex-col relative">
        <img
          src="/images/bg-sidebar-mobile.svg"
          alt="mobile navbar image"
          className="w-full"
        />

        <div className="flex flex-col absolute top-0 w-full h-full">
          <div className="flex flex-row gap-3 mx-[25%] my-[9%]">
            <MobileNav stepNumber={1} />
            <MobileNav stepNumber={2} />
            <MobileNav stepNumber={3} />
            <MobileNav stepNumber={4} />
          </div>

          {/* multi step forms */}
          <div className="absolute left-[17px] top-[15%] w-[90%] h-[80%] container">
            {handleNavigation()}
          </div>
        </div>
      </div>
      <div
        className={`w-full my-2 flex flex-row-reverse justify-between px-5 ${
          navigation.finale ? "hidden" : ""
        }`}
      >
        <button
          onClick={handleNext}
          className={`w-[110px] h-[45px] rounded-lg hover:bg-primary-purplishBlue bg-primary-marineBlue text-white text-opacity-80 `}
        >
          {`${
            navigation.step4 ? "Confirm" : !navigation.finale ? "Next Step" : ""
          }`}
        </button>
        <button
          onClick={handleBack}
          className={`w-[110px] h-[45px] rounded-lg text-neutral-coolGray hover:bg-neutral-coolGray hover:text-primary-marineBlue ${
            step == 1 ? "hidden" : ""
          }`}
        >
          Go Back
        </button>
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

export default MobileMultiForm;
