const Conclusion = () => {
  return (
    <div className="w-full h-[80%] max-mobile:h-[88%] text-primary-marineBlue max-mobile:rounded-xl max-mobile:bg-white max-mobile:px-5 max-mobile:py-[25%] flex flex-col mobile:justify-center items-center">
      <img
        src="/images/icon-thank-you.svg"
        alt="Thank you icon in confirmation page"
        className=""
      />
      <h2 className=" text-primary-marineBlue font-extrabold text-[40px] max-mobile:text-[20px]">
        Thank you!
      </h2>
      <span className=" text-center w-[450px] max-mobile:w-[260px] max-mobile:text-[14px] h-[20px] text-neutral-coolGray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </span>
    </div>
  );
};

export default Conclusion;
