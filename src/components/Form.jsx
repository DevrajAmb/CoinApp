import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchedCoin } from "../features/coins/coinSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchedCoin(text));
    navigate("/search/" + text);
    setText("");
  };

  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border p-4 w-full md:w-3/4 my-2 bg-white rounded-lg md:rounded-none md:rounded-s-lg placeholder:text-sm focus:outline-none"
        placeholder="Search Any Coin"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-green-600 py-4 px-6 w-full md:w-1/4 rounded-lg md:rounded-none md:rounded-e-lg text-white font-bold">
        Search
      </button>
    </form>
  );
};

export default Form;
