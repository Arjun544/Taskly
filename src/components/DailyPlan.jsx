import React, { useEffect, useContext } from "react";
import { AppContext } from "../App";
import Circle from "react-circle";

const DailyPlan = ({ dailyTasks }) => {
  const { percentage, setPercentage } = useContext(AppContext);

  const calcPercentage = () => {
    const completedTasks = dailyTasks.filter(
      (todo) => todo.isCompleted === true
    ).length;
    const totalTasks = dailyTasks.length;
    setPercentage((completedTasks / totalTasks) * 100);
  };

  useEffect(() => {
    calcPercentage();
  }, [percentage]);

  return (
    <div className="flex h-40 rounded-3xl bg-gray-700 mt-36 items-center justify-center shadow-lg hover:shadow-xl">
      <div className="flex flex-col">
        <span className="text-white font-semibold tracking-wider mr-4">
          Your Daily Plan
        </span>
        <div>
          <span className="text-gray-400 font-semibold text-sm mr-2">
            {dailyTasks.filter((todo) => todo.isCompleted === true).length}
          </span>
          <span className="text-gray-400 font-semibold tracking-wider mr-2 text-sm">
            of
          </span>
          <span className="text-gray-400 font-semibold mr-2 text-sm">
            {dailyTasks.length}
          </span>
          <span className="text-gray-400 font-semibold tracking-wider text-sm">
            completed
          </span>
        </div>
      </div>

      <div className="h-28">
        <Circle
          animate={true} // Boolean: Animated/Static progress
          animationDuration="2s" //String: Length of animation
          responsive={true} // Boolean: Make SVG adapt to parent size
          size={10} // Number: Defines the size of the circle.
          lineWidth={30} // Number: Defines the thickness of the circle's stroke.
          progress={Math.floor(percentage)} // Number: Update to change the progress and percentage.
          progressColor="#F8D57E" // String: Color of "progress" portion of circle.
          bgColor="whitesmoke" // String: Color of "empty" portion of circle.
          textColor="white" // String: Color of percentage text color.
          textStyle={{
            font: "bold 4rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
          }}
          percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
          roundedStroke={true} // Boolean: Rounded/Flat line ends
          showPercentage={true} // Boolean: Show/hide percentage.
          showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
        />
      </div>
    </div>
  );
};

export default DailyPlan;
