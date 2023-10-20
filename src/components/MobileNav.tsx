import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";

const MobileNav = ({ stepNumber }: { stepNumber: number }) => {
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
    <nav
      className={`w-[30px] h-[30px] border border-white rounded-full text-white flex justify-center items-center ${
        step == stepNumber
          ? " bg-primary-pastelBlue text-black border-none"
          : " bg-transparent text-white"
      }`}
    >
      {stepNumber}
    </nav>
  );
};

export default MobileNav;
