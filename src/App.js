import "./App.css";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";
import { useState, useEffect, createContext } from "react";

import LeftComponent from "./components/LeftComponent";
import CenterComponent from "./components/CenterComponent";
import RightContainer from "./components/RightContainer";
import StartUpDialogue from "./components/StartUpDialogue";
import ChangeProfileDialogue from "./components/ChangeProfileDialogue";

if (typeof window !== "undefined") {
  injectStyle();
}

export const AppContext = createContext(null);

function App() {
  const [filterStatus, setfilterStatus] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [startUpDialogue, setstartUpDialogue] = useState(true);
  const [changeProfileDialogue, setChangeProfileUpDialogue] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [percentage, setPercentage] = useState(0);

  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [favList, setFavList] = useState(() => {
    const favTodos = localStorage.getItem("favTodos");
    if (favTodos) {
      return JSON.parse(favTodos);
    } else {
      return [];
    }
  });

  const [userName, setUserName] = useState(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) {
      return savedName;
    } else {
      return "";
    }
  });

  const [userProfile, setUserProfile] = useState(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      return savedProfile;
    } else {
      return "";
    }
  });

  useEffect(() => {
    handleSortFilter();
    localStorage.setItem("todos", JSON.stringify(todoList));
    localStorage.setItem("favTodos", JSON.stringify(favList));
  }, [todoList, favList, filterStatus, selectedCategory]);

  const handleSortFilter = () => {
    switch (filterStatus) {
      case "Completed":
        setFilteredTodos(todoList.filter((todo) => todo.isCompleted === true));
        break;
      case "InCompleted":
        setFilteredTodos(todoList.filter((todo) => todo.isCompleted === false));
        break;
      case "General":
        setFilteredTodos(
          todoList.filter((todo) => todo.category === "General")
        );
        break;
      case "Home":
        setFilteredTodos(todoList.filter((todo) => todo.category === "Home"));
        break;
      case "Work":
        setFilteredTodos(todoList.filter((todo) => todo.category === "Work"));
        break;
      case "Health":
        setFilteredTodos(
          todoList.filter((todo) => todo.category === "General")
        );
        break;
      case "Vacation":
        setFilteredTodos(
          todoList.filter((todo) => todo.category === "Vacation")
        );
        break;
      case "Gift":
        setFilteredTodos(todoList.filter((todo) => todo.category === "Gift"));
        break;
      case "Ideas":
        setFilteredTodos(todoList.filter((todo) => todo.category === "Ideas"));
        break;
      case "Payment":
        setFilteredTodos(
          todoList.filter((todo) => todo.category === "Payment")
        );
        break;
      default:
        setFilteredTodos(todoList);
        break;
    }
  };

  return (
    <AppContext.Provider
      value={{
        todoList,
        setTodoList,
        favList,
        setFavList,
        filteredTodos,
        setFilteredTodos,
        filterStatus,
        setfilterStatus,
        selectedCategory,
        setSelectedCategory,
        startUpDialogue,
        setstartUpDialogue,
        changeProfileDialogue,
        setChangeProfileUpDialogue,
        userName,
        setUserName,
        userProfile,
        setUserProfile,
        percentage,
        setPercentage,
      }}
    >
      <div className="App flex w-screen h-screen">
        {localStorage.getItem("username") === "" && startUpDialogue && (
          <div className=" flex absolute z-50 w-screen h-screen bg-gray-50 bg-opacity-0 backdrop-filter backdrop-blur-sm justify-center items-center">
            <StartUpDialogue
              setstartUpDialogue={setstartUpDialogue}
              setUserName={setUserName}
              setUserProfile={setUserProfile}
            />
          </div>
        )}
        {changeProfileDialogue && (
          <div className=" flex absolute z-50 w-screen h-screen bg-gray-50 bg-opacity-0 backdrop-filter backdrop-blur-sm justify-center items-center">
            <ChangeProfileDialogue
              setstartUpDialogue={setChangeProfileUpDialogue}
              setUserName={setUserName}
              setUserProfile={setUserProfile}
              currentName={userName}
              currentProfile={userProfile}
            />
          </div>
        )}
        {/* Left Container*/}
        <LeftComponent />
        {/* center Container*/}
        <CenterComponent />
          <RightContainer />
        
        <ToastContainer newestOnTop={true} draggable={false} />;
      </div>
    </AppContext.Provider>
  );
}

export default App;
