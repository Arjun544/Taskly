import { useState, useRef, useContext } from "react";
import useOutsideClick from "../useOutsideClick";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { AppContext } from "../App";

const CategoryDropDown = ({ currentTodo, isEditing}) => {
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);
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

  const handleSortGeneral = (e) => {
    e.preventDefault();
    setSelectedCategory("General");
  };

  const handleSortHome = (e) => {
    e.preventDefault();
    setSelectedCategory("Home");
  };

  const handleSortWork = (e) => {
    e.preventDefault();
    setSelectedCategory("Work");
  };
  const handleSortHealth = (e) => {
    e.preventDefault();
    setSelectedCategory("Health");
  };
  const handleSortVacation = (e) => {
    e.preventDefault();
    setSelectedCategory("Vacation");
  };
  const handleSortGift = (e) => {
    e.preventDefault();
    setSelectedCategory("Gift");
  };

  const handleSortIdeas = (e) => {
    e.preventDefault();
    setSelectedCategory("Ideas");
  };
  const handleSortPayment = (e) => {
    e.preventDefault();
    setSelectedCategory("Payment");
  };

  return (
    <div
      ref={ref}
      onClick={toggleMenu}
      className={
         "flex relative h-12 z-50 bg-bgColor-light shadow-sm border-none px-4  w-1/3 rounded-xl hover:bg-gray-50 items-center justify-between cursor-pointer"
      }
    >
      <span className="font-semibold text-sm">
        {isEditing ? currentTodo.category : selectedCategory}
      </span>

      <ChevronDownIcon className="h-4 w-4 relative text-gray cursor-pointer"></ChevronDownIcon>
      {isOpen && (
        <div className="absolute top-14 left-0 right-1 h-30 w-48 flex flex-col py-4 px-2 rounded-2xl shadow bg-gray-50">
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

export default CategoryDropDown;
