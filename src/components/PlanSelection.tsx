import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeSelection } from "../features/planSelectionSlice";
import { changeSubscription } from "../features/subscriptionSlice";

const PlanSelection = () => {
  const planSelection = useAppSelector((state) => state.planSelection);
  const subscription = useAppSelector((state) => state.subscription);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-[80%] max-mobile:h-full text-primary-marineBlue max-mobile:rounded-xl max-mobile:bg-white max-mobile:px-5 max-mobile:pt-5">
      <span className="flex flex-col mobile:gap-1 ">
        <h1 className=" text-[33px] max-mobile:text-[24px] font-extrabold">
          Select your plan
        </h1>
        <p className=" text-neutral-coolGray">
          You have the option of monthly or yearly billing.
        </p>
      </span>

      <div className="flex mobile:mt-10 max-mobile:mt-4 mobile:w-full justify-evenly flex-row max-mobile:flex-col mobile:gap-4 max-mobile:gap-3">
        {planSelection.map((plan, index) => (
          <div
            key={plan.type}
            onClick={() => dispatch(changeSelection(index))}
            className={`flex flex-col max-mobile:flex-row border p-4 w-[128px] rounded-lg relative max-mobile:w-full ${
              plan.selected
                ? " border-primary-purplishBlue bg-neutral-magnolia"
                : " hover:border-primary-purplishBlue"
            } ${
              subscription.type == "yearly"
                ? "h-[168px] max-mobile:h-[75px]"
                : " h-[150px] max-mobile:h-[62px]"
            }`}
          >
            <img
              src={`/images/icon-${plan.type.toLowerCase()}.svg`}
              alt={`${plan.type} selection plan`}
              className="w-[35px]"
            />
            <div className="flex flex-col absolute bottom-2 max-mobile:left-16">
              <span className="text-[15px] font-extrabold">{plan.type}</span>
              <span className="text-[14px] font-bold text-neutral-coolGray">
                $
                {subscription.type == "yearly"
                  ? plan.yrate + "/yr"
                  : plan.mrate + "/mo"}
              </span>
              <span
                className={`${
                  subscription.type == "yearly" ? "text-[12px]" : "hidden"
                }`}
              >
                {plan.discount} months free
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full h-[45px] rounded-lg flex flex-row justify-center items-center mt-5 bg-neutral-magnolia text-[14px] font-semibold">
        <span
          className={`${
            subscription.type == "monthly" ? "" : " text-neutral-coolGray"
          }`}
        >
          Monthly
        </span>
        <div
          onClick={() => dispatch(changeSubscription())}
          className="mx-2 bg-primary-marineBlue rounded-xl w-[35px] h-[19px] flex flex-col p-1 justify-center relative"
        >
          <div
            className={`bg-white rounded-full w-[11px] h-[12px] absolute  ${
              subscription.type == "monthly" ? "left-1" : "right-1"
            }`}
          />
        </div>
        <span
          className={`${
            subscription.type == "yearly" ? "" : " text-neutral-coolGray"
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default PlanSelection;
