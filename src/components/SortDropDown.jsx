/* This example requires Tailwind CSS v2.0+ */
import { useState, useRef, useContext } from "react";
import useOutsideClick from "../useOutsideClick";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { AppContext } from "../App";

const SortDropDown = () => {
  const { filterStatus, setfilterStatus } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSortAll = (e) => {
    e.preventDefault();
    setfilterStatus("All");
  };

  const handleSortCompleted = (e) => {
    e.preventDefault();
    setfilterStatus("Completed");
  };

  const handleSortInCompleted = (e) => {
    e.preventDefault();
    setfilterStatus("InCompleted");
  };
  const handleSortGeneral = (e) => {
    e.preventDefault();
    setfilterStatus("General");
  };

  const handleSortHome = (e) => {
    e.preventDefault();
    setfilterStatus("Home");
  };

  const handleSortWork = (e) => {
    e.preventDefault();
    setfilterStatus("Work");
  };
  const handleSortHealth = (e) => {
    e.preventDefault();
    setfilterStatus("Health");
  };
  const handleSortVacation = (e) => {
    e.preventDefault();
    setfilterStatus("Vacation");
  };
  const handleSortGift = (e) => {
    e.preventDefault();
    setfilterStatus("Gift");
  };

  const handleSortIdeas = (e) => {
    e.preventDefault();
    setfilterStatus("Ideas");
  };
  const handleSortPayment = (e) => {
    e.preventDefault();
    setfilterStatus("Payment");
  };

  return (
    <div
      ref={ref}
      onClick={toggleMenu}
      className="flex relative h-12  bg-bgColor-light shadow-sm border-none px-4 w-1/5 rounded-xl hover:bg-gray-50 items-center justify-between cursor-pointer"
    >
      <span className="font-semibold">{filterStatus}</span>

      <ChevronDownIcon className="h-4 w-4 relative text-gray cursor-pointer"></ChevronDownIcon>

      {isOpen && (
        <div className="absolute top-14 z-30 left-0 right-1 h-30 w-52 flex flex-col py-4 px-2 rounded-2xl shadow bg-gray-50">
          <span className="font-semibold mb-1 pl-4 rounded-md text-gray-400 hover:bg-yellow-100">
            <div onClick={handleSortAll}>All</div>
          </span>
          <span className="font-semibold mb-1 pl-4 rounded-md text-gray-400 hover:bg-yellow-100">
            <div onClick={handleSortCompleted}>Completed</div>
          </span>
          <span className="font-semibold mb-1 pl-4 rounded-md text-gray-400 hover:bg-yellow-100">
            <div onClick={handleSortInCompleted}>InCompleted</div>
          </span>
          <span className="font-semibold mb-1 pl-4 rounded-md text-gray-400 hover:bg-yellow-100">
            <div onClick={handleSortGeneral}>General</div>
          </span>
          <span className="font-semibold mb-1 pl-4 rounded-md text-gray-400 hover:bg-yellow-100">
            <div onClick={handleSortHome}>Home</div>
          </span>
          <span className="font-semibold mb-1 pl-4 rounded-md text-gray-400 hover:bg-yellow-100">
            <div onClick={handleSortWork}>Work</div>
          </span>
          <span className="font-semibold mb-1 pl-4 rounded-md text-gray-400 hover:bg-yellow-100">
            <div onClick={handleSortHealth}>Health</div>
          </span>

          <span className="font-semibold mb-1 pl-4 rounded-md text-gray-400 hover:bg-yellow-100">
            <div onClick={handleSortVacation}>Vacation</div>
          </span>
          <span className="font-semibold mb-1 pl-4 rounded-md text-gray-400 hover:bg-yellow-100">
            <div onClick={handleSortGift}>Gift</div>
          </span>
          <span className="font-semibold mb-1 pl-4 rounded-md text-gray-400 hover:bg-yellow-100">
            <div onClick={handleSortIdeas}>Ideas</div>
          </span>
          <span className="font-semibold mb-1 pl-4 rounded-md text-gray-400 hover:bg-yellow-100">
            <div onClick={handleSortPayment}>Payment</div>
          </span>
        </div>
      )}
    </div>
  );
};

export default SortDropDown;
