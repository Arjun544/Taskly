import React from "react";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import PickImage from "./PickImage";

const StartUpDialogue = () => {
  const { setstartUpDialogue, setUserName, setUserProfile } =
    useContext(AppContext);

  const [profile, setprofile] = useState("/place holder.jpg");
  const [nameInput, setNameInput] = useState("");

  const handleDialogueSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", nameInput);
    localStorage.setItem("profile", profile);
    setUserName(nameInput);
    setUserProfile(profile);
    setstartUpDialogue(false);
  };

  const handleDialogueCancel = (e) => {
    e.preventDefault();
    localStorage.setItem("username", "");
    localStorage.setItem("profile", "");
    setUserName("Unknown");
    setUserProfile("/place holder.jpg");
    setstartUpDialogue(false);
  };

  return (
    <div className="h-1/2 w-1/3 rounded-3xl flex flex-col justify-center items-center bg-gray-300 bg-opacity-50  backdrop-filter backdrop-blur-sm ">
      {/* User Prifle selector */}
      <PickImage profile={profile} setprofile={setprofile} />

      <span className="text-black text-xl font-semibold mb-10">
        Enter your name
      </span>
      <div className="form-control w-1/2 ">
        <input
          className="py-3 pl-4 rounded-xl font-semibold"
          type="text"
          placeholder="Username"
          class="input"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        ></input>
      </div>
      <div className="flex items-center mt-10">
        <button
          onClick={handleDialogueCancel}
          className="flex-none px-12 py-3 mr-10  text-sm  rounded-2xl font-medium tracking-wider text-white transition-colors duration-200 transform bg-gray-600 hover:bg-gray-500 focus:bg-greay-300 focus:ring"
        >
          Cancel
        </button>
        <button
          onClick={handleDialogueSubmit}
          className="flex-none px-12 py-3  text-sm  rounded-2xl  font-medium tracking-wider text-white transition-colors duration-200 transform bg-green-600 hover:bg-green-500 focus:bg-green-300 focus:ring"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StartUpDialogue;
