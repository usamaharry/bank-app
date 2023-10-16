import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={` w-[140px] h-[140px] rounded-full cursor-pointer bg-blue-gradient p-1`}
    >
      <div
        className={`flex flex-col justify-center items-center text-white rounded-full bg-primary w-[100%] h-[100%]`}
      >
        <div className="flex text-gradient">
          <p>Get</p> <img src={arrowUp} alt="arrow" className="ml-2" />
        </div>
        <p className="text-gradient">Started</p>
      </div>
    </div>
  );
};

export default GetStarted;
