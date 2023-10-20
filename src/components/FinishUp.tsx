import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { AddonsStoreTypes, PlanSelectionStoreTypes } from "../types/type";
import { switchToStep } from "../features/navigationSlice";

const FinishUp = () => {
  const planSelection = useAppSelector((state) => state.planSelection);
  const subscription = useAppSelector((state) => state.subscription);
  const addons = useAppSelector((state) => state.addons);
  const dispatch = useAppDispatch();

  const [totalBill, setTotalBill] = useState(0);

  const [selectedPlan, setSelectedPlan] =
    useState<PlanSelectionStoreTypes | null>(null);

  const [selectedAddons, setSelectedAddons] = useState<
    AddonsStoreTypes[] | null
  >(null);

  useEffect(() => {
    const plan = planSelection.filter((plan) => plan.selected);
    const add_ons = addons.filter((addon) => addon.selected);
    setSelectedAddons(add_ons);
    setSelectedPlan(plan[0]);

    if (subscription.type == "yearly") {
      let totalAddonsBill = 0;
      let subscriptionPlanAmt = 0;
      add_ons.forEach((addon) => (totalAddonsBill += addon.yrate));
      plan.forEach((plan) => (subscriptionPlanAmt += plan.yrate));
      setTotalBill(subscriptionPlanAmt + totalAddonsBill);
    } else if (subscription.type == "monthly") {
      let totalAddonsBill = 0;
      let subscriptionPlanAmt = 0;
      add_ons.forEach((addon) => (totalAddonsBill += addon.mrate));
      plan.forEach((plan) => (subscriptionPlanAmt += plan.mrate));
      setTotalBill(subscriptionPlanAmt + totalAddonsBill);
    }
  }, [planSelection, addons, subscription]);

  return (
    <div className="w-full h-[80%] max-mobile:h-[88%] text-primary-marineBlue max-mobile:rounded-xl max-mobile:bg-white max-mobile:px-4 max-mobile:pt-5">
      <span className="flex flex-col mobile:gap-1 ">
        <h1 className=" text-[33px] max-mobile:text-[24px] font-extrabold">
          Finishing up
        </h1>
        <p className=" text-neutral-coolGray">
          Double-check everything looks OK before confirming.
        </p>
      </span>

      <div className="w-full mt-7">
        <div className=" bg-neutral-magnolia rounded-lg p-5">
          <div className=" flex flex-row container w-full border-b-2 h-[70px] mb-4">
            <div className=" flex flex-col grow">
              <span className="">
                {`${selectedPlan?.type} (${subscription.type})`}
              </span>
              <a
                onClick={() => dispatch(switchToStep(2))}
                className=" hover:text-primary-purplishBlue underline text-neutral-coolGray"
              >
                Change
              </a>
            </div>
            <span className=" font-extrabold">
              $
              {`${
                subscription.type == "yearly"
                  ? selectedPlan?.yrate + "/yr"
                  : selectedPlan?.mrate + "/mo"
              }`}
            </span>
          </div>
          {selectedAddons?.map((addon) => (
            <div
              key={addon.id}
              className="flex flex-row justify-between h-[40px]"
            >
              <span className=" text-neutral-coolGray">{addon.title}</span>
              <span className="text-[14px]">{`${
                subscription.type == "yearly"
                  ? "+$" + addon.yrate + "/yr"
                  : "+$" + addon.mrate + "/mo"
              }`}</span>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row justify-between px-5 mt-2">
          <span className=" text-neutral-coolGray text-[14px]">{`${
            subscription.type == "yearly"
              ? "Total (per year)"
              : "Total (per month)"
          }`}</span>
          <span className=" text-primary-purplishBlue font-extrabold text-[20px]">
            {"$" +
              totalBill +
              `${subscription.type == "yearly" ? "/yr" : "/mo"}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinishUp;
