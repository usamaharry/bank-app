import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="flex md:flex-row md:justify-evenly md:items-center  flex-col justify-start items-stretch  mb-6 md:mb-20">
      {stats.map((stat, index) => [
        <div
          key={stat.id}
          className="flex items-center justify-between w-[300px] whitespace-nowrap   m-auto md:mb-0 mb-5"
        >
          <h4 className="font-poppins text-[30px] xs:text-[40px] text-white font-semibold  mr-5">
            {stat.value}
          </h4>
          <span className="font-poppins text-gradient text-[20px] uppercase">
            {stat.title}
          </span>
        </div>,
        stats.length - 1 !== index && (
          <div className="h-[15px] w-[1px] bg-white md:block hidden" />
        ),
      ])}
    </div>
  );
};

export default Stats;
