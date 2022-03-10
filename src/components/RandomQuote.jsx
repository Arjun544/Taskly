import { RefreshIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    try {
      setIsloading(true);
      const response = await fetch(
        "https://api.quotable.io/random?maxLength=50"
      );
      const data = await response.json();
      console.log(data);
      setQuote(data);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.log(error);
    }
  };

  const handleRefresh = async (e) => {
    e.preventDefault();
    await getQuote();
  };

  return (
    <div className="flex h-40 rounded-3xl bg-gradient-to-tl from-grey-light to-amber-light mt-36 px-6 items-center justify-center shadow-lg hover:shadow-xl">
      {isLoading ? (
        <span className="text-black font-semibold">Loading quote for you</span>
      ) : (
        <div className="flex flex-col justify-evenly">
          <span className="text-black font-semibold mb-6 tracking-wider">
            {quote.content}
          </span>
          <div className="flex items-center justify-between w-full ">
            <span className="text-gray-500 font-semibold tracking-wider text-sm">
              {quote.author}
            </span>
            <RefreshIcon
              onClick={(e) => handleRefresh(e)}
              className="h-5 w-5 cursor-pointer hover:text-green-600"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomQuote;
