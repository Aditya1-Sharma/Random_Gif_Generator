import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_KEY;
function Tag() {
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("apple");
  const [gif, setGif] = useState("");
  console.log(tag);

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const image = data.data.images.downsized_large.url;
    setGif(image);
    console.log(image);

    setLoading(false);

    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full bg-purple-400 border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="">Random Gifs {tag}</h1>
      <div className="relative ">
        {loading ? "loading..." : <img src={gif} alt="No GF" width="450px" />}
      </div>

      <input
        type="text"
        className=" w-5/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={(e) => setTag(e.target.value)}
        value={tag}
      />
      <button
        onClick={fetchData}
        className="w-5/12  bg-yellow-400 py-2 rounded-lg mb-[20px] font-bold uppercase">
        Generate{" "}
      </button>
      <button></button>
    </div>
  );
}

export default Tag;
