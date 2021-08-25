import React, { forwardRef } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoSchedular = ({
  date,
  setDate,
  currentTodo,
  setCurrentTodo,
  isEditing,
}) => {
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="example-custom-input"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      ref={ref}
    >
      {value}
    </button>
  ));

  return (
    <div className=" flex justify-center items-center w-56 h-12 rounded-xl shadow-sm font-semibold bg-bgColor-light">
      <DatePicker
        selected={isEditing ? currentTodo.scheduledDate : date}
        onChange={
          isEditing
            ? (date) => {
                setDate(date);
                setCurrentTodo({
                  ...currentTodo,
                  scheduledDate: date,
                  updatedAt: Date.now(),
                });
              }
            : (date) => {
                setDate(date);
              }
        }
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        minDate={Date.now()}
        timeCaption="time"
        placeholderText="Select date"
        dateFormat="MMMM d, yyyy h:mm aa"
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};

export default TodoSchedular;
