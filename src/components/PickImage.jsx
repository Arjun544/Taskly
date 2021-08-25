import React from "react";

const PickImage = ({ profile, setprofile }) => {
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setprofile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img
        src={profile}
        alt=""
        id="img"
        className="img  shadow mb-10 h-32 w-32 rounded-full object-cover bg-gray-50"
      />
      <span className="relative pt-2 font-semibold text-white mb-5 h-10 w-40 rounded-xl bg-amber-light cursor-pointer">
        Upload
        <input
          className="absolute inset-x-0 mx-auto -my-1 w-52 opacity-0 cursor-pointer"
          type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={imageHandler}
        />
      </span>
    </div>
  );
};

export default PickImage;
