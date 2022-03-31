import { React, useEffect, useContext } from "react";
import { AppContext } from "../App";
import DailyPlan from "./DailyPlan";
import RandomQuote from "./RandomQuote";
import StatsTile from "./StatsTile";

const RightContainer = () => {
  const {
    todoList,
    filteredTodos,
    favList,
    userName,
    userProfile,
    setChangeProfileUpDialogue,
  } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("username", userName);
    localStorage.setItem("profile", userProfile);
  }, [userName, userProfile]);

  const onProfileChange = (e) => {
    e.preventDefault();
    setChangeProfileUpDialogue(true);
  };

  return (
    <div className="bg-white h-screen px-10 pt-12 w-96 right-0">
      <div className=" flex justify-end items-center mb-9 ">
        <div className="flex flex-col mr-10">
          <span className="text-gray-400 font-semibold">
            {userName == null
              ? "Unknown"
              : userName.charAt(0).toUpperCase() + userName.slice(1)}
          </span>
          <span
            onClick={onProfileChange}
            className="text-sm text-amber-light font-bold cursor-pointer"
          >
            Change
          </span>
        </div>
        <img
          src={userProfile === "" ? "/place holder.jpg" : userProfile}
          alt="profile"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>

      {/* Statistics*/}
      <span className="text-lg font-semibold text-gray-500">Statistics</span>
      <div className="flex mt-3">
        <StatsTile title="All" number={todoList.length} isEven={false} />
        <StatsTile title="Favourites" number={favList.length} isEven={true} />
      </div>
      <div className="flex">
        <StatsTile
          title="Completed"
          number={todoList.filter((todo) => todo.isCompleted === true).length}
          isEven={false}
        />
        <StatsTile
          title="InCompleted"
          number={todoList.filter((todo) => todo.isCompleted === false).length}
          isEven={true}
        />
      </div>

      <RandomQuote/>

      <DailyPlan
        dailyTasks={filteredTodos.filter(
          (todo) =>
            new Date(todo.scheduledDate).getDate() === new Date().getDate()
        )}
      />
    </div>
  );
};

export default RightContainer;
