import React from "react";
import moment from "moment";
import { v4 as uniqueId } from "uuid";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
import { toast } from "react-toastify";
import TodoOptions from "./TodoOptions";
import SortDropDown from "./SortDropDown";
import Lottie from "lottie-react";
import empty from "../images/empty.json";
import TodoSchedular from "./TodoSchedular";
import { Accordion, AccordionItem } from "react-sanfona";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ChevronUpIcon } from "@heroicons/react/solid";
import TodoTimer from "./TodoTimer";
import CategoryDropDown from "./CategoryDropDown";

const CenterComponent = () => {
  const {
    todoList,
    filteredTodos,
    setTodoList,
    favList,
    setFavList,
    selectedCategory,
    setPercentage,
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isTileOpen, setIsTileOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [date, setDate] = useState(Date.now);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newTodo = {
        id: uniqueId(),
        title: inputValue,
        category: selectedCategory,
        isFavourite: false,
        isCompleted: false,
        scheduledDate: date,
        createdAt: Date.now(),
      };
      setTodoList((todoList) => {
        return [...todoList, newTodo];
      });
      setInputValue("");
    }
  };

  const calcPercentage = () => {
    const dailyTasks = todoList.filter(
      (todo) => new Date(todo.scheduledDate).getDate() === new Date().getDate()
    );
    const completedTasks =
      dailyTasks.filter((todo) => todo.isCompleted === true).length + 1;
    const totalTasks = dailyTasks.length;

    setPercentage((completedTasks / totalTasks) * 100);
  };

  const handleCheckbox = (e, item) => {
    setTodoList(
      todoList.map((newItem) => {
        if (newItem.id === item.id) {
          return { ...newItem, isCompleted: !newItem.isCompleted };
        }
        return newItem;
      })
    );
    setFavList(
      favList.map((newItem) => {
        if (newItem.id === item.id) {
          return { ...newItem, isCompleted: !newItem.isCompleted };
        }
        return newItem;
      })
    );
    calcPercentage();
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
    toast.success("Todo has been updated");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  function handleEditInputChange(e) {
    setCurrentTodo({
      ...currentTodo,
      title: e.target.value,
      category: selectedCategory,
      scheduledDate: date,
      updatedAt: Date.now(),
    });
  }

  function handleSubmitInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedTodoItem = todoList.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    const updatedFavItem = favList.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setIsEditing(false);
    setTodoList(updatedTodoItem);
    setFavList(updatedFavItem);
  }

  useEffect(() => {}, [currentTodo]);

  return (
    <div className="flex flex-col bg-white py-10 pr-16 pl-12 relative -right-96 overflow-x-hidden scrollbar scrollbar-thin hover:scrollbar-thumb-amber-light scrollbar-thumb-gray-200 scrollbar-track-gray-100">
      {/* Current Day and Date*/}
      <h1 className="text-lg font-bold text-black mt-2">Today's Schedule</h1>
      <h1 className="text-lg font-bold text-amber-light mt-2 mb-6">
        {moment(Date().now).format("dddd")} {moment(Date().now).format("Do")}
      </h1>
      {/* Tect Field Ans Button*/}
      <form className="flex max-w-screen justify-between">
        {isEditing ? (
          <div className="flex flex-grow mr-22">
            <input
              type="text"
              placeholder="Enter task"
              value={currentTodo.title}
              onChange={handleEditInputChange}
              className="px-3 py-4 placeholder-blueGray-300 shadow-sm font-semibold text-blueGray-600 bg-bgColor-light rounded-tl-2xl rounded-bl-2xl border-0 outline-none focus:outline-none focus:ring w-full"
            />
            <button
              onClick={handleEditSubmit}
              className="flex-none px-4 py-3  text-sm  rounded-tr-2xl rounded-br-2xl font-medium tracking-wider text-white transition-colors duration-200 transform bg-green-600 hover:bg-green-500 focus:bg-green-300 focus:ring"
            >
              Update
            </button>
            <button
              onClick={handleCancel}
              className="flex-none px-4 py-3 ml-5 text-sm  rounded-2xl font-medium tracking-wider text-white transition-colors duration-200 transform bg-red-400 hover:bg-red-300 focus:bg-red-300 focus:ring"
            >
              Cancel
            </button>
            {/*  Date Time picker */}
            <div className=" w-1/2 h-12 mx-20 rounded-xl">
              <TodoSchedular
                date={date}
                setDate={setDate}
                currentTodo={currentTodo}
                setCurrentTodo={setCurrentTodo}
                isEditing={true}
              />
            </div>
            <CategoryDropDown />
          </div>
        ) : (
          <div
            className={
              inputValue
                ? "flex flex-grow h-15 mr-22 w-full"
                : "flex flex-grow h-15 mr-44 w-full"
            }
          >
            <input
              type="text"
              placeholder="Enter task"
              value={inputValue}
              onChange={handleSubmitInputChange}
              className="px-3 py-4 placeholder-blueGray-300 shadow-sm font-semibold text-blueGray-600 bg-bgColor-light rounded-tl-2xl rounded-bl-2xl border-0 outline-none focus:outline-none focus:ring w-96"
            />
            <button
              onClick={handleSubmit}
              className="flex-none px-4 py-3 mr-30 text-sm  rounded-tr-2xl rounded-br-2xl font-medium tracking-wider text-white transition-colors duration-200 transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
            >
              Add New
            </button>
            {/*  Date Time pciker */}
            {inputValue && (
              <div className=" w-1/2 h-12 mx-20 rounded-xl">
                <TodoSchedular
                  date={date}
                  setDate={setDate}
                  isEditing={false}
                />
              </div>
            )}
            {inputValue && <CategoryDropDown />}
          </div>
        )}

        {!isEditing && !inputValue && <SortDropDown />}
      </form>
      {/* All Tasks Grid */}
      {/* show empty animation if filtered todos list is empty */}
      {filteredTodos.length === 0 ? (
        <div className="flex flex-col items-center justify-center m-auto">
          <Lottie className="h-40" animationData={empty} />
          <span className="font-bold text-gray-300">No task found</span>
        </div>
      ) : (
        <Accordion
          className="h-auto grid grid-cols-3 pt-6 pb-12 gap-6 items-start mt-6 "
          isHovered={true}
        >
          {filteredTodos
            .slice()
            .reverse()
            .map((item) => {
              return (
                <AccordionItem
                  onExpand={() => setIsTileOpen(true)}
                  onClose={() => setIsTileOpen(false)}
                  title={
                    <div
                      key={item.id}
                      className="flex flex-wrap h-16 items-center bg-bgColor-light border-none px-4 rounded-t-2xl shadow-sm justify-between justify-items-center cursor-pointer hover:shadow-md"
                    >
                      <div className="flex items-center justify-center">
                        <div className="mr-3">
                          <input
                            type="checkbox"
                            checked={item.isCompleted}
                            onChange={(e) => handleCheckbox(e, item)}
                            className="checkbox mt-1 hover:border-amber-light"
                          ></input>
                        </div>
                        <span
                          className={
                            item.isCompleted
                              ? "line-through line font-medium overflow-hidden truncate w-28"
                              : "font-medium overflow-hidden truncate w-28"
                          }
                        >
                          {item.title.charAt(0).toUpperCase() +
                            item.title.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-xs text-gray-400 mr-1">
                          {moment(item.createdAt).format("lll")}
                        </span>
                        {isTileOpen ? (
                          <ChevronUpIcon className="h-6 w-6 relative text-gray-300 cursor-pointer"></ChevronUpIcon>
                        ) : (
                          <ChevronDownIcon className="h-6 w-6 relative text-gray-300 cursor-pointer"></ChevronDownIcon>
                        )}
                      </div>
                    </div>
                  }
                  expanded={item === 1}
                >
                  <div className="flex flex-col h-32 items-start bg-bgColor-light border-none px-4 rounded-b-2xl shadow-sm">
                    <div className="flex">
                      <span className=" pr-20 pb-2 text-sm font-semibold">
                        Category
                      </span>
                      <span className="text-black pl-4 text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex">
                      <span className=" pr-9 pb-2 text-sm font-semibold">
                        Scheduled Date
                      </span>
                      <span className="text-black pl-4 text-sm font-semibold">
                        {moment(item.scheduledDate).format("lll")}
                      </span>
                    </div>
                    <div className="flex mb-4">
                      <span className=" pr-24 text-sm font-semibold">
                        Time left
                      </span>
                      {new Date(item.scheduledDate).getTime() <
                      new Date().getTime() ? (
                        <span className="text-red-500 text-sm font-semibold">
                          Expired
                        </span>
                      ) : (
                        <TodoTimer todoTime={item.scheduledDate} />
                      )}
                    </div>
                    <TodoOptions
                      todo={item}
                      setTodoList={setTodoList}
                      setIsEditing={setIsEditing}
                      setCurrentTodo={setCurrentTodo}
                      setFavList={setFavList}
                      todoList={todoList}
                      favList={favList}
                    />
                  </div>
                </AccordionItem>
              );
            })}
        </Accordion>
      )}
    </div>
  );
};

export default CenterComponent;
