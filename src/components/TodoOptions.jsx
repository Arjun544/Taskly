/* This example requires Tailwind CSS v2.0+ */
import { useState, useRef } from "react";
import useOutsideClick from "../useOutsideClick";
import { PencilIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";

const TodoOptions = ({
  todo,
  setTodoList,
  setIsEditing,
  setCurrentTodo,
  todoList,
  favList,
  setFavList,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const editPressed = (e) => {
    e.preventDefault();
    setIsEditing(true);
    setCurrentTodo(todo);
    setIsOpen(false);
  };

  const addToFavPressed = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setFavList((favList) => {
      return [...favList, todo];
    });
    toast.success("Todo has been added to favourites");
  };

  const removeFromFavPressed = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setFavList(favList.filter((item) => item.id !== todo.id));
    toast.error("Todo has been removed from favourites");
  };

  const deletePressed = (e) => {
    e.preventDefault();
    setTodoList(todoList.filter((item) => item.id !== todo.id));
    setFavList(favList.filter((item) => item.id !== todo.id));
    setIsOpen(false);
    toast.error("Todo has been deleted");
  };

  return (
    <div className=" flex items-center justify-between w-full">
      <div className="flex">
        <PencilIcon className="h-5 w-4 mr-1 relative text-amber-light cursor-pointer"></PencilIcon>
        <span className="  text-gray-400 text-sm font-medium cursor-pointer hover:font-bold hover:text-black">
          <div onClick={editPressed}>Edit</div>
        </span>
      </div>
      {favList.includes(todo) ? (
        <div className="flex">
          <HeartIcon className="h-5 w-4 mr-1 relative text-red-800 cursor-pointer"></HeartIcon>
          <span className="text-gray-400 text-sm font-medium cursor-pointer hover:font-bold hover:text-black">
            <div onClick={removeFromFavPressed}>Remove from fav</div>
          </span>
        </div>
      ) : (
        <div className="flex">
          <HeartIcon className="h-5 w-4 mr-1 relative text-red-800 cursor-pointer"></HeartIcon>
          <span className=" text-gray-400 text-sm font-medium cursor-pointer hover:font-bold hover:text-black">
            <div onClick={addToFavPressed}>Add to fav</div>
          </span>
        </div>
      )}

      <div className="flex">
        <TrashIcon className="h-5 w-4 mr-1 relative text-red-500 cursor-pointer"></TrashIcon>
        <span className="mr-3  text-gray-400 text-sm font-medium cursor-pointer hover:font-bold hover:text-black">
          <div onClick={deletePressed}>Delete</div>
        </span>
      </div>
    </div>
  );
};

export default TodoOptions;
