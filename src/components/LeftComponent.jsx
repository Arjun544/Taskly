import Logo from "./Logo";
import moment from "moment";
import { TrashIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../App";

const LeftComponent = () => {
  const { favList, setFavList } = useContext(AppContext);

  const deleteTodo = (e, todo) => {
    e.preventDefault();
    setFavList(favList.filter((item) => item.id !== todo.id));
    toast.error("Todo has been removed from favourites");
  };

  return (
    <div className="flex flex-col w-1/3 h-screen px-10 bg-bgColor-light">
      {/* logo*/}
      <div className="flex items-center mt-10">
        <Logo />
        <h1 className="text-black text-xl font-bold tracking-widest mx-2">Taskly</h1>
      </div>
      {/* Favourite List*/}
      <h1 className="text-lg font-semibold tracking-wider text-gray-500 mt-12 mb-6">Favourites</h1>
      <div className=" scrollbar scrollbar-thin hover:scrollbar-thumb-amber-light scrollbar-thumb-gray-200 scrollbar-track-gray-100">
        {favList.length === 0 ? (
          <div className="flex items-center justify-center mt-72">
            <span className="font-semibold tracking-wider text-gray-300 ">No favourites yet</span>
          </div>
        ) : (
          favList.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white border-none p-5 mb-5 rounded-2xl shadow-sm justify-between "
            >
              <div className="flex items-center">
                <span
                  className={
                    item.isCompleted === true
                      ? "line-through font-medium overflow-hidden text-black tracking-wider truncate w-40"
                      : "font-medium overflow-hidden text-black tracking-wider truncate w-40"
                  }
                >
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                </span>
              </div>
              <span className="font-medium text-xs text-gray-400">
                {moment(item.createdAt).format("hh:mm A")}
              </span>
              <TrashIcon
                onClick={(e) => deleteTodo(e, item)}
                className="h-4 w-4 relative text-red-400 cursor-pointer"
              ></TrashIcon>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LeftComponent;
