import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";

type DesktopNavProp = {
  stepNumber: number;
  label: string;
};

const DesktopNav = ({ stepNumber, label }: DesktopNavProp) => {
  const [step, setStep] = useState(0);
  const navigation = useAppSelector((state) => state.navigation);

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

  return (
    <div className="flex flex-row w-full h-[30px] justify-evenly text-white text-[13px] gap-3">
      <div
        className={`mt-2 font-semibold w-[30px] h-[30px] border border-white rounded-full flex justify-center items-center  ${
          step == stepNumber
            ? " bg-primary-pastelBlue text-black border-none"
            : " bg-transparent text-white"
        }`}
      >
        {stepNumber}
      </div>
      <div className=" flex flex-col w-[100px] ">
        <span className=" font-thin">STEP {stepNumber}</span>
        <span className="font-extrabold text-[14px]">{label}</span>
      </div>
    </div>
  );
};

export default DesktopNav;
