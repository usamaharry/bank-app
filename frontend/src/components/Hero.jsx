import styles from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "../components";

const Hero = () => {
  const h1Style =
    "font-poppins ss:leading-[100px] leading-[65px] w-full ss:text-[72px] text-[52px] text-white font-semibold";
  return (
    <section
      id="home"
      className={`
      flex md:flex-row flex-col items-start
      ${styles.paddingY}
  `}
    >
      <div className="flex flex-col items-start px-6 xl:px-0  sm:px-16">
        {/* Discount card */}
        <div className="mb-5 bg-discount-gradient p-2 flex flex-row justify-start items-center rounded-[10px]">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>
        {/* Discount card */}

        {/* The Next Generation and Get Started Row */}
        <div className="flex flex-row justify-between">
          <h1 className={h1Style}>
            The Next
            <br />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        {/* The Next Generation and Get Started Row */}
        <h1 className={h1Style}>Payment Method.</h1>

        <p className={`${styles.paragraph} mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className="flex justify-center items-center  md:my-0 my-10 relative">
        <img src={robot} alt="robot" className="w-[100%]   relative z-[5] " />
        <div className="absolute z-[0]  w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1]  w-[80%] h-[80%] bottom-40 white__gradient" />
        <div className="absolute z-[0]  w-[50%] h-[50%] bottom-20 right-20 blue__gradient" />
      </div>

      <div className="ss:hidden flex justify-center items-center w-full mt-10">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
