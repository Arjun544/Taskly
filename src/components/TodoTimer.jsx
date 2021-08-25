import React, { useEffect, useState } from "react";

const TodoTimer = ({ todoTime }) => {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(0);

  const countDown = () => {
    const reminderTime = new Date().getTime();
    const endDate = new Date(todoTime).getTime();

    const timeDiff = endDate - reminderTime;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(timeDiff / days);
    let timeHours = Math.floor((timeDiff % days) / hours);
    let timeMinutes = Math.floor((timeDiff % hours) / minutes);
    let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
  };

  useEffect(() => {
    setInterval(countDown, 1000);
  }, []);
  return (
    <div className="flex">
      <div className="mr-2">
        <span className="font-bold">{days}</span>
        <span className="text-sm font-bold text-gray-400">d</span>
      </div>

      <div className="mr-2">
        <span className="font-bold">{hours}</span>
        <span className="text-sm font-bold text-gray-400">h</span>
      </div>
      <div className="mr-2">
        <span className="font-bold">{minutes}</span>
        <span className="text-sm font-bold text-gray-400">m</span>
      </div>
      <div className="mr-2">
        <span className="font-bold">{seconds}</span>
        <span className="text-sm font-bold text-gray-400">s</span>
      </div>
    </div>
  );
};

export default TodoTimer;
