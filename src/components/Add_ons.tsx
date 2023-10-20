import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addonSelectionChange } from "../features/addonsSlice";

const Add_ons = () => {
  const addons = useAppSelector((state) => state.addons);
  const subscription = useAppSelector((state) => state.subscription);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-[80%] max-mobile:h-[88%] text-primary-marineBlue max-mobile:rounded-xl max-mobile:bg-white max-mobile:px-4 max-mobile:pt-5">
      <span className="flex flex-col mobile:gap-1 ">
        <h1 className=" text-[33px] max-mobile:text-[24px] font-extrabold">
          Pick add-ons
        </h1>
        <p className=" text-neutral-coolGray">
          Add-ons help enhance your gaming expirience
        </p>
      </span>

      <div className="flex flex-col gap-4 mt-8 max-mobile:gap-3 max-mobile:mt-6">
        {addons.map((addon, index) => (
          <div
            key={addon.id}
            className={`flex flex-row container gap-5 max-mobile:gap-3 border rounded-lg px-7 max-mobile:px-1 w-full h-[75px] items-center  ${
              addons[index].selected
                ? "border-primary-purplishBlue bg-neutral-magnolia"
                : "hover:border-primary-purplishBlue"
            }`}
          >
            <input
              type="checkbox"
              className="w-[18px] h-[18px]"
              checked={addons[index].selected}
              onChange={() => dispatch(addonSelectionChange(index))}
            />
            <div className="flex flex-col grow">
              <span className="w-full font-semibold text-primary-marineBlue">
                {addon.title}
              </span>
              <span className="w-full text-[14px] text-neutral-coolGray font-thin">
                {addon.desc}
              </span>
            </div>
            <span className=" text-[14px] text-primary-marineBlue font-thin">
              +
              {`${
                subscription.type == "yearly"
                  ? addon.yrate + "/yr"
                  : addon.mrate + "/mo"
              }`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add_ons;
